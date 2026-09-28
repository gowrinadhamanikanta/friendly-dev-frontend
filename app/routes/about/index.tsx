import type { Route } from "./+types/index";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Friendly-dev | About" },
    { name: "description", content: "Custom App" },
  ];
}
const AboutPage = () => {
    return (
        <>
            <div className="max-w-5xl mx-auto px-6 py-16 bg-gray-900">
                <div className="flex flex-col md:flex-row md:items-start items-center gap-10 mb-12">
                    <img src="./public/images/profile.jpg" 
                        alt="profile"
                        className="w-40 h-40 rounded-full object-cover border-4 border-blue-500 shaodw-md " />
                    <div>
                        <h1 className='text-3xl font-bold text-white mb-2'>
                        Hello! Mani 👋
                        </h1>
                        <p className="text-gray-300 text-lg">
                        I'm a passionate web developer and photographer who loves the nature and helping others for webservices grow into confident.
                        </p>
                    </div>
                </div>    
                <div className="mb-12">
                {/*Bio Section*/}
                    <h2 className="text-2xl font-semibold text-white mb-4">My Mission</h2>
                    <p className="text-gray-300 text-md">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem sint ex porro natus quisquam similique, explicabo earum excepturi at officia commodi ipsum corporis hic iusto, consectetur molestiae quas magni, laboriosam ad! At ipsam enim error nostrum ratione labore, dignissimos quod nobis, quam repellat dolores cupiditate deleniti magni. Labore, doloribus beatae?
                    </p>
                </div>
                {/*TechStack*/}
                <h2 className="text-2xl font-semibold text-white mb-4">
                    Tech I Use
                </h2>
                <ul className="flex flex-wrap gap-4 text-sm text-gray-300">
                    {[
                        'React',
                        'Tailwindcss',
                        'HTML','CSS','JS',
                        'Python'
                    ].map((tech)=>(
                        <li key={tech} className="bg-gray-600 px-3 py-1 rounded-md">{tech}</li>
                    ))}
                </ul>
            </div>
            

        </>
    );
}
export default AboutPage;