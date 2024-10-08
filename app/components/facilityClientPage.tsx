import React from "react";
import Image from "next/image";
import { zen_maru_gothic, noto_sans_jp } from "../fonts";
import Link from "next/link";
const FacilityPage = () => {
  return (
    <div className="bg-green-700 ">
      <div className="bg-white rounded-b-3xl">
        <div className="w-11/12 mx-auto pb-12">
          <div className="mt-10 md:flex">
            <div className="md:w-1/2 hover:opacity-75 hover:cursor-pointer">
              <Link
                href="https://fesan-jp.com/"
                rel="noopener noreferrer external"
                target="_blank"
              >
                <Image
                  className="rounded-xl w-full  mb-4"
                  src="https://i.gyazo.com/a2d845d90ec71197f21acbcd0cd9216e.jpg"
                  alt="盛岡駅ビルフェザンの写真"
                  width={600}
                  height={800}
                />
              </Link>
            </div>
            <div className="md:ml-12 mt-10 md:mt-0 md:w-1/2">
              <h2
                className={`font-bold lg:text-3xl text-2xl  ${zen_maru_gothic.className} text-yellow-900`}
              >
                盛岡駅ビル フェザン
              </h2>
              <p
                className={`mt-6 leading-loose ${noto_sans_jp.className} font-semibold text-gray-700 tracking-wide`}
              >
                ファッション、雑貨、サービスはもちろん、岩手の魅力がたくさん詰まった食料品、お土産、レストランなど、160の専門店が一堂に集結した盛岡駅直結の商業施設です。
                <br />
              </p>
            </div>
          </div>
          <div className="mt-20 flex flex-col-reverse md:flex-row">
            <div className="md:mr-12 mt-10 md:mt-0 md:w-1/2">
              <h2
                className={`font-bold lg:text-3xl text-2xl  ${zen_maru_gothic.className} text-yellow-900`}
              >
                クロステラス盛岡
              </h2>
              <p
                className={`mt-6 leading-loose ${noto_sans_jp.className} font-semibold text-gray-700 tracking-wide`}
              >
                盛岡の大通の入り口に建てられ、
                1〜2階がショップフロアとなり、産直売り場「賢治の大地館」にて岩手産の食品や農作物等が販売されている。
                <br />
                2階にはアパレルショップと100円ショップセリア、道路側には飲食店が入居している。
              </p>
            </div>
            <div className="md:w-1/2 hover:opacity-75 hover:cursor-pointer">
              <Link
                href="https://crossterrace.jp/"
                rel="noopener noreferrer external"
                target="_blank"
              >
                <Image
                  className="rounded-xl w-full  mb-4"
                  src="https://i.gyazo.com/dc4cbdd6df2d21ef8f9eb94237163c51.png"
                  alt="クロステラス盛岡の写真"
                  width={600}
                  height={800}
                />
              </Link>
            </div>
          </div>
          {/* くぎり */}
          <div className="mt-10 md:flex">
            <div className="md:w-1/2 hover:opacity-75 hover:cursor-pointer">
              <Link
                href="https://morioka-buscenter.jp/"
                rel="noopener noreferrer"
                target="_blank"
              >
                <Image
                  className="rounded-xl w-full  mb-4"
                  src="https://i.gyazo.com/3bdf8089597443ec7f7429287e2888ad.png"
                  alt="盛岡バスセンターの写真"
                  width={600}
                  height={800}
                />
              </Link>
            </div>
            <div className="md:ml-12 mt-10 md:mt-0 md:w-1/2">
              <h2
                className={`font-bold lg:text-3xl text-2xl  ${zen_maru_gothic.className} text-yellow-900`}
              >
                盛岡バスセンター
              </h2>
              <p
                className={`mt-6 leading-loose ${noto_sans_jp.className} font-semibold text-gray-700 tracking-wide`}
              >
                バスターミナルだけでなく、飲食店,カフェやホテル,サウナなども充実した施設。
                <br />
              </p>
            </div>
          </div>
          <div className="mt-20 flex flex-col-reverse md:flex-row">
            <div className="md:mr-12 mt-10 md:mt-0 md:w-1/2">
              <h2
                className={`font-bold lg:text-3xl text-2xl  ${zen_maru_gothic.className} text-yellow-900`}
              >
                monaka
              </h2>
              <p
                className={`mt-6 leading-loose ${noto_sans_jp.className} font-semibold text-gray-700 tracking-wide`}
              >
                「盛岡らしさ」のまんなかに がキャッチフレーズ
                <br />
                2024年7月にオープンしたばかり
              </p>
            </div>
            <div className="md:w-1/2 hover:opacity-75 hover:cursor-pointer">
              <Link
                href="https://monaka-morioka.com/"
                rel="noopener noreferrer external"
                target="_blank"
              >
                <Image
                  className="rounded-xl w-full  mb-4"
                  src="https://i.gyazo.com/7d66d50edf24955026f60229ab1720f1.jpg"
                  alt="monakaの写真"
                  width={600}
                  height={800}
                />
              </Link>
            </div>
          </div>
          <div className="mt-10 md:flex">
            <div className="md:w-1/2 hover:opacity-75 hover:cursor-pointer">
              <Link
                href="https://www.kawatoku.com/"
                rel="noopener noreferrer external"
                target="_blank"
              >
                <Image
                  className="rounded-xl w-full  mb-4"
                  src="https://i.gyazo.com/b4c3584ba891e4b97f635f64e5636bed.png"
                  alt="川徳百貨店の写真"
                  width={600}
                  height={800}
                />
              </Link>
            </div>
            <div className="md:ml-12 mt-10 md:mt-0 md:w-1/2">
              <h2
                className={`font-bold lg:text-3xl text-2xl  ${zen_maru_gothic.className} text-yellow-900`}
              >
                川徳百貨店
              </h2>
              <p
                className={`mt-6 leading-loose ${noto_sans_jp.className} font-semibold text-gray-700 tracking-wide`}
              >
                盛岡市にある老舗百貨店。ロフトやサンリオショップなどもある。
                <br />
              </p>
            </div>
          </div>
          <div className="mt-20 flex flex-col-reverse md:flex-row">
            <div className="md:mr-12 mt-10 md:mt-0 md:w-1/2">
              <h2
                className={`font-bold lg:text-3xl text-2xl  ${zen_maru_gothic.className} text-yellow-900`}
              >
                MOSS
              </h2>
              <p
                className={`mt-6 leading-loose ${noto_sans_jp.className} font-semibold text-gray-700 tracking-wide`}
              >
                Morioka Oodori Shopping & Screenの略からとられている。
                <br />
                映画館フォーラム盛岡、ジュンク堂書店などが入った商業施設
                <br />
                1Fには盛岡市を本社とする会社が展開するスーパーマーケットが入っている。
              </p>
            </div>
            <div className="md:w-1/2 hover:opacity-75 hover:cursor-pointer">
              <Link
                href="https://moss-build.com/"
                rel="noopener noreferrer external"
                target="_blank"
              >
                <Image
                  className="rounded-xl w-full  mb-4"
                  src="https://i.gyazo.com/c7fd9dc5b6a345b321b34946e0bdfc5b.jpg"
                  alt="MOSSの写真"
                  width={600}
                  height={800}
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FacilityPage;
