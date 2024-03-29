/// <reference lib="dom" />
/// <reference lib="dom.iterable" />

import { render, screen } from "@testing-library/react";
import { describe, expect, it, mock } from "bun:test";
import SchoolList from "../../components/schools/SchoolList";
import { Outlet, RouterProvider, createMemoryRouter } from "react-router-dom";
import type { selections } from "../../declarations";

const testSelections: selections = {
	schoolName: "",
	schoolId: "9",
	setsumeikaiDate: undefined,
	setsumeikaiId: "0",
};

describe("School List", () => {
	const router = createMemoryRouter([
		{
			path: "/",
			element: (
				<Outlet
					context={{
						schools: testGetSchools(),
						selections: testSelections,
						setSelections: mock(() => {}),
					}}
				/>
			),
			children: [
				{
					index: true,
					element: <SchoolList />,
					loader: testGetSchools,
				},
			],
		},
	]);

	function renderSchoolList() {
		render(<RouterProvider router={router} />);
	}

	it("displays link for each school in passed list", () => {
		renderSchoolList();
		const cardCount = screen.getAllByRole("link").length;

		expect(cardCount).toBe(testGetSchools().length);
	});
});

function testGetSchools() {
	return [
		{
			id: "1",
			name: "馬込",
			address: "〒143-0021 東京都大田区北馬込2-28-4Compass Magome 3階",
			phone: "1111-111-111",
			hiragana: [""],
			busAreas: ["大田区", "品川区"],
			nearbyStations: ["馬込駅"],
		},
		{
			id: "2",
			name: "長原",
			address: "〒145-0064 東京都大田区上池台1-14-1明伸ビル1F",
			phone: "1111-111-111",
			hiragana: [""],
			busAreas: ["大田区", "品川区", "目黒区"],
			nearbyStations: ["長原駅"],
		},
		{
			id: "3",
			name: "大森",
			address: "〒143-0016 東京都大田区大森北1-17-2 大森センタービル3F",
			phone: "0120-378-056",
			hiragana: [""],
			busAreas: ["大田区", "品川区"],
			nearbyStations: ["大森駅"],
		},
		{
			id: "4",
			name: "池上",
			address: "〒146-0082 東京都大田区池上3-32-17ツインウッドスクエアＣ館 2F",
			phone: "0120-378-056",
			hiragana: [""],
			busAreas: ["大田区"],
			nearbyStations: ["池上駅"],
		},
		{
			id: "5",
			name: "蒲田駅前",
			address: "〒144-0052 東京都大田区蒲田5-46-1秋元ビル",
			phone: "0120-378-056",
			hiragana: [""],
			busAreas: ["大田区"],
			nearbyStations: ["蒲田駅"],
		},
		{
			id: "6",
			name: "田園調布雪谷",
			address: "〒145-0071 東京都大田区田園調布1-5-2大谷ビル2F",
			phone: "0120-378-056",
			hiragana: [""],
			busAreas: ["世田谷区", "大田区", "目黒区"],
			nearbyStations: ["多摩川駅", "雪が谷大塚駅"],
		},
		{
			id: "7",
			name: "りんかい東雲",
			address:
				"〒135-0062 東京都江東区東雲２丁目１−２２ キャッスルビル東雲 4階",
			phone: "0120-378-056",
			hiragana: [""],
			busAreas: ["江東区", "港区"],
			nearbyStations: ["りんかい東雲駅"],
		},
		{
			id: "8",
			name: "大島",
			address: "〒136-0072 東京都江東区大島7-38−34 大島岡田ビル１Ｆ",
			phone: "0120-378-056",
			hiragana: [""],
			busAreas: ["大田区", "品川区"],
			nearbyStations: ["大島駅"],
		},
		{
			id: "9",
			name: "門前仲町",
			address: "〒135-0047 東京都江東区富岡1-18-15大島ビル 2F",
			phone: "0120-378-056",
			hiragana: [""],
			busAreas: ["大田区", "品川区"],
			nearbyStations: ["門前仲町駅"],
		},
		{
			id: "10",
			name: "東陽町",
			address: "〒136-0076 東京都江東区南砂2-25-7",
			phone: "0120-378-056",
			hiragana: [""],
			busAreas: ["大田区", "品川区"],
			nearbyStations: ["東陽町駅"],
		},
		{
			id: "11",
			name: "大井",
			address: "〒140-0011 東京都品川区東大井1-3-1",
			phone: "0120-378-056",
			hiragana: [""],
			busAreas: ["大田区", "品川区"],
			nearbyStations: ["大井駅"],
		},
		{
			id: "12",
			name: "北品川",
			address: "〒140-0001 東京都品川区北品川３－６－１３ 北品川サンハイツ１Ｆ",
			phone: "0120-378-056",
			hiragana: [""],
			busAreas: ["大田区", "品川区"],
			nearbyStations: ["北品川駅"],
		},
		{
			id: "13",
			name: "戸越",
			address: "〒142-0041 東京都品川区戸越3-4-18ゴールドステージビル3F",
			phone: "0120-378-056",
			hiragana: [""],
			busAreas: ["大田区", "品川区"],
			nearbyStations: ["戸越駅"],
		},
		{
			id: "14",
			name: "等々力",
			address: "〒158-0082 東京都世田谷区等々力4-2-11 サムズガーデン 1F",
			phone: "0120-378-056",
			hiragana: [""],
			busAreas: ["大田区", "品川区"],
			nearbyStations: ["等々力駅"],
		},
		{
			id: "15",
			name: "川口",
			address: "〒332‐0016 埼玉県川口市幸町3‐7‐22　ML21ビル ２F ",
			phone: "0120-378-056",
			hiragana: [""],
			busAreas: ["大田区", "品川区"],
			nearbyStations: ["川口駅"],
		},
		{
			id: "16",
			name: "成城",
			address: "〒156-0055 東京都世田谷区船橋2-8-2 ハウジングコート千歳船橋",
			phone: "0120-378-056",
			hiragana: [""],
			busAreas: ["大田区", "品川区"],
			nearbyStations: ["成城駅"],
		},
		{
			id: "17",
			name: "四谷",
			address: "〒160-0004 東京都新宿区四谷3-5-3山本ビル 2F-3F",
			phone: "0120-378-056",
			hiragana: [""],
			busAreas: ["大田区", "品川区"],
			nearbyStations: ["四谷駅"],
		},
		{
			id: "18",
			name: "早稲田",
			address: "〒162-0042 東京都新宿区早稲田町67番地早稲田クローバービル１Ｆ",
			phone: "0120-378-056",
			hiragana: [""],
			busAreas: ["大田区", "品川区"],
			nearbyStations: ["早稲田駅"],
		},
		{
			id: "19",
			name: "晴海",
			address: "〒104-0053 東京都中央区晴海1-1-28 キャナルハウス 3F",
			phone: "0120-378-056",
			hiragana: [""],
			busAreas: ["大田区", "品川区"],
			nearbyStations: ["晴海駅"],
		},
		{
			id: "20",
			name: "赤羽",
			address: "〒114-0032 東京都北区中十条4-17-1コトニア赤羽1F",
			phone: "0120-378-056",
			hiragana: [""],
			busAreas: ["大田区", "品川区"],
			nearbyStations: ["赤羽駅"],
		},
		{
			id: "21",
			name: "池袋",
			address: "〒170‐0012　 東京都豊島区上池袋4‐1‐1　上池袋ビル",
			phone: "0120-378-056",
			hiragana: [""],
			busAreas: ["大田区", "品川区"],
			nearbyStations: ["池袋駅"],
		},
		{
			id: "22",
			name: "鷺宮",
			address: "〒165-0032 東京都中野区鷺宮４丁目４−２４ 2F",
			phone: "0120-378-056",
			hiragana: [""],
			busAreas: ["大田区", "品川区"],
			nearbyStations: ["鷺宮駅"],
		},
		{
			id: "23",
			name: "三鷹",
			address: "〒181-0013 東京都三鷹市下連雀3-31−2シルクロードふじビル 1F",
			phone: "0120-378-056",
			hiragana: [""],
			busAreas: ["大田区", "品川区"],
			nearbyStations: ["三鷹駅"],
		},
		{
			id: "24",
			name: "南町田グランベリーパーク",
			address: "〒194-0004 東京都町田市鶴間3-3-1南町田グランベリーパーク",
			phone: "0120-378-056",
			hiragana: [""],
			busAreas: ["大田区", "品川区"],
			nearbyStations: ["南町田グランベリーパーク駅"],
		},
		{
			id: "25",
			name: "武蔵新城",
			address:
				"〒211-0045 神奈川県川崎市中原区上新城２丁目８−７　武蔵新城センタービル 3階",
			phone: "0120-378-056",
			hiragana: [""],
			busAreas: ["大田区", "品川区"],
			nearbyStations: ["武蔵新城駅"],
		},
		{
			id: "26",
			name: "武蔵小杉",
			address: "〒211-0016 神奈川県川崎市中原区市ノ坪232",
			phone: "0120-378-056",
			hiragana: [""],
			busAreas: ["大田区", "品川区"],
			nearbyStations: ["武蔵小杉駅"],
		},
		{
			id: "27",
			name: "溝の口",
			address: "〒213-0002 神奈川県川崎市高津区二子3-33-20",
			phone: "0120-378-056",
			hiragana: [""],
			busAreas: ["大田区", "品川区"],
			nearbyStations: ["溝の口駅"],
		},
		{
			id: "28",
			name: "新川崎",
			address: "〒212-0053 神奈川県川崎市幸区下平間290番地日光第一ビル2F",
			phone: "0120-378-056",
			hiragana: [""],
			busAreas: ["大田区", "品川区"],
			nearbyStations: ["新川崎駅"],
		},
		{
			id: "29",
			name: "矢向",
			address: "〒230-0001 神奈川県横浜市鶴見区矢向６－３－１",
			phone: "0120-378-056",
			hiragana: [""],
			busAreas: ["大田区", "品川区"],
			nearbyStations: ["矢向駅"],
		},
		{
			id: "30",
			name: "天王町",
			address: "〒240-0003 神奈川県横浜市保土ケ谷区天王町2-37-1秋山ビル 2F",
			phone: "0120-378-056",
			hiragana: [""],
			busAreas: ["大田区", "品川区"],
			nearbyStations: ["天王町駅"],
		},
		{
			id: "31",
			name: "二俣川",
			address: "〒241-0821 神奈川県横浜市旭区二俣川2-85−3二俣川NKビル 2F",
			phone: "0120-378-056",
			hiragana: [""],
			busAreas: ["大田区", "品川区"],
			nearbyStations: ["二俣川駅"],
		},
		{
			id: "32",
			name: "ソコラ南行徳",
			address: "〒272-0138 千葉県市川市南行徳２丁目２０−２５SOCOLA南行徳２F",
			phone: "0120-378-056",
			hiragana: [""],
			busAreas: ["大田区", "品川区"],
			nearbyStations: ["ソコラ南行徳駅"],
		},
		{
			id: "33",
			name: "新浦安",
			address: "〒279-0014 千葉県浦安市明海4丁目1番1号ニューコースト新浦安 3F",
			phone: "0120-378-056",
			hiragana: [""],
			busAreas: ["大田区", "品川区"],
			nearbyStations: ["新浦安駅"],
		},
		{
			id: "41",
			name: "大倉山",
			address: "〒222-0032 神奈川県横浜市港北区大豆戸町80",
			phone: "0120-378-056",
			hiragana: [""],
			busAreas: ["横浜市港北区", "鶴見区"],
			nearbyStations: ["大倉山駅", "菊名駅"],
		},
		{
			id: "43",
			name: "川口",
			address: "〒332‐0016 埼玉県川口市幸町3‐7‐22　ML21ビル ２F ",
			phone: "0120-378-056",
			hiragana: [""],
			busAreas: ["川口駅近くの小学校", "保育園など"],
			nearbyStations: ["川口駅"],
		},
	];
}
