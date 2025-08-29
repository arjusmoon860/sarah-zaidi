import Container from "@/app/components/Container";
import StaggeredLink from "../StaggeredLink/StaggeredLink";

export default function AboutMe() {
    return (
        <div className="bg-white py-10 md:py-[120px]" id="about-me">
            <Container>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-[120px]">
                    <div className="flex flex-col gap-6">
                        <div className="md:sticky text-center md:text-left top-[200px] flex flex-col gap-6">
                            <h2 className="text-[36px] leading-none lg:text-[54px] text-[#b61e42] font-bold">
                                Nurturing Parenthood Dreams
                            </h2>
                            <p className="text-[16px] lg:text-[20px] text-black mt-0 md:mr-[50px]">
                                Dr. Sarah Zaidi Merchant is dedicated to guiding couples on their fertility journey, combining expertise and empathy to make parenthood possible with the latest advancements in reproductive care.
                            </p>

                            <StaggeredLink href="/" className="bg-[#b61e42] mx-auto md:mr-auto md:ml-0 py-2 px-4 rounded-full text-white mt-6">
                                <span>Schedule Consultation</span>
                            </StaggeredLink>
                        </div>
                    </div>

                    <div className="flex flex-col gap-12">
                        <div className="bg-white md:sticky top-[200px] border border-[#b61e42] rounded-2xl md:p-6 p-3">
                            <div className="md:py-[40px] relative md:px-[30px] px-[15px] py-[20px]">
                                <div className="absolute md:-top-[38px] -top-[26px] left-0 px-[10px] bg-white">
                                    <p>Expert Gynecological Care</p>
                                </div>
                                <h3 className="text-[24px] leading-none lg:text-[28px] text-[#b61e42] font-bold">
                                    Expert Gynecological Care
                                </h3>
                                <p className="text-[16px] lg:text-[18px] text-black mt-6">
                                    Dr. Sarah Zaidi Merchant, MBBS, MS (OBG), DNB (OG), F.ART (ICOG), is a gynecologist with 13 years of experience, specializing in infertility treatments including IVF, IUI, and ICSI. She provides advanced, compassionate, and personalized care at Indira IVF Hospital, Dadar West, Mumbai.
                                </p>
                            </div>
                        </div>

                        <div className="bg-white md:sticky top-[240px] border border-[#b61e42] rounded-2xl md:p-6 p-3">
                            <div className="md:py-[40px] relative md:px-[30px] px-[15px] py-[20px]">
                                <div className="absolute md:-top-[38px] -top-[26px] left-0 px-[10px] bg-white">
                                    <p>Expertise in Fertility Care</p>
                                </div>
                                <h3 className="text-[24px] leading-none lg:text-[28px] text-[#b61e42] font-bold">
                                    Expertise in Fertility Care
                                </h3>
                                <p className="text-[16px] lg:text-[18px] text-black mt-6">
                                    Dr. Sarah Zaidi Merchant offers comprehensive treatment for infertility, with special expertise in IVF, ICSI, IUI, PCOS-related infertility, recurrent pregnancy loss, thin endometrium, and poor ovarian reserve, helping couples overcome challenges on their path to parenthood.
                                </p>
                            </div>
                        </div>

                        <div className="bg-white md:sticky top-[280px] border border-[#b61e42] rounded-2xl md:p-6 p-3">
                            <div className="md:py-[40px] relative md:px-[30px] px-[15px] py-[20px]">
                                <div className="absolute md:-top-[38px] -top-[26px] left-0 px-[10px] bg-white">
                                    <p>Certifications & Training</p>
                                </div>
                                <h3 className="text-[24px] leading-none lg:text-[28px] text-[#b61e42] font-bold">
                                    Certifications & Training
                                </h3>
                                <p className="text-[16px] lg:text-[18px] text-black mt-6">
                                    Dr. Sarah Zaidi Merchant has received advanced training and certifications to provide comprehensive fertility and gynecological care:

                                </p>
                                <ul className="list-disc list-inside ml-2 md:ml-6 mt-2">
                                    <li>Advanced Training in Assisted Reproductive Technology (ICOG) & NHS Singapore</li>
                                    <li>Basic Laparoscopic Training (ICOG)</li>
                                    <li>Certified in Ultrasound and Fetal Medicine</li>
                                </ul>
                            </div>
                        </div>

                        <div className="bg-white md:sticky top-[320px] border border-[#b61e42] rounded-2xl md:p-6 p-3">
                            <div className="md:py-[40px] relative md:px-[30px] px-[15px] py-[20px]">
                                <div className="absolute md:-top-[38px] -top-[26px] left-0 px-[10px] bg-white">
                                    <p>Awards & Recognition</p>
                                </div>
                                <h3 className="text-[24px] leading-none lg:text-[28px] text-[#b61e42] font-bold">
                                    Awards & Recognition
                                </h3>
                                <p className="text-[16px] lg:text-[18px] text-black mt-6">
                                    Dr. Sarah Zaidi Merchant has been honored for her excellence and leadership in infertility and IVF care:

                                </p>
                                <ul className="list-inside ml-2 md:ml-4 mt-2">
                                    <li>🏆 &nbsp; &nbsp; Best Doctors 2023 – Most Dynamic IVF Specialist, Outlook Healthcare Awards</li>
                                    <li>🏆 &nbsp; &nbsp; Top 10 IVF Specialist of Mumbai 2023 – Asia GCC Awards</li>
                                    <li>🏆 &nbsp; &nbsp; Iconic Healthcare Leadership Awards 2022 – Golden Aim Awards</li>
                                    <li>🏆 &nbsp; &nbsp; Excellence & Leadership Awards 2021 – Fama</li>
                                    <li>🏆 &nbsp; &nbsp; Quality Healthcare Award in Infertility & IVF 2025</li>
                                    <li>🏆 &nbsp; &nbsp; Women Leader Award 2022 – Poddar College Student Council</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}