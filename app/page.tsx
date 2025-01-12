import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="text-center py-12">
        <h1 className="text-4xl font-bold text-white mb-4">Welcome to your Altaner</h1>
        <p className="text-xl text-gray-400 mb-8">Start chatting to edit it</p>
        <Button className="bg-white text-black hover:bg-gray-200">
          Start Chatting
        </Button>
      </div>
    </div>
  )
}