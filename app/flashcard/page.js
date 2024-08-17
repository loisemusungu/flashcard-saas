"use client";

import { useUser } from "@clerk/nextjs";
import { useEffect, useState } from "react";
import { collection, doc, getDoc, getDocs } from "firebase/firestore";
import { db } from "@/firebase";

import { useSearchParams } from "next/navigation";

export default function Flashcard() {
  const { isLoaded, isIgnedIn, user } = useUser();
  const [flashcards, setFlashcards] = useState([]);
  const [flipped, setFlipped] = useState([]);

  const searchParams = useSearchParams();
  const search = searchParams.get("id");

  useEffect(() => {
    async function getFlashcard() {
      if (!search || !user) return;
      const docRef = collection(doc((db, "users"), user.id), search);
      const docs = await getDocs(docRef);

      if (docSnap.exists()) {
        const collections = docSnap.data().flashcards || [];
        console.log[collections];
        setFlashcards[collections];
      } else {
        await setDoc(docRef, { flashcards: [] });
      }
    }
    getFlashcard();
  }, [user]);
}
