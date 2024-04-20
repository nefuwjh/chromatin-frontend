import type { PredictioInfo } from '@/type'

export const listSpecies = () => [
  { name: 'Hordeum_vulgare' },
  { name: 'Triticum_aestivum' },
  { name: 'Sorghum_bicolor' },
  { name: 'Zea_mays' },
  { name: 'Oryza_sativa' },
  { name: 'Solanum_lycopersicum' },
  { name: 'Arabidopsis_thaliana' }
]

export const listSpeciesPart = () => [
  {
    name: 'root',
    sname: 'root'
  },
  {
    name: 'leaf',
    sname: 'leaf'
  },
  {
    name: 'stem',
    sname: 'stem'
  },
  {
    name: 'flower',
    sname: 'flower'
  },
  {
    name: 'fruit',
    sname: 'fruit'
  },
  {
    name: 'embryo',
    sname: 'embryo'
  },
  {
    name: 'seedling',
    sname: 'seedling'
  }
]

export const listPredictionResults = () => tableData

export const look02 = () => [
  [
    { value: 1048, name: 'CH' },
    { value: 735, name: 'CH1' },
    { value: 580, name: 'CH2' },
    { value: 484, name: 'CH3' },
    { value: 300, name: 'CH4' }
  ],
  [
    { value: 48, name: 'H' },
    { value: 75, name: 'H1' },
    { value: 80, name: 'H2' },
    { value: 44, name: 'H3' },
    { value: 30, name: 'H4' }
  ],
  [
    { value: 948, name: 'WH' },
    { value: 75, name: 'WH1' },
    { value: 580, name: 'WH2' },
    { value: 344, name: 'WH3' },
    { value: 1230, name: 'WH4' }
  ]
]
export const tableData: PredictioInfo[] = [
  {
    spid: 'Zea_mays',
    id: '1598746215698745318',
    sequence: 'Zea_mays_flower_20240411',
    time: '2024-04-11 17:53:27',
    count: 6,
    desc: '14号玉米样本，玉米xx病的相关基因区间',
    status: 1
  },
  {
    spid: 'Zea_mays',
    id: '1598746215698745328',
    sequence: 'Zea_mays_root_20240411',
    time: '2024-04-11 17:40:50',
    count: 7,
    desc: '11号玉米样本，玉米xx病的相关基因区间',
    status: 1
  },
  {
    spid: 'Zea_mays',
    id: '1598746215698741328',
    sequence: 'Zea_mays_leaf_20240407',
    time: '2024-04-07 10:26:59',
    count: 5,
    desc: '13号玉米样本，玉米xx病的相关基因区间',
    status: 1
  },
  {
    spid: 'Zea_mays',
    id: '1598746215698841328',
    sequence: 'Zea_mays_root_20240406',
    time: '2024-04-06 13:11:27',
    count: 4,
    desc: '12号玉米样本一些感兴趣的区间',
    status: 1
  },
  {
    spid: 'Zea_mays',
    id: '1598746215698841328',
    sequence: 'Zea_mays_root_20240406',
    time: '2024-04-06 12:43:11',
    count: 5,
    desc: '11号玉米样本，玉米根部xx性状调控的相关基因区间',
    status: 1
  },
  {
    spid: 'Zea_mays',
    id: '1598746215698841328',
    sequence: 'Zea_mays_root_20240403',
    time: '2024-04-03 21:04:22',
    count: 9,
    desc: '15号玉米样本，玉米根部xx性状调控的相关基因区间',
    status: 1
  },
  {
    spid: 'Zea_mays',
    id: '1598746215698841328',
    sequence: 'Zea_mays_leaf_20240403',
    time: '2024-04-03 17:11:54',
    count: 5,
    desc: '11号玉米样本，玉米叶xx性状调控的相关基因区间',
    status: 1
  },
  {
    spid: 'Zea_mays',
    id: '1598746215698841328',
    sequence: 'Zea_mays_stemt_20240403',
    time: '2024-04-03 16:02:17',
    count: 6,
    desc: '6号玉米样本，玉米xx病的相关基因区间',
    status: 1
  },
  {
    spid: 'Zea_mays',
    id: '1598746215698841328',
    sequence: 'Zea_mays_embryo_20240403',
    time: '2024-04-03 15:59:32',
    count: 6,
    desc: '5号玉米样本一些感兴趣的区间',
    status: 1
  },
  {
    spid: 'Zea_mays',
    id: '1598746215698841328',
    sequence: 'Zea_mays_root_20240403',
    time: '2024-04-03 15:45:50',
    count: 5,
    desc: 'xx玉米一些感兴趣的区间',
    status: 1
  },
  {
    spid: 'Triticum_aestivum',
    id: '1598746215698745318',
    sequence: 'Triticum_aestivum_root_20240419',
    time: '2024-04-19 15:44:50',
    count: 10,
    desc: '3号小麦样本一些感兴趣的区间',
    status: 1
  },
  {
    spid: 'Triticum_aestivum',
    id: '1598746215698745328',
    sequence: 'Triticum_aestivum_leaf_20240419',
    time: '2024-04-19 15:37:42',
    count: 5,
    desc: '8号小麦样本，大麦叶xx性状调控的相关基因区间',
    status: 1
  },
  {
    spid: 'Triticum_aestivum',
    id: '1598746215698741328',
    sequence: 'Triticum_aestivum_leaf_20240419',
    time: '2024-04-19 15:35:55',
    count: 8,
    desc: '24号小麦样本，大麦叶xx性状调控的相关基因区间',
    status: 1
  },
  {
    spid: 'Triticum_aestivum',
    id: '1598746215698841328',
    sequence: 'Triticum_aestivum_leaf_20240419',
    time: '2024-04-19 15:22:48',
    count: 5,
    desc: '11号小麦样本，大麦叶xx性状调控的相关基因区间',
    status: 1
  },
  {
    spid: 'Triticum_aestivum',
    id: '1598746215698841328',
    sequence: 'Triticum_aestivum_flower_20240417',
    time: '2024-04-17 09:25:30',
    count: 5,
    desc: '5号小麦样本一些感兴趣的区间',
    status: 1
  },
  {
    spid: 'Triticum_aestivum',
    id: '1598746215698841328',
    sequence: 'Triticum_aestivum_root_20240417',
    time: '2024-04-17 09:18:34',
    count: 4,
    desc: '9号小麦样本，小麦根部xx性状调控的相关基因区间',
    status: 1
  },
  {
    spid: 'Triticum_aestivum',
    id: '1598746215698841328',
    sequence: 'Triticum_aestivum_root_20240413',
    time: '2024-04-13 21:40:50',
    count: 9,
    desc: '17号小麦样本，小麦根部xx性状调控的相关基因区间',
    status: 1
  },
  {
    spid: 'xiaomai',
    id: '1598746215698841328',
    sequence: 'xiaomai_root_2024-03-03T12:21:14',
    count: 5,
    desc: '疾病',
    status: 1
  },
  {
    spid: 'xiaomai',
    id: '1598746215698841328',
    sequence: 'xiaomai_root_2024-03-03T12:21:14',
    count: 5,
    desc: '疾病',
    status: 1
  },
  {
    spid: 'xiaomai',
    id: '1598746215698841328',
    sequence: 'xiaomai_root_2024-03-03T12:21:14',
    count: 5,
    desc: '疾病',
    status: 1
  },
  {
    spid: 'xiaomai',
    id: '1598746215698841328',
    sequence: 'xiaomai_root_2024-03-03T12:21:14',
    count: 5,
    desc: '疾病',
    status: 1
  },
  {
    spid: 'xiaomai',
    id: '1598746215698841328',
    sequence: 'xiaomai_root_2024-03-03T12:21:14',
    count: 5,
    desc: '疾病',
    status: 1
  },
  {
    spid: 'xiaomai',
    id: '1598746215698841328',
    sequence: 'xiaomai_root_2024-03-03T12:21:14',
    count: 5,
    desc: '疾病',
    status: 1
  },
  {
    spid: 'xiaomai',
    id: '1598746215698841328',
    sequence: 'xiaomai_root_2024-03-03T12:21:14',
    count: 5,
    desc: '疾病',
    status: 1
  }
]

export const xiaomai1 = [
  {
    Chr: '1A',
    Start: 459,
    End: 1314,
    Length: 855,
    Prob: 0.6917448043823242,
    result: '是'
  },
  {
    Chr: '1A',
    Start: 5064,
    End: 5336,
    Length: 272,
    Prob: 0.6878650784492493,
    result: '是'
  },
  {
    Chr: '1A',
    Start: 5472,
    End: 5613,
    Length: 141,
    Prob: 0.6708530187606812,
    result: '是'
  },
  {
    Chr: '1A',
    Start: 6085,
    End: 6773,
    Length: 688,
    Prob: 0.3246857523918152,
    result: '否'
  },
  {
    Chr: '1A',
    Start: 10466,
    End: 10779,
    Length: 313,
    Prob: 0.27812203764915466,
    result: '否'
  },
  {
    Chr: '1A',
    Start: 12166,
    End: 12593,
    Length: 427,
    Prob: 0.2525779604911804,
    result: '否'
  },
  {
    Chr: '1A',
    Start: 15450,
    End: 15611,
    Length: 161,
    Prob: 0.2366109937429428,
    result: '否'
  },
  {
    Chr: '1A',
    Start: 20118,
    End: 20610,
    Length: 492,
    Prob: 0.22088925540447235,
    result: '否'
  },
  {
    Chr: '1A',
    Start: 20118,
    End: 20610,
    Length: 492,
    Prob: 0.22088925540447235,
    result: '否'
  },
  {
    Chr: '1A',
    Start: 21033,
    End: 21324,
    Length: 291,
    Prob: 0.20778673887252808,
    result: '否'
  },
  {
    Chr: '1A',
    Start: 24681,
    End: 25601,
    Length: 920,
    Prob: 0.2003025859594345,
    result: '否'
  },
  {
    Chr: '1A',
    Start: 24681,
    End: 25601,
    Length: 920,
    Prob: 0.2003025859594345,
    result: '否'
  },
  {
    Chr: '1A',
    Start: 28484,
    End: 28870,
    Length: 386,
    Prob: 0.19603131711483002,
    result: '否'
  },
  {
    Chr: '1A',
    Start: 31399,
    End: 31729,
    Length: 330,
    Prob: 0.18779464066028595,
    result: '否'
  },
  {
    Chr: '1A',
    Start: 32224,
    End: 32713,
    Length: 489,
    Prob: 0.18199941515922546,
    result: '否'
  },
  {
    Chr: '1A',
    Start: 33189,
    End: 33978,
    Length: 789,
    Prob: 0.17920586466789246,
    result: '否'
  },
  {
    Chr: '1A',
    Start: 33189,
    End: 33978,
    Length: 789,
    Prob: 0.17920586466789246,
    result: '否'
  },
  {
    Chr: '1A',
    Start: 38038,
    End: 38217,
    Length: 179,
    Prob: 0.175650954246521,
    result: '否'
  },
  {
    Chr: '1A',
    Start: 41993,
    End: 42788,
    Length: 795,
    Prob: 0.16873694956302643,
    result: '否'
  },
  {
    Chr: '1A',
    Start: 47028,
    End: 47396,
    Length: 368,
    Prob: 0.16873694956302643,
    result: '否'
  },
  {
    Chr: '1A',
    Start: 48410,
    End: 48751,
    Length: 341,
    Prob: 0.1611326038837433,
    result: '否'
  },
  {
    Chr: '1A',
    Start: 49987,
    End: 51250,
    Length: 1263,
    Prob: 0.16287851333618164,
    result: '否'
  }
]

export const shuidao1 = [
  {
    Chr: '1',
    Start: 927,
    End: 1209,
    Length: 282,
    Prob: 0.934393,
    result: '是'
  },
  {
    Chr: '1',
    Start: 10583,
    End: 11366,
    Length: 783,
    Prob: 1,
    result: '是'
  },
  {
    Chr: '1',
    Start: 27061,
    End: 27196,
    Length: 135,
    Prob: 0.927837,
    result: '是'
  },
  {
    Chr: '1',
    Start: 34820,
    End: 35144,
    Length: 324,
    Prob: 0.495069,
    result: '否'
  },
  {
    Chr: '1',
    Start: 58271,
    End: 58513,
    Length: 242,
    Prob: 0.98273,
    result: '是'
  },
  {
    Chr: '1',
    Start: 62928,
    End: 63133,
    Length: 205,
    Prob: 0.760455,
    result: '是'
  },
  {
    Chr: '1',
    Start: 72683,
    End: 72856,
    Length: 173,
    Prob: 0.999338,
    result: '是'
  },
  {
    Chr: '1',
    Start: 89413,
    End: 89902,
    Length: 489,
    Prob: 0.033292,
    result: '否'
  },
  {
    Chr: '1',
    Start: 91271,
    End: 91707,
    Length: 436,
    Prob: 0.985151,
    result: '是'
  },
  {
    Chr: '1',
    Start: 92062,
    End: 92196,
    Length: 134,
    Prob: 0.269055,
    result: '否'
  },
  {
    Chr: '1',
    Start: 93775,
    End: 93912,
    Length: 137,
    Prob: 0.887512,
    result: '是'
  },
  {
    Chr: '1',
    Start: 101827,
    End: 102306,
    Length: 479,
    Prob: 1,
    result: '是'
  },
  {
    Chr: '1',
    Start: 103268,
    End: 103405,
    Length: 137,
    Prob: 0.997382,
    result: '是'
  },
  {
    Chr: '1',
    Start: 106866,
    End: 107002,
    Length: 136,
    Prob: 0.990962,
    result: '是'
  },
  {
    Chr: '1',
    Start: 107760,
    End: 108017,
    Length: 257,
    Prob: 0.995582,
    result: '是'
  },
  {
    Chr: '1',
    Start: 115314,
    End: 115469,
    Length: 155,
    Prob: 0.999975,
    result: '是'
  },
  {
    Chr: '1',
    Start: 134133,
    End: 134435,
    Length: 302,
    Prob: 0.165262,
    result: '否'
  },
  {
    Chr: '1',
    Start: 141574,
    End: 142076,
    Length: 502,
    Prob: 0.999998,
    result: '是'
  },
  {
    Chr: '1',
    Start: 145369,
    End: 145639,
    Length: 270,
    Prob: 0.999623,
    result: '是'
  },
  {
    Chr: '1',
    Start: 147894,
    End: 148154,
    Length: 260,
    Prob: 0.995927,
    result: '是'
  }
]
