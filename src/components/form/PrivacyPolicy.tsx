import { useEffect, useRef, useState } from "react";

interface props {
  policyAccepted: boolean;
  setPolicyAccepted: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function PrivacyPolicy({
  policyAccepted,
  setPolicyAccepted,
}: props) {
  const [displayModal, setDisplayModal] = useState(false);
  const modalRef = useRef<HTMLDialogElement | null>(null);
  useEffect(() => {
    if (displayModal) {
      modalRef.current?.showModal();
    } else {
      modalRef.current?.close();
    }
  }, [displayModal]);

  return (
    <div className="flex flex-col gap-2">
      <div className="flex justify-center items-center gap-2">
        <input
          type="checkbox"
          name="privacy_policy"
          id="privacy_policy"
          checked={policyAccepted}
          required
          onChange={() => setPolicyAccepted(!policyAccepted)}
          className="appearance-none rounded border-2 border-ku-faded w-[14px] h-[14px] checked:border-ku-orange checked:before:bg-ku-orange checked:before:w-[10px] checked:before:h-[10px] flex items-center justify-center"
        />
        <label
          htmlFor="privacy_policy"
          className="text-ku-secondary font-semibold text-base"
        >
          個人情報保護方針に同意する
        </label>
      </div>

      <button
        type="button"
        onClick={() => setDisplayModal(true)}
        className="border-button rounded px-2 py-1 font-semibold text-base hover:bg-main-background hover:text-ku-secondary bg-ku-button text-white"
      >
        個人情報保護方針を見る
      </button>

      <dialog
        ref={modalRef}
        onClose={() => setDisplayModal(false)}
        className="z-50 fixed inset-0 h-screen w-screen p-10 rounded text-start bg-main-background backdrop:bg-black backdrop:opacity-75"
      >
        <div className="modal">
          <div className="modal-header flex justify-between items-center text-xl">
            <h2 className="font-semibold">プライバシーポリシー</h2>
            <button
              type="button"
              className="h-5 w-5 flex items-center justify-center p-4 border-button rounded font-semibold text-base text-ku-secondary hover:bg-ku-button hover:text-white"
              onClick={() => setDisplayModal(false)}
            >
              X
            </button>
          </div>
          <div className="modal-content">
            <h5>株式会社P-UP World（ピーアップワールド）</h5>
            <h5>代表取締役社長　中込 正典</h5>
            <br />

            <p>
              株式会社P-UP
              World及びその子会社各社（以下「当社グループ各社」といい、具体的には下表記載の各社をいいます。）は、お客様または利用者の個人情報（生存する個人に関する情報であって、お名前、電子メールアドレス、電話番号、住所その他の記述等により特定の個人を識別できる情報および個人識別符号が含まれる情報。以下「個人情報」といいます。）を含む当社グループ各社が取得したすべての個人情報を安全に保管し、お客様および利用者の意思を尊重した利用・取扱いを行う環境を築き、お客様および利用者からの信頼を頂くとともに、安全でより良いサービスの提供を行い、法令を遵守するとともに、以下の方針に基づき、当社グループ各社が収集し利用するすべての個人情報の適切な取扱いに取り組んでまいります。
            </p>
            <br />

            <ol className="list-decimal">
              <li>個人情報の取得</li>
              <p>
                当社グループ各社は、第２項に定める利用目的のために必要な範囲で、適切かつ公正な手段によって個人情報を取得いたします。
                また、当社グループ各社は、お客様または利用者の個人情報を取得しようとする場合または取得した場合には、その利用目的をお客様または利用者に明示しまたは公表（もしくは通知）いたします。
              </p>
              <br />
              <li>個人情報の利用目的</li>
              <p>
                当社グループ各社は、保有する個人情報を、次の目的で利用いたします。
              </p>
              <ol className="list-disc">
                <li>
                  当社グループ各社が取扱うサービス・商品及びその関連するサービス・商品についての情報の、お客様または利用者及びお取引関係者へのご提供
                </li>
                <li>
                  当社グループ各社のお客様または利用者に対するサービスのご提供
                  キャンペーン・イベントまたはアンケート等のご案内、商品または製品などの発送、料金の計算およびそのご請求
                </li>
                <li>
                  電話、電子メール等を利用してのご連絡、お問い合わせに対するご返答
                </li>
                <li>
                  サービスにおける本人確認、ユーザー登録、サービス向上のための利用状況の調査
                </li>
                <li>
                  当社グループ各社の従業員の個人情報については、雇用及び人事管理
                </li>
                <li>
                  防犯カメラ・録音機の設置及び取得した情報（個人情報を含みます）による防犯・防災
                </li>
                <li>利便性向上及び満足度向上、レイアウトの改善等の店舗運営</li>
              </ol>
              <p></p>
              <br />
              <li>個人情報の共同利用</li>
              <p>
                当社グループ各社は、お客様または利用者からご提供頂いた個人情報（お名前、電子メールアドレス、電話番号、ご住所等の情報及び公開情報等、前項に定める目的の達成に必要な範囲の項目）、ならびに店舗内カメラで取得したお客様または利用者の映像等から得られたデータに基づき統計処理した情報を、前項の目的のため、当社グループ各社と共同利用することがございます。
                個人情報を共同利用する場合、株式会社P-UP
                Worldがその責任において管理します。株式会社P-UP
                Worldの住所および代表者氏名については、こちらをご覧ください。
              </p>
              <br />
              <li>個人情報の第三者への提供</li>
              <p>
                当社グループ各社は、次の各号のいずれかに該当すると認められるときは、個人情報を第三者に提供することがございます。
              </p>
              <ol className="list-disc">
                <li>法令に基づく場合</li>
                <li>
                  人の生命、身体または財産の保護のために必要がある場合であって、本人の同意を得ることが困難であるとき
                </li>
                <li>
                  公衆衛生の向上または児童の健全な育成の推進のために特に必要がある場合であって、本人の同意を得ることが困難であるとき
                </li>
                <li>
                  国の機関若しくは地方公共団体またはその委託を受けた者が法令の定める事務を遂行することに対して協力する必要がある場合であって、本人の同意を得ることにより当該事務の遂行に支障を及ぼすおそれがあるとき
                </li>
                <li>
                  学術研究機関等（大学その他の学術研究を目的とする機関若しくは団体又はそれらに属する者）に個人情報を提供する場合であって、当該学術研究機関等が当該個人情報を学術研究目的で取り扱う必要がある場合（当該個人情報を取り扱う目的の一部が学術研究目的である場合を含み、個人の権利利益を不当に侵害するおそれがある場合を除きます。）
                </li>
              </ol>
              <p></p>
              <br />
              <li>個人情報の管理</li>
              <p>
                当社グループ各社は、お客様また利用者の個人情報の安全管理に関する規程を整備し、必要かつ適切な措置を講ずるとともに個人情報への不正アクセス、紛失、破壊、改ざんおよび漏えい等を防止するため、必要な技術的措置を講じます。また、当社グループ各社は、個人情報保護に関する管理体制の継続的改善のため、計画・実施・監視・要因分析・改善施策実施というプロセスを継続的に運用し、適切な管理体制の維持に努めます。
              </p>
              <br />
              <li>個人情報取扱業務の外部委託</li>
              <p>
                当社グループ各社は、個人情報の取扱いの全部または一部を外部に委託することがあります。この場合、委託先において個人情報の安全管理が図られるよう、法の定めに従い必要かつ適切な監督を行います。
              </p>
              <br />
              <li>個人情報の開示・訂正・利用停止・消去等</li>
              <p>
                お客様または利用者ご本人またはその代理人は、当社グループ各社に対し、当該当社グループ各社の保有個人データの開示（第三者提供記録の開示を含みます。）を求めることができます。ただし、次の各号のいずれかに該当する場合には、当社グループ各社として開示しないことができます。
                <br />
              </p>
              <ol className="list-disc">
                <li>
                  お客様または利用者本人または第三者の生命、身体、財産その他利益を害するおそれがある場合
                </li>
                <li>
                  当社グループ各社の業務の適正な実施に著しい支障を及ぼすおそれがある場合
                </li>
                <li>法令に違反することとなる場合</li>
              </ol>
              <br />
              当社グループ各社は、お客様若しくは利用者ご本人またはその代理人から保有個人データの内容の訂正、追加、削除、第三者への提供の停止を求められたときは、法令に従って、利用目的の達成に必要な範囲内において、遅滞なく調査を行います。その結果に基づき、法令に定める範囲で、当該個人情報の内容の訂正、追加、削除、または第三者への提供の停止を行います。
              <p></p>
              <br />
              <li>プライバシーポリシーに関するお問い合わせ先</li>
              <br />
              <p>
                当社グループ各社が保有する個人情報に関するご連絡、ご要望、お問合せ等は、下記までご連絡ください。
              </p>
              <ol className="list-disc">
                <li>プライバシーポリシーに関するお問い合わせ先</li>
                <li>受付窓口　本社カスタマーセンター</li>
                <li>E‐Mail　　ir@p-up.jp</li>
                <li>受付電話番号　　03-3870- 0099</li>
                <li>
                  受付時間　　平日午前10時から午後6時まで。但し、12月31日から1月3日、システムメンテナンス日を除く。
                </li>
              </ol>
              <p></p>
              <br />
            </ol>

            <p>
              P-UPWorld グループ各社
              <br />
              本ポリシーにおける当社グループ各社は、下表記載の株式会社P-UP World
              グループ各社をいいます。
              <br />
              社名
              <br />
              株式会社P-UP World
              <br />
              株式会社ピーアップ
              <br />
              株式会社Kids-UP
              <br />
              株式会社デライトアップ
              <br />
              株式会社Moto-UP
              <br />
              株式会社Mogu-UP
              <br />
              KauUP株式会社
              <br />
              株式会社P-UPneo
              <br />
              株式会社Back-UP
              <br />
              株式会社P-up Challenge
              <br />
              <br />
              改訂履歴
              <br />
              2020年03月03日　作成
              <br />
              2021年01月05日　改訂
              <br />
              2022年04月04日　改訂
              <br />
              2022年06月06日　改訂
            </p>
          </div>
          <div className="modal-footer flex justify-end items-center">
            <button
              type="button"
              className="border-button flex justify-center items-center text-ku-secondary font-semibold basis-2/5 md:basis-1/4 rounded text-center p-1 hover:bg-ku-button hover:text-white"
              onClick={() => setDisplayModal(false)}
            >
              閉じる
            </button>
          </div>
        </div>
      </dialog>
    </div>
  );
}
