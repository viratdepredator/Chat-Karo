import React from "react";
import Input from "../../components/Input"


const Dashboard= () => {
    const Avatar=<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-user-circle" width="60" height="60" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
    <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
    <path d="M12 10m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
    <path d="M6.168 18.849a4 4 0 0 1 3.832 -2.849h4a4 4 0 0 1 3.834 2.855" />
    </svg>
    const contacts = [
        {
        name:"Viru",
        status:"Available",
        img: Avatar
        },
            {
            name:"Riyu",
            status:"Available",
            img: Avatar
            },
            {
                name:"Amar",
                status:"Available",
                img: Avatar
            },
            {
                name:"Kittu",
                status:"Available",
                img: Avatar
                },
                {
                    name:"Chamra",
                    status:"Available",
                    img: Avatar
                    },
                    {
                        name:"Romeo",
                        status:"Available",
                        img: Avatar
                    }
    ]
    return (
         <div className="w-screen flex">
            <div className="w-[25%] h-screen bg-secondary">
            <div className="flex justify-center items-center my-8 mx-14">
                                    <div className="border border-primary p-[2px] rounded-full">
                                    {Avatar}
                                    </div>
                                    <div className="ml-8"> 
                                    <h3 className="text-2xl">Virat Kumar</h3>
                                    <p className="text-sm font-light">My Account</p>
                                    </div>
                                    </div>
                <hr/>
                <div className="mx-14 mt-10">
                    <div className="text-primary text-lg">Messages</div>
                    <div>
                    {
                            contacts.map(({name,status,img}) => {
                                return(
                                    <div className="flex items-center py-8 border-b border-b-gray-300">
                                    
                                    <div className="cursor-pointer flex items-center">

                                    <div>
                                    {img}
                                    </div>
                                    <div className="ml-6">
                                    <h3 className="text-lg font-semibold">{name}</h3>
                                    <p className="text-sm font-light text-gray-600">{status}</p>
                                    </div>
                                    </div>
                                    </div>
                                 )
                      })
                    }
                    </div>
                </div>
            </div>
            <div className="w-[50%] h-screen bg-white flex flex-col items-center " > 
                    <div className="w-[75%] bg-secondary h-[80px] my-14 rounded-full flex items-center px-14 shadow-lg">
                        <div className="cursor-pointer">{Avatar}</div>
                        <div className="ml-6 mr-auto">
                            <h3 className="text-lg">Alexander</h3>
                            <p className="text-sm font-light text-gray-600">online</p>
                        </div>
                        <div className="cursor-pointer">
                        <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-phone-outgoing"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2c-8.072 -.49 -14.51 -6.928 -15 -15a2 2 0 0 1 2 -2" /><path d="M15 5h6" /><path d="M18.5 7.5l2.5 -2.5l-2.5 -2.5" /></svg>
                        </div>
                    </div>
                <div className="h-[75%] w-full overflow-scroll  shadow-sm">
                     <div className="p-14">
                        <div className="max-w-[40%] p-4 w-[300px] bg-secondary rounded-b-xl rounded-tr-xl mb-6"> 
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        </div>
                        <div className="p-4 max-w-[40%]  bg-primary rounded-b-xl rounded-tl-xl ml-auto text-white mb-6"> 
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        </div>
                        <div className="max-w-[40%] p-4 w-[300px] bg-secondary rounded-b-xl rounded-tr-xl mb-6"> 
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        </div>
                        <div className="p-4 max-w-[40%]  bg-primary rounded-b-xl rounded-tl-xl ml-auto text-white mb-6"> 
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        </div>
                        <div className="max-w-[40%] p-4 w-[300px] bg-secondary rounded-b-xl rounded-tr-xl mb-6"> 
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        </div>
                        <div className="p-4 max-w-[40%]  bg-primary rounded-b-xl rounded-tl-xl ml-auto text-white mb-6"> 
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        </div>
                        <div className="max-w-[40%] p-4 w-[300px] bg-secondary rounded-b-xl rounded-tr-xl mb-6"> 
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        </div>
                        <div className="p-4 max-w-[40%]  bg-primary rounded-b-xl rounded-tl-xl ml-auto text-white mb-6"> 
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        </div>
                     </div>
                </div>
            <div className="p-14 w-full flex items-center">
                <Input placeholder="Send Messages...." className="w-full" inputClassName="p-4 border-0 shadow-lg rounded-xlg bg-light focus:ring-0 focus:border-0 outline-none"/>
                <div className="ml-4 p-4 cursor-pointer bg-light rounded-full">
                <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-send"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M10 14l11 -11" /><path d="M21 3l-6.5 18a.55 .55 0 0 1 -1 0l-3.5 -7l-7 -3.5a.55 .55 0 0 1 0 -1l18 -6.5" /></svg>
                </div>
                <div className="ml-4 p-4 cursor-pointer bg-light rounded-full">
                <svg  xmlns="http://www.w3.org/2000/svg"  width="30"  height="30"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-plus"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 5l0 14" /><path d="M5 12l14 0" /></svg>
                </div>
            </div>
            </div>
            <div className="w-[25%] h-screen bg-light"></div>
         </div>
    )
}


export default Dashboard