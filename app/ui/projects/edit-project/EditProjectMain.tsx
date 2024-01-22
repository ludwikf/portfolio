"use client";
import React, { useEffect, useRef, useState } from "react";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import { app } from "@/utils/firebase";
import { PlusCircleIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

export default function EditProjectMain({ locale }: any) {
  const [file, setFile] = useState<File | null>(null);
  const [media, setMedia] = useState<string>("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [link, setLink] = useState("");
  const [github, setGithub] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { id } = useParams();
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const router = useRouter();
  const { data: session }: any = useSession();

  const adjustTextareaHeight = () => {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = "auto";
      textarea.style.height = `${textarea.scrollHeight}px`;
    }
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    setIsSubmitting(true);

    const title = e.target[0].value;
    const link = e.target[1].value;
    const github = e.target[2].value;
    const description = e.target[3].value;
    const image =
      media ||
      "https://static-00.iconduck.com/assets.00/no-image-icon-2048x2048-2t5cx953.png";

    try {
      const res = await fetch(`/api/edit-project?id=${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title, link, github, description, image }),
      });

      if (!res.ok) {
        throw new Error("Error submitting");
      }
      if (res.status === 200) {
        router.push("/admin-cp/projects");
      }
    } catch (error) {
      throw new Error("Error submitting");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleFileChange = (e: any) => {
    const selectedFile = e.target.files ? e.target.files[0] : null;
    if (selectedFile) {
      setFile(selectedFile);
    }
  };

  const fetchProjectDetails = async () => {
    if (!id) {
      return router.push("/admin-cp/projects");
    }
    try {
      const response = await fetch(`/api/single-project?id=${id}`);
      if (response.ok) {
        const data = await response.json();
        setTitle(data.title);
        setDescription(data.description);
        setLink(data.link);
        setGithub(data.github);
        setMedia(data.image);
      }
    } catch (error: any) {
      throw new Error(error);
    }
  };

  useEffect(() => {
    fetchProjectDetails();
  }, []);

  useEffect(() => {
    const upload = async () => {
      if (file) {
        const storage = getStorage(app);
        const name = new Date().getTime() + file.name;
        const storageRef = ref(storage, name);

        const uploadTask = uploadBytesResumable(storageRef, file);

        uploadTask.on(
          "state_changed",
          (snapshot) => {
            const progress =
              (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            console.log("Upload is " + progress + "% done");
            switch (snapshot.state) {
              case "paused":
                console.log("Upload is paused");
                break;
              case "running":
                console.log("Upload is running");
                break;
            }
          },
          (error) => {},
          () => {
            getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
              setMedia(downloadURL);
            });
          }
        );
      }
    };
    upload();
  }, [file]);

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.value = description;
      adjustTextareaHeight();
    }
  }, [description]);
  return (
    <>
      <div className="my-[25px] flex w-screen flex-col justify-center items-center">
        <div className="w-[90%] min-h-[100%] flex mb-5">
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-5 w-full mt-5 lg:mt-0"
          >
            <input
              defaultValue={title}
              className="bg-inherit text-3xl lg:text-5xl mt-10 placeholder:text-[#999] focus:outline-none"
              type="text"
              placeholder={locale.title}
              required
            />
            <input
              defaultValue={link}
              className="bg-inherit text-xl lg:text-2xl placeholder:text-[#999] focus:outline-none"
              type="text"
              placeholder="Link"
              required
            />
            <input
              defaultValue={github}
              className="bg-inherit text-xl lg:text-2xl placeholder:text-[#999] focus:outline-none"
              type="text"
              placeholder="Github"
              required
            />
            <textarea
              defaultValue={description}
              ref={textareaRef}
              className="bg-inherit text-lg lg:text-2xl placeholder:text-[#999] focus:outline-none resize-none"
              placeholder={locale.content}
              onInput={adjustTextareaHeight}
              required
            />
            <div>
              <input
                type="file"
                id="image"
                onChange={handleFileChange}
                className="hidden"
              />
              <div className="flex">
                <label className="w-[50px] relative" htmlFor="image">
                  <PlusCircleIcon className="w-10 cursor-pointer" />
                </label>
                <button
                  className="bg-white text-black rounded-xl px-3 py-2 hover:brightness-50 transition-all select-none"
                  disabled={isSubmitting}
                  type="submit"
                >
                  {locale.edit}
                </button>
              </div>
              <div className="select-none my-5 relative w-[200px] h-[110px]">
                {media && (
                  <Image
                    src={media}
                    alt="img"
                    fill
                    priority
                    className="rounded-xl object-cover object-left"
                  />
                )}
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}