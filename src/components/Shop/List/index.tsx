import { LocationSelect } from './Filter/LocationSelect'
import { IndustrySelect } from './Filter/IndustrySelect'
import { AreaSelect } from './Filter/AreaSelect'
import { RentSelect } from './Filter/RentSelect'
import { TypeSelect } from './Filter/TypeSelect'
import { SourceSelect } from './Filter/SourceSelect'

const mockList = [
  {
    image_list: [
      'https://pic1.58cdn.com.cn/anjuke_58/c231929ff3ff17fef553eb085507efbb',
      'https://pic1.58cdn.com.cn/anjuke_58/c231929ff3ff17fef553eb085507efbb',
      'https://pic1.58cdn.com.cn/anjuke_58/c231929ff3ff17fef553eb085507efbb',
    ],
    title: '(转让)歆久未央区大明宫万达每一天便利店菜鸟驿站',
    type: '写字楼配套',
    status: '经营中',
    industry: '餐饮美食',
    area: 100,
    is_frontage: 1,
    location: '未央区',
    location_detail: '万达广场（大明宫店）',
    assets: ['客梯', '货梯', '中央空调'],
  },
]

// export const ShopList = () => {
//   return (
//     <div>
//       <div className="p-5 mb-5 bg-white rounded">
//         <LocationSelect />
//         <IndustrySelect />
//         <AreaSelect />
//         <RentSelect />
//         <TypeSelect />
//         <SourceSelect />
//       </div>
//       <div className="w-full">
//         {list.map(
//           ({
//             id,
//             logo = '',
//             title,
//             industryLabel,
//             userGroupLabel,
//             createAtLabel,
//             updatedAtLabel,
//           }: any) => {
//             return (
//               <Item
//                 key={id}
//                 logo={logo}
//                 title={title}
//                 industry={industryLabel}
//                 userGroup={userGroupLabel}
//                 createAt={createAtLabel}
//                 updateAt={updatedAtLabel}
//               />
//             )
//           },
//         )}
//       </div>
//     </div>
//   )
// }
