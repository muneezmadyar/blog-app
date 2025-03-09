// import Image from "next/image"

import { assets } from "../assets/assets"

const Game = () => {
  return (
    <article className="max-w-6xl mx-auto px-4 py-8 md:py-12">
      {/* Title Section */}
      <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
        How to make a Game look more attractive with New VR & AI Technology
      </h1>

      {/* Main Hero Image */}
      <div className="relative w-full mb-8 rounded-xl">
        <img
          src={assets.sec4_image}
          alt="Person wearing VR headset"
        //   fill
          className="object-cover w-[70%]"
        //   priority
        />
      </div>

      {/* Article Content */}
      <div className="space-y-6 text-gray-700">
        <p className="leading-relaxed">
          Gaming has been evolving for far many years and bringing to gamers new immersive experiences and cutting-edge.
          Whether it's publishing state-of-the-art processes, building helpful products or developing tools and
          resources that enable others, we're committed to making AI accessible to everyone.
        </p>

        <p className="leading-relaxed">
          We're used to seeing controllers as a gateway. Now through AI, gameplay is as unpredictable as engaging and
          each level adds something new to the experience. The AI adapts to your style of play, making each session
          unique while maintaining the core mechanics that make the game enjoyable.
        </p>

        {/* Quote Section */}
        <blockquote className="border-l-4 border-purple-600 pl-4 my-8">
          <p className="italic text-lg text-gray-800">
            "People enjoy that controllers get just the power they take over the world, but the real evolution is that
            they'll be close and they'll be steadily linked with the world."
          </p>
          <cite className="block text-sm text-gray-600 mt-2">- Mark Thompson</cite>
        </blockquote>

        <p className="leading-relaxed">
          More than 5 billion unique players benefit from AI-powered features in Google's Play Games. Whether it's using
          Smart Compose in Gmail to write more effortlessly or FaceMatch to find that one great photo, AI helps people
          get things done every day. In gaming, AI is transforming how players interact with virtual worlds and how
          developers create them.
        </p>

        {/* Secondary Image */}
        <div className="relative w-full my-8 rounded-xl">
          <img
            src={assets.sec5_image}
            alt="Person interacting with VR interface"
            // fill
            className="object-cover w-[70%] h-{300px}"
          />
        </div>

        <p className="leading-relaxed">
          The future of gaming is here, and it's more immersive than ever. With advanced AI algorithms and cutting-edge
          VR technology, we're creating experiences that don't just entertain – they transport players into entirely new
          worlds.
        </p>
      </div>
    </article>
  )
}

export default Game

