"use client"

import { ThemeProvider } from "@/providers/ThemeProvider";
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import HeroBillboard from '@/components/sections/hero/HeroBillboard';
import ProductCardTwo from '@/components/sections/product/ProductCardTwo';
import FeatureCardOne from '@/components/sections/feature/FeatureCardOne';
import TextAbout from '@/components/sections/about/TextAbout';
import TestimonialCardOne from '@/components/sections/testimonial/TestimonialCardOne';
import FaqDouble from '@/components/sections/faq/FaqDouble';
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FooterBase from '@/components/sections/footer/FooterBase';
import { Award, Bed, Star, MessageCircle, HelpCircle, Calendar } from "lucide-react";

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="shift-hover"
      defaultTextAnimation="reveal-blur"
      borderRadius="soft"
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingOverlay
          navItems={[
            { name: "Rooms", id: "rooms" },
            { name: "Amenities", id: "amenities" },
            { name: "About", id: "about" },
            { name: "Reviews", id: "reviews" },
            { name: "Contact", id: "contact" }
          ]}
          brandName="Grand Azure Hotel"
          button={{
            text: "Book Now",
            href: "contact"
          }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroBillboard
          title="Experience Luxury Redefined"
          description="Discover unparalleled elegance and comfort at Grand Azure Hotel, where every detail is crafted for your perfect getaway"
          tag="5-Star Luxury"
          tagIcon={Award}
          buttons={[
            {
              text: "Book Your Stay",
              href: "contact"
            },
            {
              text: "Explore Rooms",
              href: "rooms"
            }
          ]}
          imageSrc="https://images.pexels.com/photos/189295/pexels-photo-189295.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          imageAlt="Elegant luxury hotel lobby with sophisticated interior design"
        />
      </div>

      <div id="rooms" data-section="rooms">
        <ProductCardTwo
          title="Exceptional Accommodations"
          description="Choose from our carefully curated selection of luxurious rooms and suites"
          tag="Premium Rooms"
          tagIcon={Bed}
          products={[
            {
              id: "deluxe",
              brand: "Grand Azure",
              name: "Deluxe Ocean Suite",
              price: "$450/night",
              rating: 5,
              reviewCount: "127",
              imageSrc: "https://images.pexels.com/photos/2506990/pexels-photo-2506990.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Elegant deluxe ocean suite with premium amenities"
            },
            {
              id: "oceanview",
              brand: "Grand Azure",
              name: "Ocean View Room",
              price: "$320/night",
              rating: 5,
              reviewCount: "89",
              imageSrc: "https://images.pexels.com/photos/3225561/pexels-photo-3225561.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Beautiful ocean view room with balcony"
            },
            {
              id: "presidential",
              brand: "Grand Azure",
              name: "Presidential Suite",
              price: "$850/night",
              rating: 5,
              reviewCount: "45",
              imageSrc: "https://images.pexels.com/photos/34516518/pexels-photo-34516518.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Luxurious presidential suite with premium furnishings"
            }
          ]}
        />
      </div>

      <div id="amenities" data-section="amenities">
        <FeatureCardOne
          title="World-Class Amenities"
          description="Experience exceptional facilities designed to elevate your stay"
          tag="Premium Facilities"
          tagIcon={Star}
          features={[
            {
              title: "Luxury Spa & Wellness",
              description: "Rejuvenate your mind and body at our award-winning spa featuring premium treatments and tranquil ambiance",
              imageSrc: "https://images.pexels.com/photos/6957079/pexels-photo-6957079.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Luxury spa and wellness center"
            },
            {
              title: "Fine Dining Restaurant",
              description: "Savor exquisite cuisine crafted by renowned chefs in our elegant dining establishment",
              imageSrc: "https://images.pexels.com/photos/2291636/pexels-photo-2291636.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Elegant fine dining restaurant"
            },
            {
              title: "State-of-Art Fitness",
              description: "Maintain your wellness routine in our fully equipped modern fitness center with premium equipment",
              imageSrc: "https://images.pexels.com/photos/3902730/pexels-photo-3902730.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Modern hotel fitness center"
            }
          ]}
        />
      </div>

      <div id="about" data-section="about">
        <TextAbout
          title="We create unforgettable experiences through exceptional hospitality, luxurious accommodations, and personalized service that exceeds every guest's expectations"
          buttons={[
            {
              text: "Our Story",
              href: "about"
            },
            {
              text: "Book Experience",
              href: "contact"
            }
          ]}
        />
      </div>

      <div id="reviews" data-section="reviews">
        <TestimonialCardOne
          title="Guest Experiences"
          description="Discover what our valued guests say about their extraordinary stays"
          tag="5-Star Reviews"
          tagIcon={MessageCircle}
          testimonials={[
            {
              id: "1",
              name: "Sarah Mitchell",
              role: "CEO",
              company: "Tech Innovations Inc",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/789822/pexels-photo-789822.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Portrait of Sarah Mitchell"
            },
            {
              id: "2",
              name: "Marcus Chen",
              role: "Investment Director",
              company: "Global Capital Partners",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/6894103/pexels-photo-6894103.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Portrait of Marcus Chen"
            },
            {
              id: "3",
              name: "Elena Rodriguez",
              role: "Creative Director",
              company: "Design Studio Pro",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/34520848/pexels-photo-34520848.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Portrait of Elena Rodriguez"
            },
            {
              id: "4",
              name: "James Wilson",
              role: "Managing Partner",
              company: "Wilson & Associates",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/5673488/pexels-photo-5673488.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Portrait of James Wilson"
            },
            {
              id: "5",
              name: "Isabella Thompson",
              role: "Marketing Executive",
              company: "Lifestyle Brands Co",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/789822/pexels-photo-789822.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Portrait of Isabella Thompson"
            }
          ]}
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqDouble
          title="Frequently Asked Questions"
          description="Find answers to common questions about your stay at Grand Azure Hotel"
          tag="Help Center"
          tagIcon={HelpCircle}
          faqs={[
            {
              id: "1",
              title: "What are your check-in and check-out times?",
              content: "Check-in is available from 3:00 PM and check-out is until 12:00 PM. Early check-in and late check-out can be arranged upon request and subject to availability."
            },
            {
              id: "2",
              title: "Do you offer airport transportation?",
              content: "Yes, we provide complimentary airport shuttle service for all our guests. Please contact our concierge team to arrange your transfer at least 24 hours in advance."
            },
            {
              id: "3",
              title: "What dining options are available?",
              content: "Grand Azure features a fine dining restaurant, casual café, poolside bar, and 24-hour room service. Our culinary team offers international and local cuisine options."
            },
            {
              id: "4",
              title: "Is parking available?",
              content: "We offer complimentary valet parking for all registered guests. Self-parking is also available in our secure underground garage."
            },
            {
              id: "5",
              title: "What amenities are included in my stay?",
              content: "All rooms include complimentary Wi-Fi, premium bedding, marble bathrooms, minibar, and access to our fitness center, pool, and spa facilities."
            },
            {
              id: "6",
              title: "Do you allow pets?",
              content: "Yes, we are a pet-friendly hotel. We welcome well-behaved pets with advance notice. Pet amenities and services are available upon request."
            }
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactCenter
          tag="Reservations"
          tagIcon={Calendar}
          title="Ready for Your Perfect Stay?"
          description="Book your luxurious experience at Grand Azure Hotel and discover unparalleled hospitality in paradise"
          inputPlaceholder="Enter your email for booking"
          buttonText="Book Now"
          termsText="By booking with us, you agree to our reservation terms and privacy policy. Confirmation will be sent to your email."
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterBase
          columns={[
            {
              title: "Hotel",
              items: [
                { label: "Rooms & Suites", href: "rooms" },
                { label: "Amenities", href: "amenities" },
                { label: "Dining", href: "dining" },
                { label: "Spa & Wellness", href: "spa" }
              ]
            },
            {
              title: "Services",
              items: [
                { label: "Concierge", href: "concierge" },
                { label: "Business Center", href: "business" },
                { label: "Events", href: "events" },
                { label: "Airport Transfer", href: "transfer" }
              ]
            },
            {
              title: "Information",
              items: [
                { label: "About Us", href: "about" },
                { label: "Contact", href: "contact" },
                { label: "Location", href: "location" },
                { label: "Reviews", href: "reviews" }
              ]
            }
          ]}
          copyrightText="© 2025 | Grand Azure Hotel"
        />
      </div>
    </ThemeProvider>
  );
}