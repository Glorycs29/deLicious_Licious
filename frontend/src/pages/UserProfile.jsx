import React, { useEffect, useState } from "react";

const meat_preferences = [
  "beef", "chicken", "pork", "lamb", "turkey", "duck", "veal", "goat", "venison", "bison",
  "rabbit", "quail", "pheasant", "goose", "elk", "boar", "buffalo", "ostrich", "alligator",
  "kangaroo", "squab", "emu", "deer", "moose", "squirrel", "frog legs", "camel", "horse",
  "bear", "antelope", "reindeer", "turtle", "crocodile", "guinea fowl", "pigeon", "partridge",
  "grouse", "dove", "snake", "yak", "llama", "alpaca", "wild boar", "capybara", "iguana",
  "beaver", "muskrat", "nutria", "opossum",
];

const dietary_restrictions = [
  "gluten-free", "dairy-free", "lactose-free", "nut-free", "peanut-free", "soy-free", "egg-free",
  "shellfish-free", "kosher", "halal", "low-carb", "keto", "paleo", "whole30", "fodmap", "sugar-free",
  "low-sodium", "low-fat", "diabetic-friendly", "high-protein", "iron-rich", "omega-3 rich", "mediterranean",
  "dash diet", "organic", "non-gmo", "wheat-free", "yeast-free", "alcohol-free", "caffeine-free", "sulfite-free",
  "nightshade-free", "histamine-free", "low-histamine", "low-oxalate", "low-sulfur", "autoimmune protocol",
  "specific carbohydrate diet", "bland diet", "soft food", "easy to chew", "low-acid", "low-fiber", "high-fiber",
  "low-purine", "low-iodine", "low-tyramine", "gallbladder-friendly", "gastritis-friendly", "gout-friendly",
];

const spices_tolerance = [
  "no spice", "mild", "medium", "medium-hot", "hot", "very hot", "extra hot", "extremely hot", "blazing hot", "nuclear",
];

const cooking_skill_levels = [
  "absolute beginner", "novice", "beginner", "amateur", "intermediate", "advanced beginner", "competent", "proficient",
  "advanced", "expert", "master chef",
];

const cuisine_types = [
  "Italian", "Chinese", "Japanese", "Indian", "French", "Mexican", "Thai", "Spanish", "Greek", "Lebanese",
  "American", "Turkish", "Korean", "Vietnamese", "Brazilian", "Moroccan"
];

const UserProfile = () => {
  const [preferences, setPreferences] = useState({
    meats: [],
    dietaryRestrictions: [],
    spiceTolerance: "",
    cookingSkill: "",
    cuisineTypes: [],
  });

  useEffect(() => {
    const storedPreferences = JSON.parse(localStorage.getItem("userPreferences")) || {};
    setPreferences(prev => ({
      ...prev,
      meats: storedPreferences.meats || [],
      dietaryRestrictions: storedPreferences.dietaryRestrictions || [],
      spiceTolerance: storedPreferences.spiceTolerance || "",
      cookingSkill: storedPreferences.cookingSkill || "",
      cuisineTypes: storedPreferences.cuisineTypes || [],
    }));
  }, []);

  const handleCheckboxChange = (category, value) => {
    setPreferences(prev => {
      const updatedCategory = prev[category].includes(value)
        ? prev[category].filter(item => item !== value)
        : [...prev[category], value];

      return { ...prev, [category]: updatedCategory };
    });
  };

  const handleRadioChange = (category, value) => {
    setPreferences(prev => ({ ...prev, [category]: value }));
  };

  const savePreferences = () => {
    localStorage.setItem("userPreferences", JSON.stringify(preferences));
  };

  return (
    <div className="p-5">
      <div className="flex justify-between gap-2">
        <div>
          <div className="text-xl font-bold">User Profile & Preferences</div>
          <div className="mb-4">
            Save your preferences for personalized recipe suggestions in the future
          </div>
        </div>
        <button onClick={savePreferences} className="btn btn-outline btn-success">Save</button>
      </div>

      <div className="grid md:grid-cols-2 grid-cols-1 m-3 gap-4">
        <div>
          <div className="text-lg text-[#4B4F54] mb-1 font-bold">Favorite meats</div>
          <div className="grid md:grid-cols-4 grid-cols-2 gap-2">
            {meat_preferences.map((meat) => (
              <div className="flex gap-2 items-center" key={meat}>
                <input
                  type="checkbox"
                  className="checkbox checkbox-sm"
                  checked={preferences.meats.includes(meat)}
                  onChange={() => handleCheckboxChange("meats", meat)}
                />
                <label className="text-base">{meat}</label>
              </div>
            ))}
          </div>
        </div>
        <div>
          <div className="text-lg text-[#4B4F54] mb-1 font-bold">Dietary restrictions</div>
          <div className="grid md:grid-cols-4 grid-cols-2 gap-2">
            {dietary_restrictions.map((restriction) => (
              <div className="flex gap-2 items-center" key={restriction}>
                <input
                  type="checkbox"
                  className="checkbox checkbox-sm"
                  checked={preferences.dietaryRestrictions.includes(restriction)}
                  onChange={() => handleCheckboxChange("dietaryRestrictions", restriction)}
                />
                <label className="text-base">{restriction}</label>
              </div>
            ))}
          </div>
        </div>
        <div>
          <div className="text-lg text-[#4B4F54] mb-1 font-bold">Spice tolerance</div>
          <div className="grid grid-cols-2 gap-2">
            {spices_tolerance.map((spice) => (
              <div className="flex gap-2 items-center" key={spice}>
                <input
                  type="radio"
                  name="radio-spice"
                  className="radio radio-sm"
                  checked={preferences.spiceTolerance === spice}
                  onChange={() => handleRadioChange("spiceTolerance", spice)}
                />
                <label className="text-base">{spice}</label>
              </div>
            ))}
          </div>
        </div>
        <div>
          <div className="text-lg text-[#4B4F54] mb-1 font-bold">Cooking skill levels</div>
          <div className="grid grid-cols-2 gap-2">
            {cooking_skill_levels.map((skill) => (
              <div className="flex gap-2 items-center" key={skill}>
                <input
                  type="radio"
                  name="radio-skill"
                  className="radio radio-sm"
                  checked={preferences.cookingSkill === skill}
                  onChange={() => handleRadioChange("cookingSkill", skill)}
                />
                <label className="text-base">{skill}</label>
              </div>
            ))}
          </div>
        </div>
        <div>
          <div className="text-lg text-[#4B4F54] mb-1 font-bold">Cuisine Types</div>
          <div className="grid md:grid-cols-4 grid-cols-2 gap-2">
            {cuisine_types.map((cuisine) => (
              <div className="flex gap-2 items-center" key={cuisine}>
                <input
                  type="checkbox"
                  className="checkbox checkbox-sm"
                  checked={preferences.cuisineTypes.includes(cuisine)}
                  onChange={() => handleCheckboxChange("cuisineTypes", cuisine)}
                />
                <label className="text-base">{cuisine}</label>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
