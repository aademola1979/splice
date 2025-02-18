const faqs = [
    { 
        question: "What is Splice?", 
        response: "Splice is a platform that allows users to find and share accommodation spaces, splitting the cost of rent among co-renters." 
    },
    
    { 
        question: "How do I sign up?", 
        response: "You can sign up by clicking the 'Join Free' button on the homepage and filling out the registration form." 
    },
    
    { 
        question: "Is Splice free to use?", 
        response: "Yes, Splice is free to use for finding and sharing accommodation spaces. However, posting accommodation spaces can be promoted to reach more users more quickly." 
    },
    { 
        question: "How do I find a co-renter?", 
        response: "You can find a co-renter by browsing available accommodation spaces. If you already have an accommodation space but only looking for co-renter(s), you can make a post and then select from interested co-renters." 
    },

    {
         question: "Can I specify my preferences for a co-renter?", 
         response: "Yes, you can specify your preferences for a co-renter, such as gender, age range, and lifestyle habits." 
    },
    { 
        question: "How do I post a vacant accommodation space?", 
        response: "To post a vacant accommodation space, log in to your account and click on 'Post an accommodation space' in the dashboard." 
    },

    { 
        question: "How do I contact a potential co-renter?", 
        response: "You can contact a potential co-renter by sending them a message through the CoRent platform." 
    },
    { 
        question: "Is my personal information safe on CoRent?", 
        response: "Yes, we take your privacy seriously and use encryption to protect your personal information." 
    },
    
    { 
        question: "How do I verify my identity?",
        response: "You can verify your identity by uploading a government-issued ID and completing the verification process in your account settings." 
    },


    { 
        question: "Can I leave a review for a co-renter?", 
        response: "Yes, you can leave a review for a co-renter after your stay to help other users make informed decisions." 
    },

    { 
        question: "How do I update my profile information?", 
        response: "You can update your profile information by logging in to your account and navigating to the 'Profile' section." 
    },

    { 
        question: "What payment methods are accepted?", 
        response: "We accept various payment methods, including credit card, debit card, bank transfer, and PayPal." 
    },


    { 
        question: "Can I search for an accommodation space based on location?", 
        response: "Yes, you can search for an accommodation space based on your preferred locations or neighborhoods." 
    },

    { 
        question: "What amenities are available?", 
        response: "The available amenities vary by listing. You can filter your search based on the amenities you require, such as Wi-Fi, parking, and laundry facilities." 
    },

    { 
        question: "How do I extend my stay?", 
        response: "To extend your stay, contact your landlord or the person you are renting from to discuss the extension and update your agreement on koRent." 
    },

    { 
        question: "What should I do if I need to cancel my stay?", 
        response: "If you need to cancel your stay, please contact your landlord or the person you are renting from as soon as possible to discuss the cancellation terms." 
    },

    { 
        question: "How can I get support if I have more questions?", 
        response: "If you have more questions, you can contact our support team through the 'Help' section on the koRent platform." 
    },

    { 
        question: "How do I reset my password?", 
        response: "You can reset your password by clicking on the 'Forgot Password' link on the login page and following the instructions."
    },

    { 
        question: "Can I list multiple properties?", 
        response: "Yes, you can list multiple properties by adding each property separately in your account dashboard." 
    },

    { 
        question: "How do I delete my account?", 
        response: "To delete your account, please contact our support team through the 'Help' section, and we will assist you with the process." 
    },

    { 
        question: "What should I do if I suspect a scam?", 
        response: "If you suspect a scam, please report it to our support team immediately, and we will investigate the issue." 
    },

    { 
        question: "Can I negotiate the rent with my co-renter?", 
        response: "Yes, you can negotiate the rent with your co-renter. We recommend discussing and agreeing on the terms before finalizing the arrangement." 
    },

    { 
        question: "How do I leave a review for a property?", 
        response: "You can leave a review for a property by navigating to the property listing and clicking on the 'Leave a Review' button." 
    },

    { 
        question: "What is the cancellation policy?", 
        response: "The cancellation policy varies by listing. Please refer to the specific listing's details for the cancellation terms." 
    },

    { 
        question: "Can I filter listings by price range?", 
        response: "Yes, you can filter listings by price range using the search filters on the koRent platform." 
    },

    { 
        question: "How do I contact customer support?", 
        response: "You can contact customer support through the 'Help' section on the koRent platform or by emailing support@korent.com." 
    },

    { 
        question: "Can I share my listing on social media?", 
        response: "Yes, you can share your listing on social media by using the share buttons available on the listing page." 
    },

    { 
        question: "How do I update my payment information?", 
        response: "You can update your payment information by logging in to your account and navigating to the 'Payment Settings' section." 
    },

    { 
        question: "What should I do if I forget my username?", 
        response: "If you forget your username, you can retrieve it by clicking on the 'Forgot Username' link on the login page and following the instructions." 
    },


    { 
        question: "How do I report a maintenance issue?", 
        response: "You can report a maintenance issue by contacting your landlord or property manager through the koRent platform." 
    },

    { 
        question: "What is the minimum rental period?", 
        response: "The minimum rental period varies by listing. Please refer to the specific listing's details for the rental terms." 
    },

    { 
        question: "Can I request a background check on potential roommates?", 
        response: "Yes, you can request a background check on potential roommates through the koRent platform." 
    },

    { 
        question: "How do I upload verification documents?", 
        response: "You can upload verification documents by logging in to your account and navigating to the 'Verification' section." 
    },

    { 
        question: "Can I search for properties with specific amenities?", 
        response: "Yes, you can search for properties with specific amenities using the search filters on the koRent platform." 
    },
    { 
        question: "How do I update my listing?", 
        response: "You can update your listing by logging in to your account and navigating to the 'My Listings' section." 
    }
  ];
  
  export default faqs;

  export const categorisedFaqs = [
    {
        users:[
           
            { 
                question: "How do I find a co-renter?", 
                response: "You can find a co-renter by browsing available listings or posting your own listing on koRent." 
            },
        
            { 
                question: "How do I post a listing?", 
                response: "To post a listing, log in to your account and click on 'Post a Listing' in the dashboard." 
            },
            { 
                question: "How do I contact a potential co-renters?", 
                response: "You can contact a potential co-renter by sending them a message through the koRent platform." 
            },
            { 
                question: "How do I verify my identity?",
                response: "You can verify your identity by uploading a government-issued ID and completing the verification process in your account settings." 
            },
            { 
                question: "How do I update my profile information?", 
                response: "You can update your profile information by logging in to your account and navigating to the 'Profile' section." 
            },
            { 
                question: "How do I extend my stay?", 
                response: "To extend your stay, contact your landlord or the person you are renting from to discuss the extension and update your agreement on koRent." 
            },
            { 
                question: "How can I get support if I have more questions?", 
                response: "If you have more questions, you can contact our support team through the 'Help' section on the koRent platform." 
            },
        
            { 
                question: "How do I reset my password?", 
                response: "You can reset your password by clicking on the 'Forgot Password' link on the login page and following the instructions."
            },
            { 
                question: "How do I delete my account?", 
                response: "To delete your account, please contact our support team through the 'Help' section, and we will assist you with the process." 
            },
            { 
                question: "How do I leave a review for a property?", 
                response: "You can leave a review for a property by navigating to the property listing and clicking on the 'Leave a Review' button." 
            },
            { 
                question: "How do I contact customer support?", 
                response: "You can contact customer support through the 'Help' section on the koRent platform or by emailing support@korent.com." 
            },
            { 
                question: "How do I update my payment information?", 
                response: "You can update your payment information by logging in to your account and navigating to the 'Payment Settings' section." 
            },
            { 
                question: "How do I report a maintenance issue?", 
                response: "You can report a maintenance issue by contacting your landlord or property manager through the koRent platform." 
            },
            { 
                question: "How do I upload verification documents?", 
                response: "You can upload verification documents by logging in to your account and navigating to the 'Verification' section." 
            },
            { 
                question: "How do I update my listing?", 
                response: "You can update your listing by logging in to your account and navigating to the 'My Listings' section." 
            },

            {
                question: "Can I specify my preferences for a co-renter?", 
                response: "Yes, you can specify your preferences for a co-renter, such as gender, age range, and lifestyle habits, when posting a listing." 
           },
           { 
                question: "Can I leave a review for a co-renter?", 
                response: "Yes, you can leave a review for a co-renter after your stay to help other users make informed decisions." 
            },
            { 
                question: "Can I search for accommodation based on location?", 
                response: "Yes, you can search for accommodation based on your preferred locations or neighborhoods." 
            },
            { 
                question: "Can I list multiple properties?", 
                response: "Yes, you can list multiple properties by adding each property separately in your account dashboard." 
            },
            { 
                question: "Can I negotiate the rent with my roommates?", 
                response: "Yes, you can negotiate the rent with your roommates. We recommend discussing and agreeing on the terms before finalizing the arrangement." 
            },
            { 
                question: "Can I filter listings by price range?", 
                response: "Yes, you can filter listings by price range using the search filters on the koRent platform." 
            },
            { 
                question: "Can I share my listing on social media?", 
                response: "Yes, you can share your listing on social media by using the share buttons available on the listing page." 
            },
            { 
                question: "Can I request a background check on potential roommates?", 
                response: "Yes, you can request a background check on potential roommates through the koRent platform." 
            },
            { 
                question: "Can I search for properties with specific amenities?", 
                response: "Yes, you can search for properties with specific amenities using the search filters on the koRent platform." 
            },
            { 
                question: "What should I do if I forget my username?", 
                response: "If you forget your username, you can retrieve it by clicking on the 'Forgot Username' link on the login page and following the instructions." 
            },
            
        ],

        applicants:[
            { 
                question: "What payment methods are accepted?", 
                response: "We accept various payment methods, including credit card, debit card, bank transfer, and PayPal." 
            },
            { 
                question: "What amenities are available?", 
                response: "The available amenities vary by listing. You can filter your search based on the amenities you require, such as number of bedrooms, bathrooms, toilets, kitchens, parking, and laundry facilities." 
            },
            { 
                question: "What should I do if I need to cancel my stay?", 
                response: "If you need to cancel your stay, please contact your landlord or the person you are renting from as soon as possible to discuss the cancellation terms." 
            },
            { 
                question: "What should I do if I suspect a scam?", 
                response: "If you suspect a scam, please report it to our support team immediately, and we will investigate the issue." 
            },
            { 
                question: "What is the cancellation policy?", 
                response: "The cancellation policy varies by listing. Please refer to the specific listing's details for the cancellation terms." 
            },
           
            { 
                question: "What is the minimum rental period?", 
                response: "The minimum rental period varies by listing. Please refer to the specific listing's details for the rental terms." 
            },
        

        ],

      

    }
  ]