import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card2',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card2.component.html',
  styleUrls: ['./card2.component.css']
})
export class Card2Component {
  offers = [
    {
      imageUrl: 'https://m.media-amazon.com/images/I/41zMvfHW6JL._SX342_SY445_QL70_FMwebp_.jpg',
      altText: 'Liquid Bio fertilizer',
      title: 'Liquid Bio fertilizer',
      description: 'Greenedge Organic Vermiwash, 5 L',
      price: 599,
      link: 'https://www.amazon.in/Plant-Boost-Liquid-Biofertilizer-Organic/dp/B0DDY9ZQ4W'
    },
    {
      imageUrl: 'https://images.unsplash.com/photo-1719932124314-8b6acaf60104?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      altText: 'John Deere Tractors',
      title: 'John Deere Tractors',
      description: 'John Deere 9R Series (400-620 HP)',
      price: 900000,
      link: 'https://www.amazon.in/Centy-Toy-Plastic-Tractor-Miniature/dp/B07CBJ9J3G'
    },
    {
      imageUrl: 'https://5.imimg.com/data5/SELLER/Default/2023/10/349799306/TM/HX/WE/160757351/urea-n46-500x500.jpg',
      altText: 'Urea Fertilizer',
      title: 'Urea Fertilizer',
      description: 'Indogulf Urea, 50kg',
      price: 350,
      link: 'https://www.amazon.in/PREPLE-Fertilizer-Soluble-Vegetables-Production/dp/B0DBDFQKVM/ref=sr_1_1_sspa?crid=2IHTB1I9KEVUR&dib=eyJ2IjoiMSJ9.-aAzZwVDiUBtCNWEiS4oxcJpddHKG4mw_VXdgj7pLG1YEX5POLhfaq9EeJr1dJXBB_sqDTioUyLvjfjCiW0kFgb0_03oR9JV0PmuH44b4uTGaAfdAWTlxL1wgCS5o4TZAx-B5iNE-thJSRx3u9FAr96XdPN-_TlTntT8kGypuUloLQOGtx1QQ9VQFD1aNih9lKN1j69SoL8zD48_qE-tJP7AZ1WfcA6O3d802jZaM1Xa6fMVCg4GcG_MZsqbkOzYh6I6HDhukJb3jvS_MR6RwbQrzfmzjksM6fiol6fQVy4.J4OFQUCtTQv_u9EUYjlXjwFkvc-sCLYf8pTaBEoi9FA&dib_tag=se&keywords=urea&qid=1730868106&sprefix=u%2Caps%2C297&sr=8-1-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&psc=1&smid=AV5TBIOKOJO97'
    },
    {
      imageUrl: 'https://m.media-amazon.com/images/I/51PCcwy2CyL._SX679_.jpg',
      altText: 'Spray Pump',
      title: 'Battery Operated Spray Pump',
      description: 'Battery Operated Garden Sprayer',
      price: 2450,
      link: 'https://www.amazon.in/Balwaan-Krishi-BS-22-Gardening-Sanitization/dp/B09XK5WRFG/ref=sxin_15_pa_sp_search_thematic_sspa?content-id=amzn1.sym.cd33fa60-47cd-49f3-80b8-24b1f0cbef97%3Aamzn1.sym.cd33fa60-47cd-49f3-80b8-24b1f0cbef97&crid=1QW6T4K3D6CLI&cv_ct_cx=spray+pump&dib=eyJ2IjoiMSJ9.pUjMenvH3pJ7BiiURs9MeUTT5KiwBZxLb_UmYDtovXhTkOt9676AtxROb_YTEbyJ-OlRYkcQPUWnOTr9vIcYFw.SjAFgAx1Vuj2nJ5X8pFDCVZhqA_OBFvrPif4p65FRLo&dib_tag=se&keywords=spray+pump&pd_rd_i=B09XK5WRFG&pd_rd_r=0ac2e554-9e08-4943-83e5-c90604b9d8bf&pd_rd_w=lY1vL&pd_rd_wg=EFF8O&pf_rd_p=cd33fa60-47cd-49f3-80b8-24b1f0cbef97&pf_rd_r=N6RCBH0ZXR62BH26JDST&qid=1730868227&sbo=RZvfv%2F%2FHxDF%2BO5021pAnSA%3D%3D&sprefix=spray+pu%2Caps%2C351&sr=1-1-ced4eeeb-b190-41d6-902a-1ecb3fb8b7c4-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9zZWFyY2hfdGhlbWF0aWM&psc=1&smid=AIXX4WUBN6SEA'
    },   {
      imageUrl: 'https://cdn.shopify.com/s/files/1/0722/2059/files/1_d1fd4710-cde7-4cbb-aaa0-f3b62da86ecd.webp?v=1689404260',
      altText: 'Glycel Herbicide',
      title: 'Herbicide',
      description: 'Liquid herbicide for your crops',
      price: 300,
      link: 'https://www.amazon.in/Herbicide-Premium-Essential-Powerful-Removing/dp/B09GYC3VP5/ref=sr_1_1_sspa?crid=8HOCBN4ADZWH&dib=eyJ2IjoiMSJ9.Krio2sboO7L-i8Dt3iTSo-jSbsJno4WfUhce6599fGJdj6dm3Siwo3OxC4yj08BQwCRutXwapai96TFDj-kFZ9EYHS7lJB8f-_Fc3B3j5IzCdp5uuM25CqQ6Fs6LJc3tRbCJ-F_ysO_KJTI4k6041Xm_P_p66Y1S1sZRy9Oo5i0G7pc5K-9x8n6t1HerDcrJrlDfLilQ4yjRJSJ4svtm_nbhEv2mz--3V6z1YNpDPuIrvftN9Bmc-egZXBa6c6sXzCgo8qT1mRVUGlgmeJbLxBqmGGjDb8t7ofg3Kzsx4Uk.LsRqmRmJzJdv4hdiEcsW_g0NZKiBQv6VgwBwtfqJPFU&dib_tag=se&keywords=herbicide&qid=1730868289&s=garden&sprefix=herbicid%2Clawngarden%2C368&sr=1-1-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&th=1'
    },   {
      imageUrl: 'https://agrotohome.com/cdn/shop/files/Fantacplus.png?v=1707902376&width=600',
      altText: 'Growth Promoter',
      title: 'Fantac plus growth promoter',
      description: 'Grow your plants more',
      price: 200,
      link: 'https://www.amazon.in/IFFCO-Urban-Gardens-Fertilizer-Conditioner/dp/B0BK4DZ9CT/ref=sr_1_1_sspa?crid=1DEC09GBPTJOB&dib=eyJ2IjoiMSJ9.RhaZtNuun9AuPcH77a9YVjRKpDdXWN1dUOIW-OgWDf_9BOoC2FC45NJdBqPuliY-8AjW9Az5ZvbjNzQDnwFYx3DYdVvI0xbecr8iKfQMWMZFo-o8_OqC3g18Dsx-d9dSDwfTYgavtdyn2Fp6TrwujlOaTnhHFbcCmMdEzKsFV9rGFYTwaPjLmHWdh3otpprQXuRB2hM4HbsTGTv74riSRgkzTbG1k2AtclGiXF3Rvh9erOleBmJnI4o_Tv_nFqlLuMvG-nThYC44CvLlSH4zLIonSRgfy4Ml7BFsWLJTrmY.vlFnpoG6-g6ecZyEmC9e8G3QSdJTs_XQYJjAN41O-cQ&dib_tag=se&keywords=growth+promoter&qid=1730868338&s=garden&sprefix=growth+promot%2Clawngarden%2C443&sr=1-1-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&psc=1'
    }
  ];

  newArrivals = [
    {
      imageUrl: 'https://image.made-in-china.com/2f0j00WcKVRgPhOkUp/Hot-Selling-Agricultural-Irrigation-Big-Water-Pumps-Diesel-Engine-Water-Centrifugal-Pump.webp',
      altText: 'Water Pumps',
      title: 'Water Pumps',
      description: 'Waterman Super Suction Pump',
      price: 4650,
      link: 'https://www.amazon.in/Crompton-MASTER-PLUS-Residential-Regenerative/dp/B0C77FMM55/ref=sr_1_1_sspa?crid=2NXHYTDPJ92Y5&dib=eyJ2IjoiMSJ9.4StoQfzj6BK3fzCzSs1L1gYF9otc0ev9nNQhU3QDNHKmkRnouIYyApQ64XTyTqqnzL_DRYdwDls_gJzHRferT2xGAI6bXs_MhGGPGEdwQB5TPsdPDMfwInXIaTSHjcCC7DAR_YpBHFYOkInBC_9dy-wwBZZHXRSi1GqtZ2g_EvzNamrwMNkWWTtKhOPcsK5WodTQKhwkDz9DSC_vOE_WLtJhtMyXkcnIVnMqaHuhIuBt8y9frH3-r9UA26tF3pAb-by9jMdFA3g6NVyg3OPFXDNXovxbIP3eW7ppwRDU6UI.rLLLx8BNoroSq-pm2jDYJdbiXYgzNCeKEJOxtNjkbso&dib_tag=se&keywords=water+pumps&qid=1730868376&s=garden&sprefix=water+pump%2Clawngarden%2C275&sr=1-1-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&psc=1'
    },
    {
      imageUrl: 'https://5.imimg.com/data5/SELLER/Default/2024/2/390258448/OY/IM/RK/14136357/rotary-tiller-machine.jpg',
      altText: 'Rotavator',
      title: 'Rotavator',
      description: 'Mahindra Rotavator',
      price: 24999,
      link: 'https://www.amazon.in/Agriona-Rotavator-Rotary-Tiller-Operation/dp/B08HN4VLLB/ref=sr_1_3?crid=2VYA3OGUIK7JO&dib=eyJ2IjoiMSJ9.PiLkzZhfEs6o8L2kBAeywtT93GbeQcAh4y1tcRERMLAfypbFqbpxAcO0sNyxsI3GaTDSCA92ut41baLVh8wGX7XfS8rvWBNmIDBjkqHIbRzUO17xxbIQEqaMFwst_Kj445fMzcM_HnmO7r442Vd5_fE5ELAFU1bvN5cqvigBkCeybl47a_f4LqKCIlKB2f9M6gADLwwAzKn9UNG2nNkNAUzy-inXHfVXsDzj-A2nUGrGypk-pDkwJ2ppDUKBCTXFjbp8Y8ejFsjbjf3JrccnXSfjsZQVZ9wn4oP1Jk-eFAQ.J9SHmZM9ucCbxkgR6soRIYsI_hf0IHKkHIEB4cqi-ss&dib_tag=se&keywords=rotavator&qid=1730868406&s=garden&sprefix=rotaveter%2Clawngarden%2C427&sr=1-3'
    },
    {
      imageUrl: 'https://5.imimg.com/data5/SELLER/Default/2022/12/JH/LC/WI/21755270/vst-pg-50-power-weeder.jpg',
      altText: 'Power Weeder',
      title: 'Power Weeder',
      description: 'Honda Power Weeder',
      price: 55000,
      link: 'https://www.amazon.in/Balwaan-BW-25-Cultivating-Control-Planting/dp/B0972NV656/ref=sr_1_1_sspa?crid=2YK8L8RZOORSK&dib=eyJ2IjoiMSJ9.Wn5SJfd4mg-4nWB4tzwbWKCQmPglsDQc7z4Em1I6DKVX9vhAU_Q9LiepApbnoZOUX8tgfhousj619G6ZIzeMNV7HMTuST8yI3PgzAlg5d3Dxujrw5MAx-JF4DzNmA22gLKBG9dkiVcn5dzRpL2_67Zw6GZQmF-tWa4LNvhnnNhqkZWWTXNhJD16odMXmA9wvvFYcRo_Yt1r0d4V1qv3Eb7yQddp4WE1FXo5IBtNfseF6n3-tjZSMWN4wKaECJ6dSU4UnlquS_gC4OpVC0eky5v_rmFoUq204DgMnNJ055Fg.8fkvyU-W9W3oPck-WKwfzw5hFNnPyCnijJaCfeR61Dw&dib_tag=se&keywords=power+weeder&qid=1730868468&s=garden&sprefix=power+weeder%2Clawngarden%2C388&sr=1-1-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&psc=1'
    },
    {
      imageUrl: 'https://www.deere.com/assets/images/region-4/products/harvesting/r4k010997-rrd-1365x768.jpg',
      altText: 'Farm Harvester',
      title: 'Farm Harvester',
      description: 'Mahindra Farm Harvester',
      price: 1800000,
      link: 'https://www.amazon.in/fisca-Control-Harvester-Tractor-Combine/dp/B0C2TZPFXF/ref=sr_1_19?dib=eyJ2IjoiMSJ9.lu-8FVAuGg0ULNMzQm466jA-ZzlIvQj4vDpz1zacd_R7IitUxBqEwYyPPGM82oLcy6J0OoAskc5ycH93AuBmWZNdZwxJJSbwT7XcsfKpd2UppwEjVrkWalz0rta4PgDny32-zMtGeCxIOvJLOLqa_Bf8ueELZLnJ-At74rcVl7uZ2qx016COeHttvKDXHMT6JZ0MW-RoP92HTP7idcRgUPIWPBjYMmaeixwjKpOe322qDi2vCjHlf9EMEUWSFekpVf0ktypKbp3JHWSoPhXkRiRn21Ejj62o9X2dz2cdetg.qZfJvKJKilGZXxCqNvfUCgq9TTvL_uREUYxrI4-sr-A&dib_tag=se&keywords=harvester&qid=1730868494&sr=8-19'
    },
    {
      imageUrl: 'https://5.imimg.com/data5/SELLER/Default/2022/4/MB/NF/DS/10929676/hand-cultivator-500x500.jpg',
      altText: 'Iron bar hand cultivator',
      title: 'Hand cultivator',
      description: 'Hand cultivator for you',
      price: 150,
      link: 'https://www.amazon.in/Balwaan-BW-25-Cultivating-Control-Planting/dp/B0972NV656/ref=sr_1_1_sspa?crid=2Z2FLUTI4KTOB&dib=eyJ2IjoiMSJ9.ehAZhVwzxYCq-MjjkF2A79UCOU6wEmcvtQl2gXrC9pC5sjqrnVmVE-cRGvFvV_brmcsLUUar-N8j95wFgB8bm9PS0HCF36gGXbzRLEZqTESJPJSCdXJTyjG6PH776ZXYXubd0d3Bnddx_xQnRTUMNwId4F91XjSRaVIVyitiZZrS8Vix9UjagMKq2bl1tXQpIXIPO2P3c-iysl30b_OyFEG5qbBMeeMAWRjjd1dTUFwqEGW9NGk_SrYGzmBmGtU3R-nYgCpSGulNXp8joDcvGVayn_EXggpxo9IxhaUDYqM.-ZMorySjiLAvlCImjYuBbjxKllhBJ-9yJ_FKPp4hZtI&dib_tag=se&keywords=hand+cultivator+for+agriculture&qid=1730868531&sprefix=hand+cult%2Caps%2C434&sr=8-1-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&psc=1'
    },
    {
      imageUrl: 'https://5.imimg.com/data5/YK/OU/MY-2302245/seed-drill-machine-500x500.jpg',
      altText: 'Seeder',
      title: 'Seeder Machine',
      description: 'Seeder Machine',
      price: 18000,
      link: 'https://www.amazon.in/Agricultural-Handheld-Dispenser-Gardening-Planter/dp/B0CQTHQ7JM/ref=sr_1_2_sspa?crid=2D1Q6KIJ56O05&dib=eyJ2IjoiMSJ9.GgFHj1GcbohcQDWofKLmZcNE1AfynbiZO6Ohl34qpYzNjalYwmMC9xUnty4WQBovkxerzjUIOzhpLlAGo0mOehyIBw7I7n7R4g6c0DBV8ySZsjEQgfpjt2oBiT7iub4g7xgcIG1rsC4suuyR6rboUryJhC-kB9o7BpGvQWy2HtyKYeCGEAxmgXjaDvYxGYlyaExj9LaRK9pM9vg9HzWEEa5fTUwhfy-ogv8Zp5-wQsAMdQfFt4Gnx87vN_sWC4cRk1HfkGgcYC8jFXarhpsRMFWcrR01MkGzGNJS8xZkBLw.dgTUYJYdhjpbm7AWNxwiM-Gdl4l7dbA4PH5sXVqeUlw&dib_tag=se&keywords=seeder+machine+for+agriculture&qid=1730868554&sprefix=seeder%2Caps%2C328&sr=8-2-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&psc=1'
    }
  ];
}
