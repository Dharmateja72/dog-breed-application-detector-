export interface BreedOrigin {
    country: string;
    breeds: string[];
    description: string;
}

export const breedOrigins: Record<string, BreedOrigin> = {
    "United Kingdom": {
        country: "United Kingdom",
        breeds: ["Golden Retriever", "Bulldog", "Beagle", "Yorkshire Terrier", "Border Collie"],
        description: "Known for sporting and terrier breeds."
    },
    "Germany": {
        country: "Germany",
        breeds: ["German Shepherd", "Rottweiler", "Dachshund", "Boxer", "Great Dane"],
        description: "Famous for working and herding dogs."
    },
    "United States of America": {
        country: "United States of America",
        breeds: ["Australian Shepherd", "Boston Terrier", "Alaskan Malamute", "Chesapeake Bay Retriever"],
        description: "Home to versatile working and companion breeds."
    },
    "China": {
        country: "China",
        breeds: ["Pug", "Shih Tzu", "Chow Chow", "Shar Pei", "Pekingese"],
        description: "Origin of many ancient companion and guard breeds."
    },
    "France": {
        country: "France",
        breeds: ["Poodle", "French Bulldog", "Basset Hound", "Papillon"],
        description: "Known for fashionable companions and scent hounds."
    },
    "Russia": {
        country: "Russia",
        breeds: ["Siberian Husky", "Samoyed", "Borzoi", "Black Russian Terrier"],
        description: "Breeds adapted to cold climates and working roles."
    },
    "Japan": {
        country: "Japan",
        breeds: ["Shiba Inu", "Akita", "Japanese Chin"],
        description: "Ancient spitz breeds known for loyalty and dignity."
    },
    "Australia": {
        country: "Australia",
        breeds: ["Australian Cattle Dog", "Kelpie", "Silky Terrier"],
        description: "Hardworking herding breeds adapted to rugged terrain."
    },
    "Canada": {
        country: "Canada",
        breeds: ["Labrador Retriever", "Newfoundland"],
        description: "Water dogs and working retrievers."
    },
    "Mexico": {
        country: "Mexico",
        breeds: ["Chihuahua", "Xoloitzcuintli"],
        description: "Ancient breeds with deep cultural roots."
    },
    // Add more as needed
};
