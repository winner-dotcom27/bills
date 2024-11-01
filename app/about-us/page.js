import Image from "next/image";

export default function AboutUs () {
    return (
        <div className=" bg-black px-3 md:px-8 lg:px-16 pt-20">
            <h1 className="font-bold text-6xl text-center text-white">We are providing <br></br>instant loans that help <br></br>solves people's day-to-day needs </h1>
            <p className="text-2xl pt-2 text-center text-white">Bills app empowers and creates the platform for <br></br>our teeming customers to access quick loans with flexible payback options.</p>

            <div className="">
                <div className="flex justify-center gap-[140px] pt-14  ">
                    <div className="bg-gradient-to-t from-blue-500 to-yellow-600 rounded-full p-1">
                        <Image width={240} height={220} className="rounded-full " src="/instructor.webp" alt="profile pic"/>
                    </div>
                    
                    <div className="bg-gradient-to-t from-blue-500 to-yellow-600 rounded-full p-1">
                        <Image width={240} height={220} className="rounded-full" src="/students.webp" alt="download"/>
                    </div>

                    <div className="bg-gradient-to-t from-blue-500 to-yellow-600 rounded-full p-1">
                        <Image width={240} height={220} className="rounded-full" src="/study-materials.webp" alt="materials"/>
                    </div>
                </div>
                
                <div className="flex text-center gap-20 ml-24 text-white">
                    <p className="">We understand that prospective customers <br></br>want to access quick loans, so we provided<br></br>seamless means to do just that</p> 
  
                    <p>Most times, paying back loans can be difficult due to<br></br> financial needs of clients, therefore, we developed<br></br>very easy ways to assist repayment</p>  

                    <p>We understand how harsh the economy is, so we made  <br></br>sure to reduce interest rates on loans collected <br></br> to the barest minimum</p>
                </div>

                <div className="text-center pt-14">
                    <h2 className="text-4xl font-bold text-blue-400">Our Mission</h2>
                    <p  className="text-white">Our mission is to empower individuals and businesses by providing accessible, transparent, and flexible loan solutions that meet their<br></br> unique financial needs. We strive to enhance financial literacy, foster trust, and support our users in achieving <br></br>their goals, all while leveraging technology to streamline the borrowing process.</p>
                </div>
                

                <div className="text-center pt-14">
                    <h2 className="text-4xl font-bold text-blue-400">Our Vision</h2>
                    <p className="text-white">Our vision is to revolutionize the borrowing experience by creating a world where everyone has easy access to fair and responsible financial <br></br>solutions. We aim to be a trusted partner in our user's financial journeys, leveraging innovative technology <br></br>to foster inclusion and empower individuals and businesses to achieve their dreams.</p>
                </div>

                <div className="flex gap-10">
                    <div className="bg-gray-500 w-[280px] h-[260px] rounded-xl my-20">
                        <p className="text-2xl font-bold pt-8 ml-8">more than </p>
                        <p className="ml-8 font-bold text-7xl pt-6">1,500 </p>
                        <p className="text-2xl font-bold ml-8 pt-6">students trained</p>
                    </div>

                    <div className="bg-gray-500 w-[280px] h-[260px] rounded-xl my-20">
                        <p className="text-2xl font-bold pt-8 ml-8">more than </p>
                        <p className="ml-8 font-bold text-7xl pt-6">1,008 </p>
                        <p className="text-2xl font-bold ml-8 pt-6">hours spent on practical lessons</p>
                    </div>

                    <div className="bg-gray-500 w-[280px] h-[260px] rounded-xl my-20">
                        <p className="text-2xl font-bold pt-8 ml-8">more than </p>
                        <p className="ml-8 font-bold text-7xl pt-6">98% </p>
                        <p className="text-2xl font-bold ml-8 pt-6">student completion rate</p>
                    </div>

                    <div className="bg-gray-500 w-[280px] h-[260px] rounded-xl my-20">
                        <p className="text-2xl font-bold pt-8 ml-8">rated </p>
                        <p className="ml-8 font-bold text-7xl pt-6">4.8</p>
                        <p className="text-2xl font-bold ml-8 pt-6">on Google</p>
                    </div>
                </div>
              
              
            </div>
           
        </div>

    )
}