import { CheckCircle, Calendar, ArrowRight } from 'lucide-react';


export default function ThankYouPage() {
  return (
    <div className="min-h-screen  flex justify-center px-6 py-10">
      {/* Decorative background blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-96 h-96 bg-blue-200/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-200/30 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-3xl w-full relative z-10">


        {/* Main Content */}
        <div className="px-8 md:px-12">
          {/* Thank You Message */}


                  {/* Success Icon */}
        <div className="flex justify-center mb-8">
          <div className="relative">
            <div className="absolute inset-0 bg-green-400/20 rounded-full"></div>
            <div className="relative bg-white rounded-full p-2">
              <CheckCircle className="w-20 h-20 text-green-500" strokeWidth={2} />
            </div>
          </div>
        </div>


          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-light text-gray-900 mb-4">
              Merci pour votre demande
            </h1>
            <p className="text-xl font-light text-gray-600">
              Nous avons bien reçu vos informations.
            </p>
          </div>

          {/* Divider */}
          <div className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent mb-8"></div>

          {/* Next Steps Section */}
          <div className="mb-10 font-light">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-primary rounded-full p-2">
                <Calendar className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl text-gray-900">
                Prochaine étape
              </h2>
            </div>

            <div className="mb-6">
              <p className="text-lg text-gray-700 font-normal leading-relaxed mb-6">
                Pour avancer concrètement sur votre projet, prenez maintenant un rendez-vous avec l'un de nos chefs de projet. Il vous guidera, définira vos besoins et vous proposera un plan d'action clair.
              </p>
              
              <div className="flex items-center gap-2 text-gray-600">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <p className="text-sm font-medium">
                  Cela ne prend que 2 minutes.
                </p>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <div className="flex justify-center">
            <button className="group bg-primary hover:bg-[#0066a6] text-white px-6 md:px-10 py-3 md:py-5 rounded-full md:text-lg transition-all duration-300 cursor-pointer flex items-center gap-3">
              Réserver mon rendez-vous
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* Bottom decoration */}
        <div className="flex justify-center gap-2 mt-8">
          <div className="w-2 h-2 bg-[#0081cf] rounded-full animate-bounce"></div>
          <div className="w-2 h-2 bg-[#0081cf] rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
          <div className="w-2 h-2 bg-[#0081cf] rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
        </div>
      </div>
    </div>
  );
}