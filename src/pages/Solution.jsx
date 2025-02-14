import { Rocket, Shield, Globe, Settings } from 'lucide-react';
function Solution() {
    return (
        <div className="flex flex-col text-center items-center pt-36">
        
        <h1 className="text-4xl text-white font-bold mb-12">Solution for creators</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 bg-gray-900 rounded-xl mt-10">
      {/* For scalability */}
      <div className="bg-gray-800 p-8 rounded-xl transition-all duration-300 hover:bg-gray-700 group">
        <div className="flex flex-col items-start">
          <div className="p-3 bg-white rounded-lg mb-4 group-hover:bg-amber-50 transition-colors">
            <Rocket size={32} className="text-black" />
          </div>
          <h2 className="text-2xl font-bold text-white mb-3">Scalability</h2>
          <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">
            Optimize your content with advanced scaling solutions that grow with your needs.
          </p>
        </div>
      </div>

      {/* For AI security*/}
      <div className="bg-gray-800 p-8 rounded-xl transition-all duration-300 hover:bg-gray-700 group">
        <div className="flex flex-col items-start">
          <div className="p-3 bg-white rounded-lg mb-4 group-hover:bg-amber-50 transition-colors">
            <Shield size={32} className="text-black" />
          </div>
          <h2 className="text-2xl font-bold text-white mb-3">AI Security</h2>
          <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">
            Protect your data and contracts with advanced AI-driven security measures.
          </p>
        </div>
      </div>

      {/* For Global Reach */}
      <div className="bg-gray-800 p-8 rounded-xl transition-all duration-300 hover:bg-gray-700 group">
        <div className="flex flex-col items-start">
          <div className="p-3 bg-white rounded-lg mb-4 group-hover:bg-amber-50 transition-colors">
            <Globe size={32} className="text-black" />
          </div>
          <h2 className="text-2xl font-bold text-white mb-3">Global Reach</h2>
          <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">
            Access a decentralized network that supports creators worldwide.
          </p>
        </div>
      </div>

      {/* For User friendliness */}
      <div className="bg-gray-800 p-8 rounded-xl transition-all duration-300 hover:bg-gray-700 group">
        <div className="flex flex-col items-start">
          <div className="p-3 bg-white rounded-lg mb-4 group-hover:bg-orange-400 transition-colors">
            <Settings size={32} className="text-black" />
          </div>
          <h2 className="text-2xl font-bold text-white mb-3">User-Friendly Interface</h2>
          <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">
            Easily manage your contracts and assets with our intuitive platform.
          </p>
        </div>
      </div>
    </div>
    
            </div>
    );
  }
  
  export default Solution;