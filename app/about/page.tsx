'use client'
import { CustomButton } from "@/components"
import Image from "next/image";
import { useRouter } from "next/navigation";

const About = () => {
    const router = useRouter();

    const handleScroll = () => {
        router.push('/')
    }
    return (
        <>
            <div className="hero">
                <div className="flex-1 pt-36 padding-x">
                    <h1 className="hero__title">Car toh Dekhiye!</h1>
                    <p className="hero__subtitle">Car Dekhiye is your trusted partner in the world of automobiles.
                        We're dedicated to making your car shopping experience hassle-free and enjoyable.</p>
                    <CustomButton
                        title="Visit Home"
                        containerStyles="bg-primary-blue 
            text-white rounded-full mt-10"
                        handleClick={handleScroll}
                        btnType="button"
                    />
                </div>
                <div className="hero__image-container">
                    <div className="hero__image">
                        <Image src="/car2.png" alt="hero"
                            fill className="object-contain" />
                    </div>

                    <div className="hero__image-overlay"></div>
                </div>
            </div>


            <div className="container mx-auto flex flex-col md:flex-row items-center justify-center space-y-6 md:space-y-0">
                <div className="md:w-1/2 md:mr-8 text-center flex flex-col justify-center">
                    <h2 className="text-6xl font-semibold text-gray-800">Our Team and the Idea</h2>
                    <p className="text-gray-600 mt-4 text-2xl">
                        <b>Car Dekhiye</b> was born from a simple yet powerful idea: to revolutionize the way
                         people discover, experience, and interact with automobiles. In a world where
                          the automotive industry continues to evolve at a rapid pace, we recognized 
                          the need for a platform that not only provides comprehensive information about
                           cars but also simplifies the process of test driving and purchasing vehicles.
                    </p>
                </div>
                <div className="md:w-1/2 md:ml-8 cursor-pointer">
                    <Image src="/startupteam.jpg" alt="Car Dekhiye Team" className="rounded-lg shadow-lg" width={600}
                     height={400} />
                </div>
            </div>
            <div className="container mx-auto mt-8 my-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="p-6 bg-white rounded-lg shadow-lg">
                        <h3 className="text-xl font-semibold text-gray-800">Our Values</h3>
                        <ul className="mt-4 text-gray-600">
                            <li className="mb-2">
                                <span className="text-yellow-500 mr-2">1.</span>
                                Customer-Centric Approach: At Car Dekhiye, our customers are at the heart of everything we do.
                            </li>
                            <li className="mb-2">
                                <span className="text-yellow-500 mr-2">2.</span>
                                Transparency: We believe in transparency throughout the car-buying journey.
                            </li>
                            <li className="mb-2">
                                <span className="text-yellow-500 mr-2">3.</span>
                                Convenience: We understand that your time is valuable.
                            </li>
                            <li className="mb-2">
                                <span className="text-yellow-500 mr-2">4.</span>
                                Quality Assurance: We work closely with trusted dealerships and manufacturers.
                            </li>
                            <li className="mb-2">
                                <span className="text-yellow-500 mr-2">5.</span>
                                Innovation: Car Dekhiye embraces technological advancements in the automotive industry.
                            </li>
                            <li className="mb-2">
                                <span className="text-yellow-500 mr-2">6.</span>
                                Environmental Responsibility: We are committed to sustainability.
                            </li>
                            <li>
                                <span className="text-yellow-500 mr-2">7.</span>
                                Community Engagement: Car Dekhiye is not just a platform; it's a community of car enthusiasts and experts.
                            </li>
                        </ul>
                    </div>
                    <div className="p-6 bg-white rounded-lg shadow-lg">
                    <h3 className="text-xl font-semibold text-gray-800">Our Motto: Driven by Passion</h3>
                    <ul className="mt-4 text-gray-600">
                        <li className="mb-2">
                            <span className="text-yellow-500 mr-2">1.</span>
                            Customer-Centric Approach: At Car Dekhiye, our customers are at the heart of everything we do.
                        </li>
                        <li className="mb-2">
                            <span className="text-yellow-500 mr-2">2.</span>
                            Transparency: We believe in transparency throughout the car-buying journey.
                        </li>
                        <li className="mb-2">
                            <span className="text-yellow-500 mr-2">3.</span>
                            Convenience: We understand that your time is valuable.
                        </li>
                        <li className="mb-2">
                            <span className="text-yellow-500 mr-2">4.</span>
                            Quality Assurance: We work closely with trusted dealerships and manufacturers.
                        </li>
                        <li className="mb-2">
                            <span className="text-yellow-500 mr-2">5.</span>
                            Innovation: Car Dekhiye embraces technological advancements in the automotive industry.
                        </li>
                        <li className="mb-2">
                            <span className="text-yellow-500 mr-2">6.</span>
                            Environmental Responsibility: We are committed to sustainability.
                        </li>
                        <li>
                            <span className="text-yellow-500 mr-2">7.</span>
                            Community Engagement: Car Dekhiye is not just a platform; it's a community of car enthusiasts and experts.
                        </li>
                    </ul>
                </div>
                </div>
            </div>
        </>
    )
}

export default About