"use client";
import React, { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

const ViewCounter = ({ slug, noCount = false, showCount = true }) => {
  const [views, setViews] = useState(0);

  useEffect(() => {
    const incrementView = async () => {
      try {
        let { error } = await supabase.rpc("increment", {
          slug_text:slug ,
        });

        if (error){
            console.error("Error incrementing view count inside try block:", error)
        };
        
      } catch (error) {
        console.error(
          "An error occurred while incrementing the view count:",
          error
        );
      }
    };

    if(!noCount){
        incrementView();
        noCount=!noCount;
    }
  }, [slug, noCount]);

  useEffect(() => {
    const getView = async () => {
      try {
        let { data: views, error } = await supabase
          .from("views")
          .select("count")
          .match({ slug: slug })
          .single();

        if (error) console.error("Error caught while incrementing view", error);
        else
        setViews(views? views.count: 0);
      } catch (error) {
        console.error(
          "An error occured while incrementing view count: ",
          error
        );
      }
    };

    getView();
  }, [slug]);

  if (showCount) return <div>{views} views</div>;
  else {
    return null;
  }
};

export default ViewCounter;
