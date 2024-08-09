import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const HorseFacts = [
  "Horses have the largest eyes of any land mammal.",
  "A horse's teeth take up more space in their head than their brain.",
  "Horses can sleep both standing up and lying down.",
  "The oldest horse on record lived to be 62 years old.",
  "Horses can't vomit.",
];

const HorseBreeds = [
  { name: "Arabian", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Arabian_horse_white.jpg/640px-Arabian_horse_white.jpg" },
  { name: "Thoroughbred", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Thoroughbred_racing_horse.jpg/640px-Thoroughbred_racing_horse.jpg" },
  { name: "Clydesdale", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Clydesdale_horse.jpg/640px-Clydesdale_horse.jpg" },
  { name: "Appaloosa", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Appaloosa_stallion.jpg/640px-Appaloosa_stallion.jpg" },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-100 to-amber-200 p-8">
      <h1 className="text-4xl font-bold mb-8 text-center text-amber-800">The Magnificent World of Horses</h1>
      
      <div className="max-w-4xl mx-auto grid gap-8">
        <Card>
          <CardHeader>
            <CardTitle>Fascinating Horse Facts</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-6">
              {HorseFacts.map((fact, index) => (
                <li key={index} className="mb-2">{fact}</li>
              ))}
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Popular Horse Breeds</CardTitle>
          </CardHeader>
          <CardContent>
            <Carousel className="w-full max-w-xs mx-auto">
              <CarouselContent>
                {HorseBreeds.map((breed, index) => (
                  <CarouselItem key={index}>
                    <div className="p-1">
                      <Card>
                        <CardContent className="flex aspect-square items-center justify-center p-6">
                          <div className="text-center">
                            <img src={breed.image} alt={breed.name} className="mx-auto object-cover w-full h-48 mb-4 rounded-lg" />
                            <h3 className="font-semibold">{breed.name}</h3>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Why Horses are Amazing</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              Horses have been companions to humans for thousands of years. They've been used for transportation,
              farming, warfare, and sport. Today, they continue to captivate us with their beauty, strength, and
              intelligence. Whether you're an experienced equestrian or simply an admirer, horses have a unique
              ability to inspire and connect with people of all ages.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Index;
