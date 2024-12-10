


import React from "react";
import {
    IconBrandGithub,
    IconBrandLinkedin,
    IconBrandInstagram
} from "@tabler/icons-react";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/lable";
import { cn } from "../utils/cn";
import { Textarea } from "../components/ui/textArea";
import { Link } from "react-router-dom";

export function Contact() {
    const handleSubmit = (event) => {
        event.preventDefault();
        // Add form submission logic here
    };

    const handleBack = () => {
        window.history.back(); // This will take the user back to the previous page
    };

    return (
        <div className="h-[50rem] w-full dark:bg-black bg-white dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex items-center justify-center">
            {/* Radial gradient for the container to give a faded look */}
            <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>

            <div className="max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black">
                {/* Back Button */}
                <div className=" flex items-center justify-start gap-20">
                    <button
                        onClick={handleBack}
                        className="mt-4 text-neutral-700 dark:text-neutral-300 hover:text-neutral-500 dark:hover:text-neutral-200 font-medium text-sm"
                    >
                        &larr; Back
                    </button>

                    <h2 className="font-bold text-2xl text-neutral-800 dark:text-neutral-200 mt-4">
                        Contact
                    </h2>
                </div>

                <form className="my-8" onSubmit={handleSubmit}>
                    <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
                        <LabelInputContainer>
                            <Label htmlFor="firstname">First name</Label>
                            <Input id="firstname" placeholder="Bhavesh" type="text" />
                        </LabelInputContainer>
                        <LabelInputContainer>
                            <Label htmlFor="lastname">Last name</Label>
                            <Input id="lastname" placeholder="Zalke" type="text" />
                        </LabelInputContainer>
                    </div>
                    <LabelInputContainer className="mb-4">
                        <Label htmlFor="email">Email Address</Label>
                        <Input id="email" placeholder="bhavesh@gmail.com" type="email" />
                    </LabelInputContainer>
                    <LabelInputContainer className="mb-4">
                        <Label htmlFor="message">Message</Label>
                        <Textarea id="message" placeholder="Message" />
                    </LabelInputContainer>
                    <button
                        className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
                        type="submit"
                    >
                        Submit &rarr;
                        <BottomGradient />
                    </button>

                    <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />

                    <div className="flex flex-col space-y-4">
                        <Link to='https://www.linkedin.com/in/bhavesh-zalke-1b2646255/' target="_blank">

                            <SocialButton icon={IconBrandLinkedin} label="Linked In" />
                        </Link>
                        <Link to='https://github.com/Bhavesh-Zalke-1628'>
                            <SocialButton
                                icon={IconBrandGithub}
                                label="GitHub"
                            />
                        </Link>
                        <Link to='https://www.instagram.com/bhaveshzalke_1628/' target="_blank">

                            <SocialButton icon={IconBrandInstagram} label="Instagram" />
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    );
}

const BottomGradient = () => {
    return (
        <>
            <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
            <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
        </>
    );
};

const LabelInputContainer = ({ children, className }) => {
    return <div className={cn("flex flex-col space-y-2 w-full", className)}>{children}</div>;
};

const SocialButton = ({ icon: Icon, label }) => {
    return (
        <button
            className="relative group/btn flex space-x-2 items-center justify-start px-4 w-full text-black rounded-md h-10 font-medium shadow-input bg-gray-50 dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]"
            type="button"
        >
            <Icon className="h-4 w-4 text-neutral-800 dark:text-neutral-300" />
            <span className="text-neutral-700 dark:text-neutral-300 text-sm">{label}</span>
            <BottomGradient />
        </button>
    );
};
