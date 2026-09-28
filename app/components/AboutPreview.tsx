import { Link } from "react-router";

const AboutPreview = () => {
    return (  
        <section className="mt-12 p-10 flex flex-col items-center gap-8 bg-gray-900 md:flex-row">
            <img src="./public/images/profile.jpg" 
                alt="profile"
                className="w-40 h-40 rounded-full object-cover border-4 border-blue-500 shaodw-md " />
            <div>
                <h2 className="text-2xl text-white mb-2 font-bold">👋 About Me</h2>
                <p className="text-gray-200 md-4 max-w-4xl">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut esse sapiente doloribus voluptatum odit consectetur veniam cumque mollitia itaque ullam blanditiis recusandae nam, doloremque, placeat, suscipit ipsam harum deserunt? Debitis accusamus similique obcaecati iusto magnam velit perspiciatis voluptates a, eligendi accusantium ut, at repudiandae sapiente quisquam porro saepe quae repellat numquam tenetur ea! Consequatur qui molestiae in! Laborum, asperiores maiores?
                </p>
                <Link 
                    to='/about' 
                    className="inline-block text-blue-400 hover:underline text-sm">
                        Learn more about me..
                    </Link>
            </div>
        </section>
    );
}
 
export default AboutPreview;