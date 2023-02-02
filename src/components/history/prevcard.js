import React from "react";

const Prevcard = (props) => {
    const { key, description, name, img, title } = props;
    return (
        <>
            <div class="py-4" key={key}>
                <card class="w-full flex flex-col">
                    <div class="relative">
                        <img src={img} alt="events" class="w-96 max-h-56" />
                    </div>
                    <div class="flex flex-row mt-2 gap-2">
                        <div clas="flex flex-col">
                            <p class="text-[#00df9a] text-sm font-semibold">{title}</p>
                            <p class="text-gray-400 text-xs mt-2 hover:text-gray-100" href="#">{name} </p>
                            <p class="text-white text-xs mt-1">{description}</p>
                        </div>
                    </div>
                </card>
            </div>
        </>
    )
}

export default Prevcard;