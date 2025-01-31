import { memo } from "react";
import { useRecoilState } from "recoil";

// memo: 一旦アナログのデータを使用するが、後でAPI返り値が入るように変えること
import { RESTAURANTS } from "../../mock/restaurants";
import { selectedMarkerState } from "../Map";

import styles from "./style.module.css";

const ShopInfoComponent: React.FC = () => {
  const [selectedMarker, setSelectedMarker] =
    useRecoilState(selectedMarkerState);
  return (
    <div className={styles.shop_info}>
      <ul className={styles.shop_list}>
        {RESTAURANTS.map((item, index) => {
          const shopId = `${item.lat}+${item.lng}`;
          return (
            <li
              key={shopId}
              data-state={shopId === selectedMarker}
              className={styles.shop_data}
            >
              <div className={styles.shop_name}>
                {index + 1}.&nbsp;{item.name}
              </div>
              <p className={styles.comment}>
                slackコメントがここに入りますslackコメントがここに入りますslackコメントがここに入りますslackコメントがここに入ります
              </p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export const ShopInfo = memo(ShopInfoComponent);
