import type { Route } from "./+types/index";
// import { Form, useActionData } from "react-router";

// export async function action({request}:Route.ActionArgs){
//   const formData = await request.formData();
//   const name = formData.get('name') as string;
//   const email = formData.get('email')as string;
//   const subject = formData.get('subject') as string;
//   const message = formData.get('message') as string;
//   const data = {
//     name,
//     email,
//     subject,
//     message
//   };

//   const errors: Record<string, string> = {};
//   if (!name) errors.name = 'Name is required';
//   if (!email) {
//     errors.email = 'Email is required';
//   } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
//     errors.email = 'Invalid email format';
//   }
//   if (!subject) errors.subject = 'Subject is required';

//   if (Object.keys(errors).length > 0) {
//     return { errors, data };
//   }

//   return { message: 'Form Submitted successfully',data};
// }

// export function meta({}: Route.MetaArgs) {
//   return [
//     { title: "Friendly-dev | Contacts" },
//     { name: "description", content: "Custom App" },
//   ];
// }

const ContactPage = () => {
  // const actionData = useActionData<typeof action>();
  // const errors = actionData?.errors||{}
    return (  
        <div className="max-w-3xl mx-auto px-6 py-8 bg-gray-900 mt-12">
            <h2 className="text-3xl font-bold mb-2 text-center">📬Contact Me</h2>
           
            <form action="https://formspree.io/f/meaopwpd" method="post" className="space-y-6">
              <div>
                <label htmlFor="name"
                className="block text-sm font-medium text-gray-300">
                  Full Name
               </label>
               <input type="text" 
                      id="name"
                      name="name"
                      className="w-full mt-1 px-4 py-2 border border-gray-700 rounded-lg bg-gray-800 text-gray-100"/>
                      
              </div>
              <div>
                <label htmlFor="email"
                className="block text-sm font-medium text-gray-300">
                  E-Mail
               </label>
               <input type="email" 
                      id="email"
                      name="email"
                      className="w-full mt-1 px-4 py-2 border border-gray-700 rounded-lg bg-gray-800 text-gray-100"/>
                      
              </div>
              <div>
                <label htmlFor="subject"
                className="block text-sm font-medium text-gray-300">
                  Subject
               </label>
               <input type="text" 
                      id="subject"
                      name="subject"
                      className="w-full mt-1 px-4 py-2 border border-gray-700 rounded-lg bg-gray-800 text-gray-100"/>
              </div>
              <div>
                <label htmlFor="message"
                className="block text-sm font-medium text-gray-300">
                  Message
               </label>
               <textarea
                      id="message"
                      name="message"
                      className="w-full mt-1 px-4 py-2 border border-gray-700 rounded-lg bg-gray-800 text-gray-100"/>
              </div>
              <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 cursor-pointer">Send Message</button>
            </form>
        </div>
    );
}
 
export default ContactPage;