"use client";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { db, storage } from "../Firebase"; // Firebase imports
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

const CreateBlog = () => {
  const [formData, setFormData] = useState({
    title: "",
    date: new Date().toISOString().split("T")[0],
    heading: "",
    text: "",
    image: null,
  });

  const [imagePreview, setImagePreview] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // Handle Image Selection
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData({ ...formData, image: file });

      // Image Preview
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  // Handle Form Submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.title || !formData.heading || !formData.text || !formData.image) {
      alert("Please fill all fields and upload an image");
      return;
    }

    setLoading(true);
    try {
      // Upload Image to Firebase Storage
      const imageRef = ref(storage, `blogImages/${Date.now()}-${formData.image.name}`);
      await uploadBytes(imageRef, formData.image);
      const imageUrl = await getDownloadURL(imageRef);

      // Store Blog Data in Firestore
      await addDoc(collection(db, "blogs"), {
        title: formData.title,
        date: formData.date,
        heading: formData.heading,
        text: formData.text,
        image: imageUrl,
        createdAt: serverTimestamp(),
      });

      alert("Blog post created successfully!");
      navigate("/blog"); // Redirect to Blog Page
    } catch (error) {
      console.error("Error creating blog post:", error);
      alert("Failed to create blog post");
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-20 px-4">
      <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold mb-6">Create New Blog Post</h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Image Upload */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Blog Image</label>
            <input type="file" accept="image/*" onChange={handleImageChange} className="w-full border border-gray-300 rounded-md p-2" />
            {imagePreview && <img src={imagePreview} alt="Preview" className="mt-2 max-h-48 rounded-md object-cover" />}
          </div>

          {/* Title */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Category/Title</label>
            <input type="text" value={formData.title} onChange={(e) => setFormData({ ...formData, title: e.target.value })} className="w-full border border-gray-300 rounded-md p-2" placeholder="e.g., DEVELOPMENT" />
          </div>

          {/* Date */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Date</label>
            <input type="date" value={formData.date} onChange={(e) => setFormData({ ...formData, date: e.target.value })} className="w-full border border-gray-300 rounded-md p-2" />
          </div>

          {/* Heading */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Heading</label>
            <input type="text" value={formData.heading} onChange={(e) => setFormData({ ...formData, heading: e.target.value })} className="w-full border border-gray-300 rounded-md p-2" placeholder="Enter blog heading" />
          </div>

          {/* Content */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Content</label>
            <textarea value={formData.text} onChange={(e) => setFormData({ ...formData, text: e.target.value })} rows={6} className="w-full border border-gray-300 rounded-md p-2" placeholder="Enter blog content" />
          </div>

          {/* Submit Button */}
          <button type="submit" className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors" disabled={loading}>
            {loading ? "Posting..." : "Create Blog Post"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateBlog;
