const db = require("./connection");
const {
    NormalUser,
    ServiceUser,
    ServiceCategory,
    ServiceComment,
    ServiceType,
} = require("../models");
const moment = require("moment");
const currentDate = moment(Date.now()).format("ll");

db.once("open", async () => {
    // DELETE SERVICECATEGORY DATA
    await ServiceCategory.deleteMany();

    // INSERTMANY SERVICECATEGORY DATA
    const serviceCategorySeed = await ServiceCategory.insertMany([
        {
            categoryName: "Haircut",
            categoryIcon: ".././assets/icons/haircut_icon.svg",
        },
        {
            categoryName: "Massage",
            categoryIcon: ".././assets/icons/massage_icon.svg",
        },
        {
            categoryName: "Eyelashes",
            categoryIcon: ".././assets/icons/eyelashes_icon.svg",
        },
        {
            categoryName: "Nailcare",
            categoryIcon: ".././assets/icons/nailcare_icon.svg",
        },
        { categoryName: "Dance", categoryIcon: ".././assets/icons/dance_icon.svg" },
        {
            categoryName: "Fitness",
            categoryIcon: ".././assets/icons/personaltraining_icon.svg",
        },
        {
            categoryName: "Pet Care",
            categoryIcon: ".././assets/icons/petcare_icon.svg",
        },
        {
            categoryName: "Tutoring",
            categoryIcon: ".././assets/icons/tutoring_icon.svg",
        },
        { categoryName: "Media", categoryIcon: ".././assets/icons/media_icon.svg" },
        {
            categoryName: "Singing",
            categoryIcon: ".././assets/icons/singing_icon.svg",
        },
    ]);

    // LOG TO BACKEND CONSOLE
    console.log("SUCCESSFULLY SEEDED SERVICE CATEGORIES");

    // DELETE EXISTING SERVICETYPE DATA
    await ServiceType.deleteMany();


    // CREATE SERVETYPE DATA
    const serviceTypeSeed = await ServiceType.insertMany([
        // Haircuts [0-6]
        {
            serviceName: "Haircut",
            servicePrice: 40,
            serviceDuration: 45,
            serviceDescription: "Fades, Tapers, etc + lineup (if requested)",
            serviceCategory: serviceCategorySeed[0]._id,
        },
        {
            serviceName: "Fade and Shave",
            servicePrice: 25,
            serviceDuration: 60,
            serviceDescription: "Fade cut and Beard Clean/Shape Up",
            serviceCategory: serviceCategorySeed[0]._id,
        },
        {
            serviceName: "Barber Facial",
            servicePrice: 35,
            serviceDuration: 30,
            serviceDescription: "Hot towel, face mask /exfoliating treatment, lotion and oils fin, ished with face massage",
            serviceCategory: serviceCategorySeed[0]._id,
        },
        {
            serviceName: "Haircut, Beard Trim, and Eyebrows",
            servicePrice: 60,
            serviceDuration: 60,
            serviceDescription: "Full haircut experience with beard trim and eyebrow shaping",
            serviceCategory: serviceCategorySeed[0]._id,
        },
        {
            serviceName: "Kids Haircut",
            servicePrice: 30,
            serviceDuration: 30,
            serviceDescription: "Kids under 12 years old, no straight razor used",
            serviceCategory: serviceCategorySeed[0]._id,
        },

        // Massage [5-9]
        {
            serviceName: "Swedish Massage",
            servicePrice: 80,
            serviceDuration: 60,
            serviceDescription: "Swedish massage is a gentle type of full-body massage thats ideal for people who are new to massage and want to relax without deeper work",
            serviceCategory: serviceCategorySeed[1]._id
        },
        {
            serviceName: "Deep Tissue Massage",
            servicePrice: 80,
            serviceDuration: 60,
            serviceDescription: "Finger pressure and the stroking of deep layers to massage tissue areas, ideal for people with tight/knotted muscles",
            serviceCategory: serviceCategorySeed[1]._id
        },
        {
            serviceName: "Lymphatic Massage",
            servicePrice: 80,
            serviceDuration: 60,
            serviceDescription: "Slow and circular motions and pressure to move lymph fluid throughout the lymphatic system",
            serviceCategory: serviceCategorySeed[1]._id
        },
        {
            serviceName: "Sports Massage",
            servicePrice: 80,
            serviceDuration: 60,
            serviceDescription: "Sports massage is designed to prepare the athlete for their best performance, reduce fatigue, and relieve muscle swelling and tension.",
            serviceCategory: serviceCategorySeed[1]._id
        },
        {
            serviceName: "Tuning Stimulation & Sinuses Accupressure",
            servicePrice: 40,
            serviceDuration: 30,
            serviceDescription: "Tuning fork instrument to stimulate the olfactory nerve and the sinus receptors through your sinus points. Then accupressure to relieve sinus pressure",
            serviceCategory: serviceCategorySeed[1]._id
        },

        // Eyelashes [10-14]
        {
            serviceName: "Eyelash Extensions1",
            servicePrice: 50,
            serviceDuration: 40,
            serviceDescription: "Uses high quality synthetic eyelash, ABG approved",
            serviceCategory: serviceCategorySeed[2]._id,
        },
        {
            serviceName: "Eyelash Extensions2",
            servicePrice: 50,
            serviceDuration: 40,
            serviceDescription: "Uses high quality synthetic eyelash, ABG approved",
            serviceCategory: serviceCategorySeed[2]._id,
        },
        {
            serviceName: "Eyelash Extensions3",
            servicePrice: 50,
            serviceDuration: 40,
            serviceDescription: "Uses high quality synthetic eyelash, ABG approved",
            serviceCategory: serviceCategorySeed[2]._id,
        },
        {
            serviceName: "Eyelash Extensions4",
            servicePrice: 50,
            serviceDuration: 40,
            serviceDescription: "Uses high quality synthetic eyelash, ABG approved",
            serviceCategory: serviceCategorySeed[2]._id,
        },
        {
            serviceName: "Eyelash Extensions",
            servicePrice: 50,
            serviceDuration: 40,
            serviceDescription: "Uses high quality synthetic eyelash, ABG approved",
            serviceCategory: serviceCategorySeed[2]._id,
        },

        // Nailcare [15-21]
        {
            serviceName: "Acrylic Full Set",
            servicePrice: 70,
            serviceDuration: 120,
            serviceDescription: "Full set of acrylics any shape. Set includes gel polish, cuticle clean, and proper nail care",
            serviceCategory: serviceCategorySeed[3]._id,
        },
        {
            serviceName: "Encapsulated Acrylic Full Set",
            servicePrice: 100,
            serviceDuration: 120,
            serviceDescription: "Encapsulated glitter, natural flowers, colored acrylic powder and others. Set includes gel top coat, cuticle clean, and proper nail care",
            serviceCategory: serviceCategorySeed[3]._id,
        },
        {
            serviceName: "Sculpted Acrylic Full Set",
            servicePrice: 90,
            serviceDuration: 120,
            serviceDescription: "Full set of acrylics done with free forms, this set includes pinching of the nails. Set also includes gel polish, cuticle clean, and proper nail care",
            serviceCategory: serviceCategorySeed[3]._id,
        },
        {
            serviceName: "Hard Gel Full Set",
            servicePrice: 90,
            serviceDuration: 120,
            serviceDescription: "Full Set of hard gel done with tips. Set includes gel polish, cuticle clean, and proper nail care",
            serviceCategory: serviceCategorySeed[3]._id,
        },
        {
            serviceName: "Hard Gel Sculpted Set",
            servicePrice: 100,
            serviceDuration: 120,
            serviceDescription: "Sculpted full set of hard gel, made with free forms/nail forms. Set includes gel polish, cuticle clean, and proper nail care",
            serviceCategory: serviceCategorySeed[3]._id,
        },
        {
            serviceName: "Gel Manicure",
            servicePrice: 50,
            serviceDuration: 120,
            serviceDescription: "Gel polish on natural nails. Service includes removal of past gel polish, cuticle clean, nail trim/file and one color gel polish.",
            serviceCategory: serviceCategorySeed[3]._id,
        },
        {
            serviceName: "Gel Pedicure",
            servicePrice: 60,
            serviceDuration: 120,
            serviceDescription: "Gel polish on natural nails. Service includes removal of past gel polish, cuticle clean, nail trim/file and one color gel polish.",
            serviceCategory: serviceCategorySeed[3]._id,
        },

        // Dance [22-29]
        {
            serviceName: "Belly Dance",
            servicePrice: 50,
            serviceDuration: 60,
            serviceDescription: "Belly dance is a beautiful dance that is sensual and fun. It is a great way to get in shape and have fun at the same time.",
            serviceCategory: serviceCategorySeed[4]._id,
        },
        {
            serviceName: "Ballet",
            servicePrice: 50,
            serviceDuration: 60,
            serviceDescription: "This is in the form of a ballet, in which the dance is choreographed with classical music.",
            serviceCategory: serviceCategorySeed[4]._id,
        },
        {
            serviceName: "Ballroom",
            servicePrice: 50,
            serviceDuration: 60,
            serviceDescription: "Ballroom is a popular form of competitive dance, or dancesport, with competitions being held all over the world.",
            serviceCategory: serviceCategorySeed[4]._id,
        },
        {
            serviceName: "Contemporary",
            servicePrice: 50,
            serviceDuration: 60,
            serviceDescription: "Drawing on classical, modern and jazz dance styles, contemporary dance has evolved to incorporate many characteristics of a broader range of dance forms.",
            serviceCategory: serviceCategorySeed[4]._id,
        },
        {
            serviceName: "Hip-Hop",
            servicePrice: 50,
            serviceDuration: 60,
            serviceDescription: "Hip-hop dancing include Breaking, Locking and Popping, with derivative styles emerging out of these including Memphis Jookin, Turfing, Jerkin and Krumping.",
            serviceCategory: serviceCategorySeed[4]._id,
        },
        {
            serviceName: "Jazz",
            servicePrice: 50,
            serviceDuration: 60,
            serviceDescription: "Jazz dancing builds on African American vernacular dance styles that emerged along with Jazz music in the US.",
            serviceCategory: serviceCategorySeed[4]._id,
        },
        {
            serviceName: "Tap Dancing",
            servicePrice: 50,
            serviceDuration: 60,
            serviceDescription: "Tap dancing characterises a range of dances including flamenco, rhythm, classical, broadway and postmodern tap",
            serviceCategory: serviceCategorySeed[4]._id,
        },
        {
            serviceName: "Salsa",
            servicePrice: 50,
            serviceDuration: 60,
            serviceDescription: "Cuban son and Afro-Cuban rumba used diverse musical instruments to create the basis of a rhythm known as the Salsa",
            serviceCategory: serviceCategorySeed[4]._id,
        },

        // FITNESS [30-38]
        {
            serviceName: "Personal Training",
            servicePrice: 100,
            serviceDuration: 60,
            serviceDescription: "Personal training service includes training you to be the best you can be",
            serviceCategory: serviceCategorySeed[5]._id,
        },
        {
            serviceName: "Yoga",
            servicePrice: 50,
            serviceDuration: 60,
            serviceDescription: "Yoga service includes teaching you how to do yoga",
            serviceCategory: serviceCategorySeed[5]._id,
        },
        {
            serviceName: "Pilates",
            servicePrice: 50,
            serviceDuration: 60,
            serviceDescription: "Pilates service includes teaching you how to do pilates",
            serviceCategory: serviceCategorySeed[5]._id,
        },
        {
            serviceName: "Spin Class(Cycling)",
            servicePrice: 50,
            serviceDuration: 60,
            serviceDescription: "Intervals, rolling hills, sprints, climbs, runs, surges and jumps all to music hand-picked to motivate and inspire!",
        },
        {
            serviceName: "Kickboxing",
            servicePrice: 50,
            serviceDuration: 60,
            serviceDescription: "Cardio induced workout that invloves punching and kicking",
            serviceCategory: serviceCategorySeed[5]._id,
        },
        {
            serviceName: "Zumba",
            servicePrice: 50,
            serviceDuration: 60,
            serviceDescription: "Cardio induced workout that invloves dancing",
            serviceCategory: serviceCategorySeed[5]._id,
        },
        {
            serviceName: "Crossfit",
            servicePrice: 50,
            serviceDuration: 60,
            serviceDescription: "Weight lifting and cardio induced workout that invloves a variety of exercises",
            serviceCategory: serviceCategorySeed[5]._id,
        },
        {
            serviceName: "Weightlifting",
            servicePrice: 50,
            serviceDuration: 60,
            serviceDescription: "Weightlifting service includes having a personal trainer teach you how to lift weights",
            serviceCategory: serviceCategorySeed[5]._id,
        },
        {
            serviceName: "Running",
            servicePrice: 50,
            serviceDuration: 60,
            serviceDescription: "Cardio induced workout that invloves having a personal trainer runs with you",
            serviceCategory: serviceCategorySeed[5]._id,
        },

        // Pet Services [39-45]
        {
            // PET GROOMING
            serviceName: "Small Dog Grooming",
            servicePrice: 50,
            serviceDuration: 60,
            serviceDescription: "Small dog grooming service includes bath, nail trim, ear cleaning, and hair cut",
            serviceCategory: serviceCategorySeed[6]._id,
        },
        {
            serviceName: "Medium Dog Grooming",
            servicePrice: 60,
            serviceDuration: 60,
            serviceDescription: "Medium dog grooming service includes bath, nail trim, ear cleaning, and hair cut",
            serviceCategory: serviceCategorySeed[6]._id,
        },
        {
            serviceName: "Large Dog Grooming",
            servicePrice: 70,
            serviceDuration: 60,
            serviceDescription: "Large dog grooming service includes bath, nail trim, ear cleaning, and hair cut",
            serviceCategory: serviceCategorySeed[6]._id,
        },
        {
            serviceName: "Cat Grooming",
            servicePrice: 40,
            serviceDuration: 60,
            serviceDescription: "Cat grooming service includes bath, nail trim, ear cleaning, and hair cut",
            serviceCategory: serviceCategorySeed[6]._id,
        },
        {
            // PET SITTING
            serviceName: "Pet Sitting(1hr)",
            servicePrice: 40,
            serviceDuration: 60,
            serviceDescription: "Pet sitting service includes feeding, walking, and playing with your pet for 1 hour",
            serviceCategory: serviceCategorySeed[6]._id,
        },
        {
            serviceName: "Pet Sitting(OVER NIGHT)",
            servicePrice: 100,
            serviceDuration: 720,
            serviceDescription: "Pet sitting service includes feeding, walking, and playing with your pet overnight",
        },
        {
            // PET WALKING
            serviceName: "Pet Walking",
            servicePrice: 30,
            serviceDuration: 30,
            serviceDescription: "Pet walking service includes giving your pet the bestest walk of their life",
            serviceCategory: serviceCategorySeed[6]._id,
        },

        // Tutoring [46-51]
        {
            serviceName: "Math Tutoring",
            servicePrice: 50,
            serviceDuration: 60,
            serviceDescription: "Math tutoring service includes help with math homework, and math problems",
            serviceCategory: serviceCategorySeed[7]._id,
        },
        {
            serviceName: "English Tutoring",
            servicePrice: 50,
            serviceDuration: 60,
            serviceDescription: "English tutoring service includes help with english homework, and english problems",
            serviceCategory: serviceCategorySeed[7]._id,
        },
        {
            serviceName: "Science Tutoring",
            servicePrice: 50,
            serviceDuration: 60,
            serviceDescription: "Science tutoring service includes help with science homework, and science problems",
            serviceCategory: serviceCategorySeed[7]._id,
        },
        {
            serviceName: "History Tutoring",
            servicePrice: 50,
            serviceDuration: 60,
            serviceDescription: "History tutoring service includes help with history homework, and history problems",
            serviceCategory: serviceCategorySeed[7]._id,
        },
        {
            serviceName: "Foreign Language Tutoring",
            servicePrice: 50,
            serviceDuration: 60,
            serviceDescription: "Foreign language tutoring service includes help with foreign language homework, and foreign language problems",
            serviceCategory: serviceCategorySeed[7]._id,
        },
        {
            serviceName: "Computer Science Tutoring",
            servicePrice: 50,
            serviceDuration: 60,
            serviceDescription: "Computer science tutoring service includes help with computer science homework, and computer science problems",
            serviceCategory: serviceCategorySeed[7]._id,
        },

        // MEDIA [52-57]
        {
            serviceName: "Photography",
            servicePrice: 50,
            serviceDuration: 60,
            serviceDescription: "Photography service includes taking pictures of you and your loved ones",
            serviceCategory: serviceCategorySeed[8]._id,
        },
        {
            serviceName: "Videography",
            servicePrice: 100,
            serviceDuration: 120,
            serviceDescription: "Videography service includes taking videos of you and your loved ones",
            serviceCategory: serviceCategorySeed[8]._id,
        },
        {
            serviceName: "Graphic Design",
            servicePrice: 60,
            serviceDuration: 60,
            serviceDescription: "Graphic design service includes designing logos, flyers, and other graphics",
            serviceCategory: serviceCategorySeed[8]._id,
        },
        {
            serviceName: "Web Design",
            servicePrice: 120,
            serviceDuration: 60,
            serviceDescription: "Web design service includes designing websites",
            serviceCategory: serviceCategorySeed[8]._id,
        },
        {
            serviceName: "Music Production",
            servicePrice: 100,
            serviceDuration: 60,
            serviceDescription: "Music production service includes producing music",
            serviceCategory: serviceCategorySeed[8]._id,
        },
        {
            serviceName: "Video Editing",
            servicePrice: 50,
            serviceDuration: 60,
            serviceDescription: "Video editing service includes editing videos",
            serviceCategory: serviceCategorySeed[8]._id,
        },

        // SINGING [58-64]
        {
            serviceName: "Opera Singing",
            servicePrice: 100,
            serviceDuration: 60,
            serviceDescription: "Opera singing service includes singing opera",
            serviceCategory: serviceCategorySeed[9]._id,
        },
        {
            serviceName: "Classical Singing",
            servicePrice: 100,
            serviceDuration: 60,
            serviceDescription: "Classical singing service includes singing classical music",
            serviceCategory: serviceCategorySeed[9]._id,
        },
        {
            serviceName: "Pop Singing",
            servicePrice: 100,
            serviceDuration: 60,
            serviceDescription: "Pop singing service includes singing pop music",
            serviceCategory: serviceCategorySeed[9]._id,
        },
        {
            serviceName: "R&B Singing",
            servicePrice: 100,
            serviceDuration: 60,
            serviceDescription: "R&B singing service includes singing R&B music",
            serviceCategory: serviceCategorySeed[9]._id,
        },
        {
            serviceName: "Jazz Singing",
            servicePrice: 100,
            serviceDuration: 60,
            serviceDescription: "Jazz singing service includes singing jazz music",
            serviceCategory: serviceCategorySeed[9]._id,
        },
        {
            serviceName: "Country Singing",
            servicePrice: 100,
            serviceDuration: 60,
            serviceDescription: "Country singing service includes singing country music",
            serviceCategory: serviceCategorySeed[9]._id,
        },
        {
            serviceName: "Rock Singing",
            servicePrice: 100,
            serviceDuration: 60,
            serviceDescription: "Rock singing service includes singing rock music",
            serviceCategory: serviceCategorySeed[9]._id,
        },

    ])

    // LOG TO BACKEND CONSOLE
    console.log("SUCCESSFULLY SEEDED SERVICE TYPES");

    // DELETE NORMALUSER DATA
    await NormalUser.deleteMany();

    // CREATE NORMALUSER DATA
    const normalUserSeedOne = await NormalUser.create({
        firstName: "test",
        lastName: "testLast",
        email: "test@gmail.com",
        password: "test1234",
        photo:
            "https://www.pngitem.com/pimgs/m/146-1468479_my-profile-icon-blank-profile-picture-circle-hd.png",
        location: "Test Location, CA",
    });

    // CREATE NORMALUSER DATA
    const normalUserSeedTwo = await NormalUser.create({
        firstName: "normalUserFirst",
        lastName: "normalUserLast",
        email: "normalUserEmail@gmail.com",
        password: "normalUserPassword",
        photo:
            "https://www.pngitem.com/pimgs/m/146-1468479_my-profile-icon-blank-profile-picture-circle-hd.png",
        location: "normalUserLocation",
    });
    // LOG TO BACKEND CONSOLE
    console.log("SUCCESSFULLY SEEDED NORMAL USERS");

    // DELETE SERVICEUSER DATA
    await ServiceUser.deleteMany();

    // CREATE SERVICEUSER DATA
    const serviceUserSeedOne = await ServiceUser.create({
        firstName: "Brian",
        lastName: "Alegre",
        email: "brian@gmail.com",
        password: "test1234",
        serviceCategory: serviceCategorySeed[0]._id,
        photo:
            "https://www.pngitem.com/pimgs/m/146-1468479_my-profile-icon-blank-profile-picture-circle-hd.png",
        bio: "First testing bio",
        location: "Garden Grove, CA",
        serviceType: [serviceTypeSeed[0]._id, serviceTypeSeed[1]._id]
    });

    // CREATE SERVICEUSER DATA
    const serviceUserSeedTwo = await ServiceUser.create({
        firstName: "Kevin",
        lastName: "Lazaro",
        email: "kevin@gmail.com",
        password: "test1234",
        serviceCategory: serviceCategorySeed[1]._id,
        photo:
            "https://www.pngitem.com/pimgs/m/146-1468479_my-profile-icon-blank-profile-picture-circle-hd.png",
        bio: "Second testing bio",
        location: "Hacienda Heights, CA",
    });

    // CREATE SERVICEUSER DATA
    const serviceUserSeedThree = await ServiceUser.create({
        firstName: "Allec",
        lastName: "Arzadon",
        email: "allec@gmail.com",
        password: "test1234",
        serviceCategory: serviceCategorySeed[2]._id,
        photo:
            "https://www.pngitem.com/pimgs/m/146-1468479_my-profile-icon-blank-profile-picture-circle-hd.png",
        bio: "Third testing bio",
        location: "Anaheim, CA",
        serviceType: [serviceTypeSeed[3]._id]
    });

    // CREATE SERVICEUSER DATA
    const serviceUserSeedFour = await ServiceUser.create({
        firstName: "Philip",
        lastName: "Hwang",
        email: "philip@gmail.com",
        password: "test1234",
        serviceCategory: serviceCategorySeed[3]._id,
        photo:
            "https://www.pngitem.com/pimgs/m/146-1468479_my-profile-icon-blank-profile-picture-circle-hd.png",
        bio: "fourth testing bio",
        location: "Irvine, CA",
        serviceType: [serviceTypeSeed[0]._id]
    });

    // CREATE SERVICEUSER DATA
    const serviceUserSeedFive = await ServiceUser.create({
        firstName: "Chad",
        lastName: "Tao",
        email: "chad@gmail.com",
        password: "test1234",
        serviceCategory: serviceCategorySeed[6]._id,
        photo:
            "https://www.pngitem.com/pimgs/m/146-1468479_my-profile-icon-blank-profile-picture-circle-hd.png",
        bio: "fifth testing bio",
        location: "Los Angeles, CA",
    });

    // CREATE SERVICEUSER DATA
    const serviceUserSeedSix = await ServiceUser.create({
        firstName: "Nick",
        lastName: "Graffis",
        email: "nick@gmail.com",
        password: "test1234",
        serviceCategory: serviceCategorySeed[5]._id,
        photo:
            "https://www.pngitem.com/pimgs/m/146-1468479_my-profile-icon-blank-profile-picture-circle-hd.png",
        bio: "Sixth testing bio",
        location: "San francisco, CA",
    });


    // CREATE SERVICEUSER DATA
    const serviceUserSeedSeven = await ServiceUser.create({
        firstName: "Erik",
        lastName: "Hirsch",
        email: "erik@gmail.com",
        password: "test1234",
        serviceCategory: serviceCategorySeed[6]._id,
        photo:
            "https://www.pngitem.com/pimgs/m/146-1468479_my-profile-icon-blank-profile-picture-circle-hd.png",
        bio: "Seventh testing bio",
        location: "Orange, CA",
    });

    // CREATE SERVICEUSER DATA
    const serviceUserSeedEight = await ServiceUser.create({
        firstName: "Tony",
        lastName: "Vallescas",
        email: "tony@gmail.com",
        password: "test1234",
        serviceCategory: serviceCategorySeed[7]._id,
        photo:
            "https://www.pngitem.com/pimgs/m/146-1468479_my-profile-icon-blank-profile-picture-circle-hd.png",
        bio: "Tony testing bio",
        location: "Los Angeles, CA",
    });


    // CREATE SERVICEUSER DATA
    const serviceUserSeedNine = await ServiceUser.create({
        firstName: "Vy",
        lastName: "Nguyen",
        email: "vy@gmail.com",
        password: "test1234",
        serviceCategory: serviceCategorySeed[8]._id,
        photo:
            "https://www.pngitem.com/pimgs/m/146-1468479_my-profile-icon-blank-profile-picture-circle-hd.png",
        bio: "Vy testing bio",
        location: "Fountain Valley, CA",
    });

    // CREATE SERVICEUSER DATA
    const serviceUserSeedTen = await ServiceUser.create({
        firstName: "Marina",
        lastName: "Huisken",
        email: "marina@gmail.com",
        password: "test1234",
        serviceCategory: serviceCategorySeed[9]._id,
        photo:
            "https://www.pngitem.com/pimgs/m/146-1468479_my-profile-icon-blank-profile-picture-circle-hd.png",
        bio: "Marina testing bio",
        location: "Fountain Valley, CA",
    });


    // CREATE SERVICEUSER DATA
    const serviceUserSeedEleven = await ServiceUser.create({
        firstName: "Ghazaleh",
        lastName: "Javadi",
        email: "ghazaleh@gmail.com",
        password: "test1234",
        serviceCategory: serviceCategorySeed[0]._id,
        photo:
            "https://www.pngitem.com/pimgs/m/146-1468479_my-profile-icon-blank-profile-picture-circle-hd.png",
        bio: "Ghazaleh testing bio",
        location: "Orange, CA",
    });

    // CREATE SERVICEUSER DATA
    const serviceUserSeedTwelve = await ServiceUser.create({
        firstName: "John",
        lastName: "Hull",
        email: "john@gmail.com",
        password: "test1234",
        serviceCategory: serviceCategorySeed[1]._id,
        photo:
            "https://www.pngitem.com/pimgs/m/146-1468479_my-profile-icon-blank-profile-picture-circle-hd.png",
        bio: "John testing bio",
        location: "Orange County, CA",
    });

    // CREATE SERVICEUSER DATA
    const serviceUserSeedThirteen = await ServiceUser.create({
        firstName: "Darryl ",
        lastName: "Le",
        email: "darryl@gmail.com",
        password: "test1234",
        serviceCategory: serviceCategorySeed[2]._id,
        photo:
            "https://www.pngitem.com/pimgs/m/146-1468479_my-profile-icon-blank-profile-picture-circle-hd.png",
        bio: "fifth testing bio",
        location: "Irvine, CA",
    });

    // CREATE SERVICEUSER DATA
    const serviceUserSeedFourteen = await ServiceUser.create({
        firstName: "Connor",
        lastName: "Mictcher",
        email: "conner@gmail.com",
        password: "test1234",
        serviceCategory: serviceCategorySeed[3]._id,
        photo:
            "https://www.pngitem.com/pimgs/m/146-1468479_my-profile-icon-blank-profile-picture-circle-hd.png",
        bio: "Connor testing bio",
        location: "Orange County, CA",
    });

    // CREATE SERVICEUSER DATA
    const serviceUserSeedFifteen = await ServiceUser.create({
        firstName: "Matt",
        lastName: "Dunston",
        email: "matt@gmail.com",
        password: "test1234",
        serviceCategory: serviceCategorySeed[6]._id,
        photo:
            "https://www.pngitem.com/pimgs/m/146-1468479_my-profile-icon-blank-profile-picture-circle-hd.png",
        bio: "Matt testing bio",
        location: "Los Angeles, CA",
    });

    // CREATE SERVICEUSER DATA
    const serviceUserSeedSixteen = await ServiceUser.create({
        firstName: "Ian",
        lastName: "Irwin",
        email: "ian@gmail.com",
        password: "test1234",
        serviceCategory: serviceCategorySeed[5]._id,
        photo:
            "https://www.pngitem.com/pimgs/m/146-1468479_my-profile-icon-blank-profile-picture-circle-hd.png",
        bio: "Ian testing bio",
        location: "Orange, CA",
    });

    // CREATE SERVICEUSER DATA
    const serviceUserSeedSeventeen = await ServiceUser.create({
        firstName: "Wilson",
        lastName: "Soetomo",
        email: "wilson@gmail.com",
        password: "test1234",
        serviceCategory: serviceCategorySeed[6]._id,
        photo:
            "https://www.pngitem.com/pimgs/m/146-1468479_my-profile-icon-blank-profile-picture-circle-hd.png",
        bio: "Wilson testing bio",
        location: "Irvine, CA",
    });

    // CREATE SERVICEUSER DATA
    const serviceUserSeedEighteen = await ServiceUser.create({
        firstName: "Liberato",
        lastName: "Garced",
        email: "liberto@gmail.com",
        password: "test1234",
        serviceCategory: serviceCategorySeed[7]._id,
        photo:
            "https://www.pngitem.com/pimgs/m/146-1468479_my-profile-icon-blank-profile-picture-circle-hd.png",
        bio: "Liberato testing bio",
        location: "Irvine, CA",
    });

    // CREATE SERVICEUSER DATA
    const serviceUserSeedNineteen = await ServiceUser.create({
        firstName: "Luna",
        lastName: "Kiira",
        email: "luna@gmail.com",
        password: "test1234",
        serviceCategory: serviceCategorySeed[8]._id,
        photo:
            "https://www.pngitem.com/pimgs/m/146-1468479_my-profile-icon-blank-profile-picture-circle-hd.png",
        bio: "Luna testing bio",
        location: "Monterey Park, CA",
    });

    // CREATE SERVICEUSER DATA
    const serviceUserSeedTwenty = await ServiceUser.create({
        firstName: "Jasmine",
        lastName: "Tsao",
        email: "jasmine@gmail.com",
        password: "test1234",
        serviceCategory: serviceCategorySeed[9]._id,
        photo:
            "https://www.pngitem.com/pimgs/m/146-1468479_my-profile-icon-blank-profile-picture-circle-hd.png",
        bio: "Jasmine testing bio",
        location: "Los Angeles, CA",
    });

    // LOG TO BACKEND CONSOLE
    console.log("SUCCESSFULLY SEEDED SERVICE USERS");

    // CREATE SERVICE COMMENTS DATA
    await ServiceComment.insertMany([
        {
            commentText: "Nice haircut, lookin fabulous! Thanks Brian!",
            commentCreated: currentDate,
            serviceRating: 5,
            normalUser: normalUserSeedOne._id,
            serviceUser: serviceUserSeedOne._id,
        },
        {
            commentText: "Nails did, lookin fabulous! Thanks Kevin!",
            commentCreated: currentDate,
            serviceRating: 4,
            normalUser: normalUserSeedTwo._id,
            serviceUser: serviceUserSeedTwo._id,
        },
    ]);

    // LOG TO BACKEND CONSOLE
    console.log("SUCCESSFULLY SEEDED SERVICE COMMENTS");


    process.exit();
});
