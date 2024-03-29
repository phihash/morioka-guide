"use client";
import React from "react";
import FoodItem from "../components/foodItem";
import { noto_sans_jp } from "../fonts";
import { useState, memo } from "react";
import FoodButton from "../components/foodButton";
import FoodRadioButton from "../components/foodRadioButton";
import foodData from "../data/foodData";

// eslint-disable-next-line react/display-name
const FoodClientPage = memo(() => {
  const [isOpenNow, setIsOpenNow] = useState(false);
  const foodButtonNames = [
    "Wifi有",
    "充電有",
    "カフェ",
    "入りやすい",
    "和食",
    "洋食",
    "海鮮",
    "スイーツ",
    "麺類",
  ];
  const [selectedFoodCategories, setSelectedFoodCategories] =
    useState<string[]>(foodButtonNames);

  const handleAllFoodCategory = () => {
    if (!selectedFoodCategories.length) {
      setSelectedFoodCategories(foodButtonNames);
    } else {
      setSelectedFoodCategories([]);
    }
  };
  const isOpen = (restaurant: FoodItemProps): boolean => {
    const now = new Date();
    const day = now.toLocaleDateString("ja-JP", { weekday: "long" });

    if (!restaurant.openingHours) {
      return false;
    }

    const openingHours = restaurant.openingHours[day];
    if (!openingHours || openingHours === "" || openingHours === "休業") {
      return false;
    }

    const [openTime, closeTime] = openingHours.split("〜");
    const currentTime = now.getTime();

    const [openHours, openMinutes] = openTime.split(":").map(Number);
    const openDate = new Date(now);
    openDate.setHours(openHours, openMinutes, 0, 0);

    const [closeHours, closeMinutes] = closeTime.split(":").map(Number);
    const closeDate = new Date(now);
    closeDate.setHours(closeHours, closeMinutes, 0, 0);

    return (
      currentTime >= openDate.getTime() && currentTime <= closeDate.getTime()
    );
  };
  const [foodItems, setFoodItems] = useState(foodData);
  const [sortBy, setSortBy] = useState("");
  const handleSortByLowPrice = () => {
    setSortBy("Low");
    const sortedItems = [...foodItems].sort((a, b) =>
      sortBy == "Low" ? a.price - b.price : b.price - a.price,
    );
    setFoodItems(sortedItems);
  };
  const handleSortByHighPrice = () => {
    setSortBy("High");
    const sortedItems = [...foodItems].sort((a, b) =>
      sortBy == "High" ? b.price - a.price : a.price - b.price,
    );
    setFoodItems(sortedItems);
  };
  const handleSortByRecommendation = () => {
    setSortBy("Recommendation");
    const sortedItems = [...foodItems].sort((a, b) =>
      sortBy == "Recommendation"
        ? b.recommendation - a.recommendation
        : a.recommendation - b.recommendation,
    );
    setFoodItems(sortedItems);
  };

  const clickFoodCategory = (categoryName: string) => {
    if (categoryName === "現在営業中") {
      setIsOpenNow(!isOpenNow);
    } else {
      // 他のカテゴリの処理
      const index = selectedFoodCategories.indexOf(categoryName);

      if (index === -1) {
        setSelectedFoodCategories([...selectedFoodCategories, categoryName]);
      } else {
        const newCategories = [...selectedFoodCategories];
        newCategories.splice(index, 1);
        setSelectedFoodCategories(newCategories);
      }
    }
  };
  return (
    <div className="bg-green-700 ">
      <div className="bg-white rounded-b-3xl">
        <div className="w-11/12 mx-auto pb-8">
          <h3 className={`${noto_sans_jp.className} px-3 font-semibold mt-6`}>
            カテゴリ
          </h3>
          <div className="px-3 flex flex-wrap gap-1.5 mt-6">
            <FoodButton
              onClick={handleAllFoodCategory}
              name="All"
              selected={Boolean(
                selectedFoodCategories.length == foodButtonNames.length,
              )} // カテゴリ全選択じゃないと色つけさせないようにするため
            />

            {foodButtonNames.map((foodButtonName, index) => {
              return (
                <FoodButton
                  key={index}
                  onClick={() => clickFoodCategory(foodButtonName)}
                  name={foodButtonName}
                  selected={selectedFoodCategories.includes(foodButtonName)}
                />
              );
            })}
            <div
              className={`${noto_sans_jp.className} tracking-widest font-semibold border-2 border-amber-500 w-max border py-1 px-2 rounded-2xl text-xs ${
                isOpenNow ? "bg-amber-500 text-white" : "text-amber-500"
              } md:hover:bg-amber-100 md:hover:text-amber-500 active:bg-amber-100 cursor-pointer`}
              onClick={() => clickFoodCategory("現在営業中")}
            >
              現在営業中
            </div>
          </div>

          <h3 className={`${noto_sans_jp.className} px-3 font-semibold mt-6 `}>
            ソート
          </h3>
          <div className=" px-3 flex flex-wrap gap-4 mt-6">
            <FoodRadioButton
              onClick={() => handleSortByHighPrice()}
              name="高い順"
            />
            <FoodRadioButton
              onClick={() => handleSortByLowPrice()}
              name="安い順"
            />
            <FoodRadioButton
              onClick={() => handleSortByRecommendation()}
              name="おすすめ順"
            />
          </div>

          <div className="flex flex-wrap mt-4">
            {/* アイテムエリア */}
            {foodItems.map((item, index) => {
              if (
                selectedFoodCategories.some((category) =>
                  item.categories.includes(category),
                ) &&
                (!isOpenNow || isOpen(item))
              ) {
                return (
                  <FoodItem
                    key={index}
                    dish={item.dish}
                    restaurant={item.restaurant}
                    comment={item.comment}
                    url={item.url}
                    instagram={item.instagram}
                    link={item.link}
                    price={item.price}
                    twitter={item.twitter}
                    openingHours={item.openingHours}
                  ></FoodItem>
                );
              }
              return null;
            })}
          </div>
        </div>
      </div>
    </div>
  );
});

interface FoodItemProps {
  dish: string;
  restaurant: string;
  url: string;
  comment: string;
  instagram: string;
  link: string;
  price: Number;
  twitter: string;
  openingHours: {
    [day: string]: string;
  };
}

export default FoodClientPage;
