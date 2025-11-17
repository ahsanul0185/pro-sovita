// "use client";

// import { useState } from "react";
// import { useForm } from "react-hook-form";
// import { Shield, ArrowRight, ChevronLeft, X } from "lucide-react";
// import Loader from "./Loader";
// import { useRouter } from "next/navigation";

// export default function Customer_info({setShowPopup}) {
//   const { register, handleSubmit } = useForm();
//   const [status, setStatus] = useState("");
//   const [isSubmitting, setIsSubmitting] = useState(false);
// const router = useRouter();

//   const onSubmit = async (data) => {
//     setIsSubmitting(true);
//     setStatus("Submitting...");
    
//     try {
//       const payload = {
//         name: data.firstName + " " + data.lastName,
//         email: data.email,
//         phone: data.phone,
//         company: "",
//         message: "",
//       };

//       const res = await fetch("/api/submit-bigin", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(payload),
//       });

//       const result = await res.json();

//       if (result.success) {
//         setIsSubmitting(false);
//         setStatus("Form submitted successfully!");
        
//         // Store in localStorage that customer info is submitted
//         localStorage.setItem("customerInfoSubmitted", "true");
//         localStorage.setItem("customerInfo", JSON.stringify({
//           firstName: data.firstName,
//           lastName: data.lastName,
//           email: data.email,
//           phone: data.phone,
//           submittedAt: new Date().toISOString()
//         }));

//         // Navigate to next page after a short delay
//         setTimeout(() => {
//           router.push("/thank-you");
//         }, 1500);
//       } else {
//         setStatus("Error: " + (result.error || "Unknown error"));
//         setIsSubmitting(false);
//       }
//     } catch (err) {
//       setStatus("Error submitting form. Please try again.");
//       setIsSubmitting(false);
//       console.log(err);
//     }
//   };

//   const handleContinue = () => {
//     handleSubmit(onSubmit)();
//   };

//   return (
//     <div className="fixed inset-0 top-0 left-0 z-100 px-4">
//         <div  onClick={() => setShowPopup(false)} className="absolute inset-0 bg-white/5 backdrop-blur-sm"/>
//         <div className="grid place-items-center h-full">
//       <div data-aos="fade-up" data-aos-duration="300" className="max-w-6xl mx-auto bg-dark z-10  rounded-xl  border-2 border-white/10">

 

//         {/* Main content */}
//         <div  className="relative p-8 md:p-12 transition-all duration-200">

//        <button onClick={() => setShowPopup(false)} className="absolute top-4 right-4 cursor-pointer ">
//             <X className="text-white hover:text-primary-light"/>
//         </button>

//               <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
//                 C’est parti ! Qui effectue la démarche sur Sovita ?
//               </h1>
//               <p className="text-gray-400 mb-8 leading-relaxed">
//             Ces informations nous permettront de vous assister au cours de votre création, et seront nécessaires pour votre dossier.
//               </p>

//           <div className="grid md:grid-cols-2 gap-12 items-start">
//             {/* Form section */}
//             <div>
//               <div className="space-y-4">
//                 <div className="grid md:grid-cols-2 gap-4">
//                   <input
//                     type="text"
//                     placeholder="Prénom"
//                     className="w-full  border border-white/30 rounded-lg px-4 py-3 text-white placeholder-gray-300/80 focus:outline-none focus:ring-2 focus:ring-[#007bf4] focus:border-transparent"
//                     {...register("firstName", { required: true })}
//                   />
//                   <input
//                     type="text"
//                     placeholder="Nom"
//                     className="w-full  border border-white/30 rounded-lg px-4 py-3 text-white placeholder-gray-300/80 focus:outline-none focus:ring-2 focus:ring-[#007bf4] focus:border-transparent"
//                     {...register("lastName", { required: true })}
//                   />
//                 </div>

//                 <input
//                   type="email"
//                   placeholder="E-mail"
//                   className="w-full  border border-white/30 rounded-lg px-4 py-3 text-white placeholder-gray-300/80 focus:outline-none focus:ring-2 focus:ring-[#007bf4] focus:border-transparent"
//                   {...register("email", { required: true })}
//                 />

//                 <div className="flex gap-2">
//                   <input
//                     type="tel"
//                     placeholder="06 72 30 65 79"
//                     className="flex-1  border border-white/30 rounded-lg px-4 py-3 text-white placeholder-gray-300/80 focus:outline-none focus:ring-2 focus:ring-[#007bf4] focus:border-transparent"
//                     {...register("phone", { required: true })}
//                   />
//                 </div>

//                 {status === "Form submitted successfully!" && (
//                   <div className={`p-3 rounded-sm text-sm ${
//                     status.includes("Error") 
//                       ? "bg-red-500/10 text-red-400 border border-red-500/20" 
//                       : "bg-green-500/10 text-green-400 border border-green-500/20"
//                   }`}>
//                     {status}
//                   </div>
//                 )}
//               </div>
//             </div>

//             {/* Image section */}
//             <div className="hidden md:block">
//               <img
//                 src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop"
//                 alt="Team collaboration"
//                 className="rounded-xl w-full h-52 object-cover"
//               />
//             </div>
//           </div>

//           {/* Footer section */}
//           <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
//             {/* <div className="flex items-start gap-3">
//               <div className="bg-[#007bf4]/10 p-3 rounded-lg">
//                 <Shield className="w-6 h-6 text-[#007bf4]" />
//               </div>
//               <div>
//                 <h3 className="font-semibold text-white mb-1">Vos données sont en sécurité</h3>
//                 <p className="text-sm text-gray-400">
//                   They will only be transmitted to the French administration to register your company.
//                 </p>
//               </div>
//             </div> */}

//             <div className="flex justify-end w-full">
//                 <button
//               onClick={handleContinue}
//               disabled={isSubmitting}
//               className="bg-[#007bf4] w-full md:w-56 hover:bg-[#0066cc] disabled:bg-[#007bf4]/50 text-white font-semibold px-8 py-3 rounded cursor-pointer flex items-center justify-center gap-2 transition-colors disabled:cursor-not-allowed"
//             >
//               {isSubmitting ? <Loader/> : <>Continuer
//               <ArrowRight className="w-5 h-5" /></>}
//             </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//     </div>
//   );
// }


"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { X } from "lucide-react";
import Loader from "./Loader";
import { useRouter } from "next/navigation";

export default function Customer_info({setShowPopup}) {
  const { register, handleSubmit } = useForm();
  const [status, setStatus] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    setStatus("Submitting...");
    
    try {
      const payload = {
        name: data.firstName + " " + data.lastName,
        email: data.email,
        phone: data.phone,
        company: "",
        message: data.description,
      };

      const res = await fetch("/api/submit-bigin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const result = await res.json();

      if (result.success) {
        setIsSubmitting(false);
        setStatus("Form submitted successfully!");
        
        localStorage.setItem("customerInfoSubmitted", "true");
        localStorage.setItem("customerInfo", JSON.stringify({
          firstName: data.firstName,
          lastName: data.lastName,
          email: data.email,
          phone: data.phone,
          submittedAt: new Date().toISOString()
        }));

        setTimeout(() => {
          router.push("/thank-you");
        }, 1500);
      } else {
        setStatus("Error: " + (result.error || "Unknown error"));
        setIsSubmitting(false);
      }
    } catch (err) {
      setStatus("Error submitting form. Please try again.");
      setIsSubmitting(false);
      console.log(err);
    }
  };

  const handleContinue = () => {
    handleSubmit(onSubmit)();
  };

  return (
    <div className="fixed inset-0 top-0 left-0 z-[100] px-4">
      <div onClick={() => setShowPopup(false)} className="absolute inset-0 bg-black/50 backdrop-blur-sm"/>
      <div className="grid place-items-center h-full">
        <div data-aos="fade-up" data-aos-duration="300" className="max-w-2xl w-full mx-auto z-10 relative bg-primary rounded-2xl">
          
          <button onClick={() => setShowPopup(false)} className="absolute top-3 right-3 cursor-pointer z-20">
            <X className="text-white hover:text-gray-300 w-8 h-8"/>
          </button>

          <div className="w-full px-6 py-8 md:px-8 md:py-16  flex flex-col gap-4">
            <p className="text-[20px] font-bold leading-[140%] text-white">
              C&apos;est parti ! Qui effectue la démarche ?
            </p>

            {/* Form */}
            <div className="flex gap-4 flex-wrap">
              <div className="grid grid-cols-2 gap-4 w-full">
                <input
                  type="text"
                  placeholder="Prénom"
                  className="w-full bg-white rounded-xl px-4 py-[14px] text-black text-sm"
                  {...register("firstName", { required: true })}
                />
                <input
                  type="text"
                  placeholder="Nom"
                  className="w-full bg-white rounded-xl px-4 py-[14px] text-black text-sm"
                  {...register("lastName", { required: true })}
                />
              </div>

              <input
                type="email"
                placeholder="Email"
                className="w-full bg-white rounded-xl px-4 py-[14px] text-black text-sm"
                {...register("email", { required: true })}
              />

              <input
                type="tel"
                placeholder="Téléphone"
                className="w-full bg-white rounded-xl px-4 py-[14px] text-black text-sm"
                {...register("phone", { required: true })}
              />

                    <textarea
        className="w-full bg-white rounded-xl px-4 py-4 text-black text-sm"
        placeholder="Message"
        {...register("description")}
      />

              <div className="flex justify-between items-center w-full">
                <button
                  onClick={handleContinue}
                  disabled={isSubmitting}
                  className="border border-white rounded-[55px] px-8 py-4 text-sm font-bold leading-[120%] cursor-pointer text-white hover:bg-white hover:text-[#0081cf] transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Envoi en cours..." : "Envoyer"}
                </button>
              </div>
            </div>

            {status && (
              <p className="text-sm text-white mt-2">
                {status === "Submitting..." ? "" : status}
              </p>
            )}

            <p className="text-sm font-bold leading-[120%] text-white">
              * Champs obligatoires
            </p>
            
            <p className="text-sm font-normal leading-[120%] text-white/90">
              Les informations recueillies font l'objet d’un traitement informatique destiné à SOVITAL, responsable du traitement, aux fins de proposition de produits et/ou services et de prospection commerciale. Conformément à la réglementation en vigueur, vous disposez notamment d'un droit d'opposition, d'accès, de rectification et d'effacement sur les données personnelles qui vous concernent. Pour plus d'informations, cliquez ici.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}