function FeatureSection() {
    const features = [
      {
        title: "Beautiful Website Templates",
        description: "Choose from dozens of elegant, customizable templates to showcase your love story.",
        icon: "✨"
      },
      {
        title: "Guest Management",
        description: "Easily manage your guest list, RSVPs, and special accommodations all in one place.",
        icon: "👥"
      },
      {
        title: "Wedding Planning Tools",
        description: "Stay organized with checklists, timelines, and budget tracking tools.",
        icon: "📋"
      },
      {
        title: "Photo Sharing",
        description: "Create galleries for engagement photos and collect guest photos after the wedding.",
        icon: "📸"
      },
      {
        title: "Registry Integration",
        description: "Connect to popular wedding registries to make gift-giving simple for your guests.",
        icon: "🎁"
      },
      {
        title: "Mobile Friendly",
        description: "Your wedding website looks perfect on any device, from desktop to smartphone.",
        icon: "📱"
      }
    ];
  
    return (
      <section id="features" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-800 mb-4">Everything You Need for Your Big Day</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our comprehensive wedding planning platform helps you create memories that last a lifetime.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  export default FeatureSection;