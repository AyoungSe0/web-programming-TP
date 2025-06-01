const BLOCK_TYPES = {
  NORMAL: "일반",
  GLASS: "유리창",
  METAL: "철프레임",
  TIRE: "타이어",
  FUEL: "연료통",
  LIGHT: "라이트",

  ITEM_COOLER: "냉각제",
  ITEM_CUTTER: "고출력 커터",
  // ITEM_BARRIER: "차단막",
  ITEM_GUIDE: "유도로봇팔",
};

const levelBlockLayouts = {
  1: [
      { x: 463, y: 99, type: BLOCK_TYPES.LIGHT },
      { x: 468, y: 99, type: BLOCK_TYPES.LIGHT },
      { x: 488, y: 97, type: BLOCK_TYPES.LIGHT },
      { x: 496, y: 97, type: BLOCK_TYPES.LIGHT },
      { x: 516, y: 101, type: BLOCK_TYPES.GLASS },
      { x: 525, y: 104, type: BLOCK_TYPES.GLASS },
      { x: 539, y: 101, type: BLOCK_TYPES.GLASS },
      { x: 554, y: 99, type: BLOCK_TYPES.LIGHT },
      { x: 569, y: 103, type: BLOCK_TYPES.GLASS },
      { x: 581, y: 98, type: BLOCK_TYPES.LIGHT },
      { x: 597, y: 101, type: BLOCK_TYPES.GLASS },
      { x: 608, y: 103, type: BLOCK_TYPES.GLASS },
      { x: 624, y: 96, type: BLOCK_TYPES.GLASS },
      { x: 638, y: 99, type: BLOCK_TYPES.GLASS },
      { x: 458, y: 109, type: BLOCK_TYPES.LIGHT },
      { x: 447, y: 126, type: BLOCK_TYPES.LIGHT },
      { x: 686, y: 130, type: BLOCK_TYPES.LIGHT },
      { x: 428, y: 136, type: BLOCK_TYPES.GLASS },
      { x: 446, y: 142, type: BLOCK_TYPES.GLASS },
      { x: 420, y: 152, type: BLOCK_TYPES.GLASS },
      { x: 428, y: 149, type: BLOCK_TYPES.LIGHT },
      { x: 445, y: 150, type: BLOCK_TYPES.LIGHT },
      { x: 699, y: 153, type: BLOCK_TYPES.LIGHT },
      { x: 405, y: 170, type: BLOCK_TYPES.LIGHT },
      { x: 415, y: 169, type: BLOCK_TYPES.LIGHT },
      { x: 433, y: 171, type: BLOCK_TYPES.LIGHT },
      { x: 445, y: 169, type: BLOCK_TYPES.GLASS },
      { x: 703, y: 168, type: BLOCK_TYPES.LIGHT },
      { x: 718, y: 166, type: BLOCK_TYPES.GLASS },
      { x: 268, y: 183, type: BLOCK_TYPES.LIGHT },
      { x: 281, y: 180, type: BLOCK_TYPES.LIGHT },
      { x: 301, y: 176, type: BLOCK_TYPES.LIGHT },
      { x: 315, y: 183, type: BLOCK_TYPES.LIGHT },
      { x: 326, y: 180, type: BLOCK_TYPES.LIGHT },
      { x: 337, y: 180, type: BLOCK_TYPES.LIGHT },
      { x: 349, y: 176, type: BLOCK_TYPES.LIGHT },
      { x: 364, y: 177, type: BLOCK_TYPES.GLASS },
      { x: 378, y: 176, type: BLOCK_TYPES.GLASS },
      { x: 390, y: 183, type: BLOCK_TYPES.LIGHT },
      { x: 404, y: 176, type: BLOCK_TYPES.LIGHT },
      { x: 419, y: 182, type: BLOCK_TYPES.GLASS },
      { x: 428, y: 177, type: BLOCK_TYPES.LIGHT },
      { x: 444, y: 177, type: BLOCK_TYPES.LIGHT },
      { x: 458, y: 180, type: BLOCK_TYPES.LIGHT },
      { x: 469, y: 182, type: BLOCK_TYPES.GLASS },
      { x: 487, y: 178, type: BLOCK_TYPES.LIGHT },
      { x: 502, y: 176, type: BLOCK_TYPES.GLASS },
      { x: 511, y: 184, type: BLOCK_TYPES.GLASS },
      { x: 523, y: 178, type: BLOCK_TYPES.GLASS },
      { x: 542, y: 182, type: BLOCK_TYPES.GLASS },
      { x: 557, y: 183, type: BLOCK_TYPES.GLASS },
      { x: 564, y: 183, type: BLOCK_TYPES.LIGHT },
      { x: 581, y: 177, type: BLOCK_TYPES.GLASS },
      { x: 594, y: 181, type: BLOCK_TYPES.GLASS },
      { x: 604, y: 184, type: BLOCK_TYPES.GLASS },
      { x: 619, y: 179, type: BLOCK_TYPES.LIGHT },
      { x: 634, y: 178, type: BLOCK_TYPES.GLASS },
      { x: 643, y: 180, type: BLOCK_TYPES.LIGHT },
      { x: 659, y: 180, type: BLOCK_TYPES.LIGHT },
      { x: 674, y: 180, type: BLOCK_TYPES.LIGHT },
      { x: 692, y: 182, type: BLOCK_TYPES.LIGHT },
      { x: 703, y: 180, type: BLOCK_TYPES.GLASS },
      { x: 714, y: 179, type: BLOCK_TYPES.LIGHT },
      { x: 259, y: 194, type: BLOCK_TYPES.GLASS },
      { x: 273, y: 192, type: BLOCK_TYPES.GLASS },
      { x: 283, y: 193, type: BLOCK_TYPES.GLASS },
      { x: 296, y: 193, type: BLOCK_TYPES.LIGHT },
      { x: 315, y: 191, type: BLOCK_TYPES.GLASS },
      { x: 326, y: 192, type: BLOCK_TYPES.GLASS },
      { x: 338, y: 198, type: BLOCK_TYPES.LIGHT },
      { x: 354, y: 190, type: BLOCK_TYPES.LIGHT },
      { x: 363, y: 191, type: BLOCK_TYPES.GLASS },
      { x: 377, y: 196, type: BLOCK_TYPES.GLASS },
      { x: 391, y: 196, type: BLOCK_TYPES.LIGHT },
      { x: 403, y: 191, type: BLOCK_TYPES.GLASS },
      { x: 418, y: 197, type: BLOCK_TYPES.LIGHT },
      { x: 432, y: 193, type: BLOCK_TYPES.GLASS },
      { x: 443, y: 197, type: BLOCK_TYPES.GLASS },
      { x: 457, y: 196, type: BLOCK_TYPES.LIGHT },
      { x: 468, y: 198, type: BLOCK_TYPES.GLASS },
      { x: 483, y: 198, type: BLOCK_TYPES.LIGHT },
      { x: 503, y: 197, type: BLOCK_TYPES.LIGHT },
      { x: 517, y: 191, type: BLOCK_TYPES.GLASS },
      { x: 527, y: 195, type: BLOCK_TYPES.GLASS },
      { x: 543, y: 195, type: BLOCK_TYPES.LIGHT },
      { x: 549, y: 190, type: BLOCK_TYPES.GLASS },
      { x: 570, y: 190, type: BLOCK_TYPES.LIGHT },
      { x: 577, y: 192, type: BLOCK_TYPES.LIGHT },
      { x: 590, y: 193, type: BLOCK_TYPES.LIGHT },
      { x: 610, y: 192, type: BLOCK_TYPES.GLASS },
      { x: 619, y: 193, type: BLOCK_TYPES.LIGHT },
      { x: 637, y: 198, type: BLOCK_TYPES.LIGHT },
      { x: 647, y: 194, type: BLOCK_TYPES.LIGHT },
      { x: 660, y: 197, type: BLOCK_TYPES.LIGHT },
      { x: 670, y: 192, type: BLOCK_TYPES.LIGHT },
      { x: 684, y: 197, type: BLOCK_TYPES.GLASS },
      { x: 700, y: 193, type: BLOCK_TYPES.LIGHT },
      { x: 718, y: 193, type: BLOCK_TYPES.LIGHT },
      { x: 728, y: 195, type: BLOCK_TYPES.LIGHT },
      { x: 741, y: 197, type: BLOCK_TYPES.LIGHT },
      { x: 261, y: 210, type: BLOCK_TYPES.FUEL },
      { x: 270, y: 206, type: BLOCK_TYPES.FUEL },
      { x: 281, y: 211, type: BLOCK_TYPES.METAL },
      { x: 298, y: 206, type: BLOCK_TYPES.FUEL },
      { x: 315, y: 209, type: BLOCK_TYPES.FUEL },
      { x: 323, y: 207, type: BLOCK_TYPES.FUEL },
      { x: 340, y: 207, type: BLOCK_TYPES.METAL },
      { x: 353, y: 208, type: BLOCK_TYPES.METAL },
      { x: 362, y: 209, type: BLOCK_TYPES.METAL },
      { x: 378, y: 207, type: BLOCK_TYPES.FUEL },
      { x: 391, y: 208, type: BLOCK_TYPES.FUEL },
      { x: 405, y: 208, type: BLOCK_TYPES.METAL },
      { x: 417, y: 203, type: BLOCK_TYPES.FUEL },
      { x: 433, y: 205, type: BLOCK_TYPES.NORMAL },
      { x: 444, y: 205, type: BLOCK_TYPES.FUEL },
      { x: 462, y: 208, type: BLOCK_TYPES.NORMAL },
      { x: 473, y: 206, type: BLOCK_TYPES.METAL },
      { x: 484, y: 204, type: BLOCK_TYPES.FUEL },
      { x: 495, y: 209, type: BLOCK_TYPES.FUEL },
      { x: 511, y: 209, type: BLOCK_TYPES.METAL },
      { x: 523, y: 207, type: BLOCK_TYPES.FUEL },
      { x: 544, y: 211, type: BLOCK_TYPES.FUEL },
      { x: 554, y: 210, type: BLOCK_TYPES.FUEL },
      { x: 568, y: 211, type: BLOCK_TYPES.NORMAL },
      { x: 583, y: 204, type: BLOCK_TYPES.METAL },
      { x: 598, y: 211, type: BLOCK_TYPES.FUEL },
      { x: 609, y: 203, type: BLOCK_TYPES.FUEL },
      { x: 623, y: 207, type: BLOCK_TYPES.FUEL },
      { x: 637, y: 209, type: BLOCK_TYPES.NORMAL },
      { x: 644, y: 208, type: BLOCK_TYPES.NORMAL },
      { x: 659, y: 204, type: BLOCK_TYPES.TIRE },
      { x: 671, y: 205, type: BLOCK_TYPES.FUEL },
      { x: 692, y: 205, type: BLOCK_TYPES.TIRE },
      { x: 699, y: 205, type: BLOCK_TYPES.TIRE },
      { x: 719, y: 203, type: BLOCK_TYPES.FUEL },
      { x: 728, y: 204, type: BLOCK_TYPES.FUEL },
      { x: 746, y: 207, type: BLOCK_TYPES.NORMAL },
      { x: 754, y: 207, type: BLOCK_TYPES.TIRE },
      { x: 245, y: 217, type: BLOCK_TYPES.FUEL },
      { x: 271, y: 220, type: BLOCK_TYPES.FUEL },
      { x: 283, y: 219, type: BLOCK_TYPES.FUEL },
      { x: 298, y: 223, type: BLOCK_TYPES.FUEL },
      { x: 311, y: 225, type: BLOCK_TYPES.FUEL },
      { x: 328, y: 218, type: BLOCK_TYPES.FUEL },
      { x: 341, y: 225, type: BLOCK_TYPES.METAL },
      { x: 350, y: 217, type: BLOCK_TYPES.METAL },
      { x: 361, y: 217, type: BLOCK_TYPES.METAL },
      { x: 374, y: 223, type: BLOCK_TYPES.METAL },
      { x: 395, y: 222, type: BLOCK_TYPES.FUEL },
      { x: 403, y: 217, type: BLOCK_TYPES.METAL },
      { x: 422, y: 219, type: BLOCK_TYPES.METAL },
      { x: 433, y: 217, type: BLOCK_TYPES.NORMAL },
      { x: 443, y: 221, type: BLOCK_TYPES.NORMAL },
      { x: 456, y: 222, type: BLOCK_TYPES.METAL },
      { x: 469, y: 221, type: BLOCK_TYPES.NORMAL },
      { x: 490, y: 217, type: BLOCK_TYPES.FUEL },
      { x: 503, y: 221, type: BLOCK_TYPES.FUEL },
      { x: 516, y: 223, type: BLOCK_TYPES.NORMAL },
      { x: 522, y: 219, type: BLOCK_TYPES.METAL },
      { x: 541, y: 217, type: BLOCK_TYPES.METAL },
      { x: 551, y: 217, type: BLOCK_TYPES.NORMAL },
      { x: 568, y: 225, type: BLOCK_TYPES.NORMAL },
      { x: 580, y: 219, type: BLOCK_TYPES.NORMAL },
      { x: 594, y: 219, type: BLOCK_TYPES.METAL },
      { x: 611, y: 223, type: BLOCK_TYPES.TIRE },
      { x: 624, y: 222, type: BLOCK_TYPES.TIRE },
      { x: 638, y: 224, type: BLOCK_TYPES.NORMAL },
      { x: 648, y: 219, type: BLOCK_TYPES.TIRE },
      { x: 661, y: 218, type: BLOCK_TYPES.NORMAL },
      { x: 676, y: 220, type: BLOCK_TYPES.NORMAL },
      { x: 685, y: 222, type: BLOCK_TYPES.TIRE },
      { x: 699, y: 220, type: BLOCK_TYPES.TIRE },
      { x: 719, y: 217, type: BLOCK_TYPES.FUEL },
      { x: 732, y: 218, type: BLOCK_TYPES.FUEL },
      { x: 739, y: 217, type: BLOCK_TYPES.NORMAL },
      { x: 759, y: 223, type: BLOCK_TYPES.FUEL },
      { x: 770, y: 219, type: BLOCK_TYPES.FUEL },
      { x: 231, y: 235, type: BLOCK_TYPES.METAL },
      { x: 272, y: 236, type: BLOCK_TYPES.FUEL },
      { x: 286, y: 230, type: BLOCK_TYPES.FUEL },
      { x: 300, y: 238, type: BLOCK_TYPES.FUEL },
      { x: 314, y: 234, type: BLOCK_TYPES.METAL },
      { x: 325, y: 233, type: BLOCK_TYPES.FUEL },
      { x: 403, y: 234, type: BLOCK_TYPES.METAL },
      { x: 422, y: 237, type: BLOCK_TYPES.FUEL },
      { x: 430, y: 233, type: BLOCK_TYPES.FUEL },
      { x: 448, y: 238, type: BLOCK_TYPES.FUEL },
      { x: 459, y: 231, type: BLOCK_TYPES.METAL },
      { x: 468, y: 234, type: BLOCK_TYPES.METAL },
      { x: 484, y: 233, type: BLOCK_TYPES.FUEL },
      { x: 503, y: 234, type: BLOCK_TYPES.NORMAL },
      { x: 516, y: 237, type: BLOCK_TYPES.METAL },
      { x: 526, y: 238, type: BLOCK_TYPES.METAL },
      { x: 543, y: 234, type: BLOCK_TYPES.METAL },
      { x: 555, y: 231, type: BLOCK_TYPES.NORMAL },
      { x: 566, y: 230, type: BLOCK_TYPES.NORMAL },
      { x: 578, y: 232, type: BLOCK_TYPES.METAL },
      { x: 590, y: 238, type: BLOCK_TYPES.FUEL },
      { x: 609, y: 235, type: BLOCK_TYPES.NORMAL },
      { x: 619, y: 232, type: BLOCK_TYPES.NORMAL },
      { x: 631, y: 236, type: BLOCK_TYPES.TIRE },
      { x: 649, y: 231, type: BLOCK_TYPES.TIRE },
      { x: 664, y: 235, type: BLOCK_TYPES.FUEL },
      { x: 730, y: 231, type: BLOCK_TYPES.TIRE },
      { x: 742, y: 232, type: BLOCK_TYPES.NORMAL },
      { x: 757, y: 231, type: BLOCK_TYPES.FUEL },
      { x: 768, y: 236, type: BLOCK_TYPES.NORMAL },
      { x: 781, y: 235, type: BLOCK_TYPES.NORMAL },
      { x: 272, y: 248, type: BLOCK_TYPES.METAL },
      { x: 282, y: 248, type: BLOCK_TYPES.FUEL },
      { x: 294, y: 247, type: BLOCK_TYPES.FUEL },
      { x: 308, y: 243, type: BLOCK_TYPES.METAL },
      { x: 421, y: 243, type: BLOCK_TYPES.METAL },
      { x: 433, y: 246, type: BLOCK_TYPES.METAL },
      { x: 443, y: 246, type: BLOCK_TYPES.NORMAL },
      { x: 459, y: 247, type: BLOCK_TYPES.METAL },
      { x: 474, y: 243, type: BLOCK_TYPES.FUEL },
      { x: 489, y: 244, type: BLOCK_TYPES.NORMAL },
      { x: 499, y: 247, type: BLOCK_TYPES.METAL },
      { x: 516, y: 246, type: BLOCK_TYPES.FUEL },
      { x: 529, y: 246, type: BLOCK_TYPES.FUEL },
      { x: 541, y: 250, type: BLOCK_TYPES.FUEL },
      { x: 549, y: 243, type: BLOCK_TYPES.NORMAL },
      { x: 570, y: 244, type: BLOCK_TYPES.NORMAL },
      { x: 578, y: 244, type: BLOCK_TYPES.METAL },
      { x: 590, y: 247, type: BLOCK_TYPES.NORMAL },
      { x: 608, y: 244, type: BLOCK_TYPES.NORMAL },
      { x: 619, y: 243, type: BLOCK_TYPES.NORMAL },
      { x: 632, y: 244, type: BLOCK_TYPES.NORMAL },
      { x: 646, y: 243, type: BLOCK_TYPES.FUEL },
      { x: 663, y: 250, type: BLOCK_TYPES.NORMAL },
      { x: 724, y: 251, type: BLOCK_TYPES.NORMAL },
      { x: 756, y: 250, type: BLOCK_TYPES.FUEL },
      { x: 771, y: 247, type: BLOCK_TYPES.TIRE },
      { x: 780, y: 243, type: BLOCK_TYPES.NORMAL },
      { x: 213, y: 257, type: BLOCK_TYPES.FUEL },
      { x: 231, y: 264, type: BLOCK_TYPES.FUEL },
      { x: 245, y: 262, type: BLOCK_TYPES.METAL },
      { x: 261, y: 261, type: BLOCK_TYPES.METAL },
      { x: 271, y: 263, type: BLOCK_TYPES.METAL },
      { x: 288, y: 258, type: BLOCK_TYPES.METAL },
      { x: 297, y: 262, type: BLOCK_TYPES.METAL },
      { x: 341, y: 261, type: BLOCK_TYPES.METAL },
      { x: 348, y: 258, type: BLOCK_TYPES.FUEL },
      { x: 362, y: 262, type: BLOCK_TYPES.METAL },
      { x: 375, y: 265, type: BLOCK_TYPES.FUEL },
      { x: 422, y: 265, type: BLOCK_TYPES.METAL },
      { x: 436, y: 260, type: BLOCK_TYPES.NORMAL },
      { x: 448, y: 263, type: BLOCK_TYPES.FUEL },
      { x: 462, y: 260, type: BLOCK_TYPES.NORMAL },
      { x: 475, y: 259, type: BLOCK_TYPES.NORMAL },
      { x: 485, y: 263, type: BLOCK_TYPES.NORMAL },
      { x: 499, y: 260, type: BLOCK_TYPES.METAL },
      { x: 510, y: 263, type: BLOCK_TYPES.METAL },
      { x: 526, y: 259, type: BLOCK_TYPES.FUEL },
      { x: 540, y: 260, type: BLOCK_TYPES.METAL },
      { x: 553, y: 259, type: BLOCK_TYPES.METAL },
      { x: 566, y: 257, type: BLOCK_TYPES.METAL },
      { x: 577, y: 262, type: BLOCK_TYPES.METAL },
      { x: 594, y: 257, type: BLOCK_TYPES.METAL },
      { x: 605, y: 262, type: BLOCK_TYPES.TIRE },
      { x: 619, y: 258, type: BLOCK_TYPES.FUEL },
      { x: 636, y: 265, type: BLOCK_TYPES.TIRE },
      { x: 645, y: 265, type: BLOCK_TYPES.FUEL },
      { x: 670, y: 257, type: BLOCK_TYPES.TIRE },
      { x: 692, y: 262, type: BLOCK_TYPES.TIRE },
      { x: 768, y: 257, type: BLOCK_TYPES.FUEL },
      { x: 785, y: 261, type: BLOCK_TYPES.FUEL },
      { x: 799, y: 258, type: BLOCK_TYPES.FUEL },
      { x: 215, y: 272, type: BLOCK_TYPES.METAL },
      { x: 229, y: 272, type: BLOCK_TYPES.FUEL },
      { x: 244, y: 271, type: BLOCK_TYPES.FUEL },
      { x: 260, y: 272, type: BLOCK_TYPES.METAL },
      { x: 274, y: 270, type: BLOCK_TYPES.FUEL },
      { x: 285, y: 278, type: BLOCK_TYPES.FUEL },
      { x: 302, y: 277, type: BLOCK_TYPES.FUEL },
      { x: 311, y: 272, type: BLOCK_TYPES.METAL },
      { x: 417, y: 275, type: BLOCK_TYPES.METAL },
      { x: 436, y: 276, type: BLOCK_TYPES.FUEL },
      { x: 442, y: 278, type: BLOCK_TYPES.METAL },
      { x: 459, y: 278, type: BLOCK_TYPES.METAL },
      { x: 472, y: 275, type: BLOCK_TYPES.NORMAL },
      { x: 489, y: 275, type: BLOCK_TYPES.FUEL },
      { x: 499, y: 270, type: BLOCK_TYPES.METAL },
      { x: 510, y: 275, type: BLOCK_TYPES.FUEL },
      { x: 524, y: 270, type: BLOCK_TYPES.FUEL },
      { x: 542, y: 277, type: BLOCK_TYPES.FUEL },
      { x: 552, y: 276, type: BLOCK_TYPES.NORMAL },
      { x: 568, y: 272, type: BLOCK_TYPES.NORMAL },
      { x: 576, y: 270, type: BLOCK_TYPES.METAL },
      { x: 594, y: 276, type: BLOCK_TYPES.FUEL },
      { x: 610, y: 274, type: BLOCK_TYPES.NORMAL },
      { x: 619, y: 277, type: BLOCK_TYPES.TIRE },
      { x: 646, y: 274, type: BLOCK_TYPES.FUEL },
      { x: 741, y: 278, type: BLOCK_TYPES.NORMAL },
      { x: 755, y: 270, type: BLOCK_TYPES.NORMAL },
      { x: 771, y: 272, type: BLOCK_TYPES.NORMAL },
      { x: 782, y: 271, type: BLOCK_TYPES.NORMAL },
      { x: 792, y: 273, type: BLOCK_TYPES.FUEL },
      { x: 200, y: 284, type: BLOCK_TYPES.FUEL },
      { x: 221, y: 287, type: BLOCK_TYPES.FUEL },
      { x: 229, y: 288, type: BLOCK_TYPES.METAL },
      { x: 244, y: 291, type: BLOCK_TYPES.METAL },
      { x: 257, y: 290, type: BLOCK_TYPES.METAL },
      { x: 267, y: 290, type: BLOCK_TYPES.METAL },
      { x: 288, y: 286, type: BLOCK_TYPES.FUEL },
      { x: 300, y: 289, type: BLOCK_TYPES.METAL },
      { x: 307, y: 291, type: BLOCK_TYPES.METAL },
      { x: 428, y: 286, type: BLOCK_TYPES.METAL },
      { x: 450, y: 291, type: BLOCK_TYPES.FUEL },
      { x: 463, y: 284, type: BLOCK_TYPES.FUEL },
      { x: 468, y: 285, type: BLOCK_TYPES.NORMAL },
      { x: 489, y: 285, type: BLOCK_TYPES.FUEL },
      { x: 495, y: 288, type: BLOCK_TYPES.NORMAL },
      { x: 514, y: 289, type: BLOCK_TYPES.METAL },
      { x: 525, y: 288, type: BLOCK_TYPES.NORMAL },
      { x: 538, y: 285, type: BLOCK_TYPES.FUEL },
      { x: 553, y: 286, type: BLOCK_TYPES.METAL },
      { x: 566, y: 289, type: BLOCK_TYPES.FUEL },
      { x: 584, y: 288, type: BLOCK_TYPES.METAL },
      { x: 594, y: 288, type: BLOCK_TYPES.FUEL },
      { x: 609, y: 286, type: BLOCK_TYPES.FUEL },
      { x: 619, y: 289, type: BLOCK_TYPES.NORMAL },
      { x: 766, y: 284, type: BLOCK_TYPES.NORMAL },
      { x: 781, y: 287, type: BLOCK_TYPES.FUEL },
      { x: 793, y: 290, type: BLOCK_TYPES.FUEL },
      { x: 256, y: 301, type: BLOCK_TYPES.METAL },
      { x: 275, y: 304, type: BLOCK_TYPES.FUEL },
      { x: 287, y: 304, type: BLOCK_TYPES.METAL },
      { x: 294, y: 297, type: BLOCK_TYPES.METAL },
      { x: 432, y: 302, type: BLOCK_TYPES.NORMAL },
      { x: 450, y: 301, type: BLOCK_TYPES.METAL },
      { x: 462, y: 302, type: BLOCK_TYPES.NORMAL },
      { x: 468, y: 304, type: BLOCK_TYPES.NORMAL },
      { x: 484, y: 298, type: BLOCK_TYPES.NORMAL },
      { x: 499, y: 302, type: BLOCK_TYPES.NORMAL },
      { x: 511, y: 304, type: BLOCK_TYPES.METAL },
      { x: 526, y: 304, type: BLOCK_TYPES.NORMAL },
      { x: 539, y: 301, type: BLOCK_TYPES.FUEL },
      { x: 553, y: 300, type: BLOCK_TYPES.NORMAL },
      { x: 570, y: 300, type: BLOCK_TYPES.FUEL },
      { x: 582, y: 299, type: BLOCK_TYPES.NORMAL },
      { x: 590, y: 305, type: BLOCK_TYPES.FUEL },
      { x: 603, y: 302, type: BLOCK_TYPES.TIRE },
      { x: 616, y: 299, type: BLOCK_TYPES.NORMAL },
      { x: 633, y: 298, type: BLOCK_TYPES.FUEL },
      { x: 764, y: 304, type: BLOCK_TYPES.FUEL },
      { x: 786, y: 305, type: BLOCK_TYPES.FUEL },
      { x: 799, y: 300, type: BLOCK_TYPES.NORMAL },
      { x: 202, y: 311, type: BLOCK_TYPES.METAL },
      { x: 215, y: 317, type: BLOCK_TYPES.FUEL },
      { x: 232, y: 314, type: BLOCK_TYPES.METAL },
      { x: 245, y: 317, type: BLOCK_TYPES.METAL },
      { x: 257, y: 315, type: BLOCK_TYPES.FUEL },
      { x: 270, y: 312, type: BLOCK_TYPES.FUEL },
      { x: 285, y: 316, type: BLOCK_TYPES.FUEL },
      { x: 428, y: 314, type: BLOCK_TYPES.METAL },
      { x: 447, y: 313, type: BLOCK_TYPES.METAL },
      { x: 455, y: 314, type: BLOCK_TYPES.METAL },
      { x: 469, y: 318, type: BLOCK_TYPES.FUEL },
      { x: 486, y: 311, type: BLOCK_TYPES.METAL },
      { x: 498, y: 317, type: BLOCK_TYPES.METAL },
      { x: 515, y: 311, type: BLOCK_TYPES.FUEL },
      { x: 526, y: 312, type: BLOCK_TYPES.NORMAL },
      { x: 543, y: 312, type: BLOCK_TYPES.FUEL },
      { x: 556, y: 311, type: BLOCK_TYPES.FUEL },
      { x: 567, y: 311, type: BLOCK_TYPES.METAL },
      { x: 578, y: 318, type: BLOCK_TYPES.FUEL },
      { x: 593, y: 315, type: BLOCK_TYPES.METAL },
      { x: 611, y: 318, type: BLOCK_TYPES.NORMAL },
      { x: 619, y: 311, type: BLOCK_TYPES.NORMAL },
      { x: 630, y: 317, type: BLOCK_TYPES.FUEL },
      { x: 770, y: 319, type: BLOCK_TYPES.NORMAL },
      { x: 779, y: 317, type: BLOCK_TYPES.TIRE },
      { x: 794, y: 316, type: BLOCK_TYPES.TIRE },
      { x: 809, y: 312, type: BLOCK_TYPES.TIRE },
      { x: 818, y: 318, type: BLOCK_TYPES.TIRE },
      { x: 232, y: 330, type: BLOCK_TYPES.FUEL },
      { x: 429, y: 329, type: BLOCK_TYPES.NORMAL },
      { x: 450, y: 331, type: BLOCK_TYPES.FUEL },
      { x: 463, y: 329, type: BLOCK_TYPES.METAL },
      { x: 470, y: 326, type: BLOCK_TYPES.FUEL },
      { x: 485, y: 331, type: BLOCK_TYPES.NORMAL },
      { x: 498, y: 327, type: BLOCK_TYPES.NORMAL },
      { x: 516, y: 329, type: BLOCK_TYPES.FUEL },
      { x: 522, y: 328, type: BLOCK_TYPES.NORMAL },
      { x: 537, y: 329, type: BLOCK_TYPES.FUEL },
      { x: 557, y: 329, type: BLOCK_TYPES.METAL },
      { x: 564, y: 326, type: BLOCK_TYPES.NORMAL },
      { x: 578, y: 332, type: BLOCK_TYPES.FUEL },
      { x: 592, y: 324, type: BLOCK_TYPES.NORMAL },
      { x: 609, y: 324, type: BLOCK_TYPES.TIRE },
      { x: 630, y: 325, type: BLOCK_TYPES.FUEL },
      { x: 557, y: 199, type: BLOCK_TYPES.FUEL },
      { x: 670, y: 198, type: BLOCK_TYPES.FUEL },
      { x: 689, y: 197, type: BLOCK_TYPES.NORMAL },
      { x: 705, y: 201, type: BLOCK_TYPES.TIRE },
      { x: 770, y: 238, type: BLOCK_TYPES.NORMAL },
      { x: 778, y: 238, type: BLOCK_TYPES.FUEL },
      { x: 449, y: 305, type: BLOCK_TYPES.NORMAL },
      { x: 444, y: 324, type: BLOCK_TYPES.METAL }
  ],
  
  2: [
      { x: 415, y: 103, type: BLOCK_TYPES.NORMAL },
      { x: 425, y: 103, type: BLOCK_TYPES.METAL },
      { x: 439, y: 97, type: BLOCK_TYPES.METAL },
      { x: 459, y: 96, type: BLOCK_TYPES.METAL },
      { x: 467, y: 102, type: BLOCK_TYPES.METAL },
      { x: 484, y: 100, type: BLOCK_TYPES.NORMAL },
      { x: 495, y: 101, type: BLOCK_TYPES.METAL },
      { x: 502, y: 98, type: BLOCK_TYPES.METAL },
      { x: 517, y: 100, type: BLOCK_TYPES.NORMAL },
      { x: 525, y: 96, type: BLOCK_TYPES.NORMAL },
      { x: 545, y: 96, type: BLOCK_TYPES.NORMAL },
      { x: 548, y: 100, type: BLOCK_TYPES.NORMAL },
      { x: 564, y: 96, type: BLOCK_TYPES.NORMAL },
      { x: 573, y: 100, type: BLOCK_TYPES.NORMAL },
      { x: 588, y: 96, type: BLOCK_TYPES.NORMAL },
      { x: 597, y: 99, type: BLOCK_TYPES.NORMAL },
      { x: 609, y: 102, type: BLOCK_TYPES.NORMAL },
      { x: 627, y: 96, type: BLOCK_TYPES.METAL },
      { x: 649, y: 96, type: BLOCK_TYPES.METAL },
      { x: 661, y: 97, type: BLOCK_TYPES.NORMAL },
      { x: 673, y: 103, type: BLOCK_TYPES.METAL },
      { x: 678, y: 99, type: BLOCK_TYPES.NORMAL },
      { x: 695, y: 102, type: BLOCK_TYPES.NORMAL },
      { x: 707, y: 104, type: BLOCK_TYPES.NORMAL },
      { x: 714, y: 99, type: BLOCK_TYPES.METAL },
      { x: 725, y: 101, type: BLOCK_TYPES.NORMAL },
      { x: 741, y: 96, type: BLOCK_TYPES.METAL },
      { x: 751, y: 99, type: BLOCK_TYPES.METAL },
      { x: 412, y: 126, type: BLOCK_TYPES.NORMAL },
      { x: 423, y: 121, type: BLOCK_TYPES.METAL },
      { x: 431, y: 124, type: BLOCK_TYPES.NORMAL },
      { x: 448, y: 122, type: BLOCK_TYPES.METAL },
      { x: 460, y: 125, type: BLOCK_TYPES.METAL },
      { x: 474, y: 120, type: BLOCK_TYPES.METAL },
      { x: 479, y: 125, type: BLOCK_TYPES.METAL },
      { x: 495, y: 127, type: BLOCK_TYPES.NORMAL },
      { x: 509, y: 119, type: BLOCK_TYPES.METAL },
      { x: 517, y: 120, type: BLOCK_TYPES.METAL },
      { x: 531, y: 121, type: BLOCK_TYPES.METAL },
      { x: 541, y: 123, type: BLOCK_TYPES.METAL },
      { x: 556, y: 126, type: BLOCK_TYPES.NORMAL },
      { x: 561, y: 123, type: BLOCK_TYPES.NORMAL },
      { x: 576, y: 122, type: BLOCK_TYPES.METAL },
      { x: 587, y: 124, type: BLOCK_TYPES.METAL },
      { x: 602, y: 127, type: BLOCK_TYPES.NORMAL },
      { x: 612, y: 120, type: BLOCK_TYPES.METAL },
      { x: 626, y: 125, type: BLOCK_TYPES.NORMAL },
      { x: 637, y: 120, type: BLOCK_TYPES.NORMAL },
      { x: 644, y: 119, type: BLOCK_TYPES.NORMAL },
      { x: 654, y: 126, type: BLOCK_TYPES.METAL },
      { x: 669, y: 125, type: BLOCK_TYPES.METAL },
      { x: 680, y: 127, type: BLOCK_TYPES.METAL },
      { x: 696, y: 125, type: BLOCK_TYPES.NORMAL },
      { x: 703, y: 121, type: BLOCK_TYPES.NORMAL },
      { x: 719, y: 122, type: BLOCK_TYPES.METAL },
      { x: 726, y: 123, type: BLOCK_TYPES.METAL },
      { x: 736, y: 125, type: BLOCK_TYPES.METAL },
      { x: 751, y: 121, type: BLOCK_TYPES.NORMAL },
      { x: 410, y: 133, type: BLOCK_TYPES.NORMAL },
      { x: 419, y: 132, type: BLOCK_TYPES.NORMAL },
      { x: 436, y: 133, type: BLOCK_TYPES.METAL },
      { x: 443, y: 139, type: BLOCK_TYPES.NORMAL },
      { x: 455, y: 139, type: BLOCK_TYPES.NORMAL },
      { x: 474, y: 139, type: BLOCK_TYPES.NORMAL },
      { x: 486, y: 131, type: BLOCK_TYPES.METAL },
      { x: 492, y: 139, type: BLOCK_TYPES.NORMAL },
      { x: 505, y: 134, type: BLOCK_TYPES.NORMAL },
      { x: 514, y: 133, type: BLOCK_TYPES.METAL },
      { x: 531, y: 133, type: BLOCK_TYPES.NORMAL },
      { x: 540, y: 132, type: BLOCK_TYPES.METAL },
      { x: 551, y: 133, type: BLOCK_TYPES.NORMAL },
      { x: 563, y: 137, type: BLOCK_TYPES.METAL },
      { x: 574, y: 135, type: BLOCK_TYPES.METAL },
      { x: 587, y: 132, type: BLOCK_TYPES.NORMAL },
      { x: 602, y: 132, type: BLOCK_TYPES.NORMAL },
      { x: 615, y: 134, type: BLOCK_TYPES.METAL },
      { x: 626, y: 134, type: BLOCK_TYPES.NORMAL },
      { x: 637, y: 131, type: BLOCK_TYPES.METAL },
      { x: 649, y: 137, type: BLOCK_TYPES.METAL },
      { x: 660, y: 133, type: BLOCK_TYPES.METAL },
      { x: 672, y: 134, type: BLOCK_TYPES.NORMAL },
      { x: 677, y: 135, type: BLOCK_TYPES.METAL },
      { x: 691, y: 132, type: BLOCK_TYPES.NORMAL },
      { x: 705, y: 133, type: BLOCK_TYPES.NORMAL },
      { x: 718, y: 137, type: BLOCK_TYPES.NORMAL },
      { x: 728, y: 133, type: BLOCK_TYPES.NORMAL },
      { x: 738, y: 136, type: BLOCK_TYPES.NORMAL },
      { x: 750, y: 133, type: BLOCK_TYPES.NORMAL },
      { x: 414, y: 143, type: BLOCK_TYPES.NORMAL },
      { x: 419, y: 144, type: BLOCK_TYPES.METAL },
      { x: 437, y: 148, type: BLOCK_TYPES.NORMAL },
      { x: 451, y: 144, type: BLOCK_TYPES.METAL },
      { x: 455, y: 142, type: BLOCK_TYPES.METAL },
      { x: 470, y: 147, type: BLOCK_TYPES.NORMAL },
      { x: 480, y: 149, type: BLOCK_TYPES.NORMAL },
      { x: 497, y: 149, type: BLOCK_TYPES.NORMAL },
      { x: 507, y: 148, type: BLOCK_TYPES.NORMAL },
      { x: 513, y: 142, type: BLOCK_TYPES.METAL },
      { x: 533, y: 142, type: BLOCK_TYPES.METAL },
      { x: 543, y: 146, type: BLOCK_TYPES.METAL },
      { x: 555, y: 147, type: BLOCK_TYPES.NORMAL },
      { x: 568, y: 143, type: BLOCK_TYPES.METAL },
      { x: 577, y: 145, type: BLOCK_TYPES.METAL },
      { x: 584, y: 147, type: BLOCK_TYPES.NORMAL },
      { x: 596, y: 149, type: BLOCK_TYPES.METAL },
      { x: 607, y: 146, type: BLOCK_TYPES.METAL },
      { x: 625, y: 146, type: BLOCK_TYPES.NORMAL },
      { x: 632, y: 148, type: BLOCK_TYPES.METAL },
      { x: 648, y: 148, type: BLOCK_TYPES.NORMAL },
      { x: 661, y: 145, type: BLOCK_TYPES.METAL },
      { x: 672, y: 148, type: BLOCK_TYPES.METAL },
      { x: 677, y: 146, type: BLOCK_TYPES.METAL },
      { x: 696, y: 146, type: BLOCK_TYPES.METAL },
      { x: 702, y: 143, type: BLOCK_TYPES.METAL },
      { x: 718, y: 148, type: BLOCK_TYPES.METAL },
      { x: 729, y: 148, type: BLOCK_TYPES.NORMAL },
      { x: 737, y: 146, type: BLOCK_TYPES.NORMAL },
      { x: 748, y: 142, type: BLOCK_TYPES.NORMAL },
      { x: 766, y: 145, type: BLOCK_TYPES.NORMAL },
      { x: 279, y: 158, type: BLOCK_TYPES.METAL },
      { x: 294, y: 160, type: BLOCK_TYPES.METAL },
      { x: 310, y: 155, type: BLOCK_TYPES.METAL },
      { x: 318, y: 161, type: BLOCK_TYPES.NORMAL },
      { x: 326, y: 159, type: BLOCK_TYPES.NORMAL },
      { x: 344, y: 158, type: BLOCK_TYPES.NORMAL },
      { x: 355, y: 159, type: BLOCK_TYPES.NORMAL },
      { x: 368, y: 160, type: BLOCK_TYPES.METAL },
      { x: 409, y: 158, type: BLOCK_TYPES.METAL },
      { x: 426, y: 156, type: BLOCK_TYPES.NORMAL },
      { x: 439, y: 156, type: BLOCK_TYPES.NORMAL },
      { x: 446, y: 161, type: BLOCK_TYPES.NORMAL },
      { x: 458, y: 156, type: BLOCK_TYPES.METAL },
      { x: 466, y: 162, type: BLOCK_TYPES.METAL },
      { x: 484, y: 157, type: BLOCK_TYPES.METAL },
      { x: 496, y: 156, type: BLOCK_TYPES.METAL },
      { x: 502, y: 155, type: BLOCK_TYPES.NORMAL },
      { x: 517, y: 156, type: BLOCK_TYPES.METAL },
      { x: 526, y: 161, type: BLOCK_TYPES.NORMAL },
      { x: 543, y: 162, type: BLOCK_TYPES.NORMAL },
      { x: 555, y: 156, type: BLOCK_TYPES.NORMAL },
      { x: 568, y: 160, type: BLOCK_TYPES.METAL },
      { x: 580, y: 155, type: BLOCK_TYPES.NORMAL },
      { x: 591, y: 161, type: BLOCK_TYPES.NORMAL },
      { x: 603, y: 155, type: BLOCK_TYPES.METAL },
      { x: 608, y: 154, type: BLOCK_TYPES.METAL },
      { x: 627, y: 154, type: BLOCK_TYPES.METAL },
      { x: 631, y: 157, type: BLOCK_TYPES.NORMAL },
      { x: 649, y: 161, type: BLOCK_TYPES.METAL },
      { x: 654, y: 155, type: BLOCK_TYPES.NORMAL },
      { x: 670, y: 157, type: BLOCK_TYPES.NORMAL },
      { x: 678, y: 162, type: BLOCK_TYPES.METAL },
      { x: 697, y: 158, type: BLOCK_TYPES.NORMAL },
      { x: 703, y: 159, type: BLOCK_TYPES.NORMAL },
      { x: 715, y: 161, type: BLOCK_TYPES.METAL },
      { x: 730, y: 160, type: BLOCK_TYPES.NORMAL },
      { x: 743, y: 161, type: BLOCK_TYPES.NORMAL },
      { x: 751, y: 154, type: BLOCK_TYPES.METAL },
      { x: 763, y: 162, type: BLOCK_TYPES.NORMAL },
      { x: 272, y: 166, type: BLOCK_TYPES.NORMAL },
      { x: 284, y: 171, type: BLOCK_TYPES.TIRE },
      { x: 298, y: 170, type: BLOCK_TYPES.TIRE },
      { x: 307, y: 167, type: BLOCK_TYPES.NORMAL },
      { x: 318, y: 170, type: BLOCK_TYPES.TIRE },
      { x: 340, y: 167, type: BLOCK_TYPES.NORMAL },
      { x: 357, y: 171, type: BLOCK_TYPES.METAL },
      { x: 367, y: 166, type: BLOCK_TYPES.METAL },
      { x: 261, y: 180, type: BLOCK_TYPES.METAL },
      { x: 271, y: 180, type: BLOCK_TYPES.NORMAL },
      { x: 279, y: 181, type: BLOCK_TYPES.NORMAL },
      { x: 307, y: 178, type: BLOCK_TYPES.NORMAL },
      { x: 319, y: 186, type: BLOCK_TYPES.TIRE },
      { x: 343, y: 183, type: BLOCK_TYPES.NORMAL },
      { x: 357, y: 183, type: BLOCK_TYPES.NORMAL },
      { x: 361, y: 179, type: BLOCK_TYPES.NORMAL },
      { x: 551, y: 184, type: BLOCK_TYPES.NORMAL },
      { x: 703, y: 179, type: BLOCK_TYPES.NORMAL },
      { x: 251, y: 189, type: BLOCK_TYPES.FUEL },
      { x: 257, y: 191, type: BLOCK_TYPES.NORMAL },
      { x: 268, y: 196, type: BLOCK_TYPES.TIRE },
      { x: 281, y: 189, type: BLOCK_TYPES.FUEL },
      { x: 292, y: 197, type: BLOCK_TYPES.METAL },
      { x: 307, y: 190, type: BLOCK_TYPES.FUEL },
      { x: 314, y: 196, type: BLOCK_TYPES.TIRE },
      { x: 356, y: 189, type: BLOCK_TYPES.METAL },
      { x: 365, y: 194, type: BLOCK_TYPES.NORMAL },
      { x: 414, y: 195, type: BLOCK_TYPES.METAL },
      { x: 419, y: 192, type: BLOCK_TYPES.METAL },
      { x: 439, y: 189, type: BLOCK_TYPES.METAL },
      { x: 448, y: 193, type: BLOCK_TYPES.METAL },
      { x: 461, y: 192, type: BLOCK_TYPES.NORMAL },
      { x: 473, y: 192, type: BLOCK_TYPES.METAL },
      { x: 479, y: 189, type: BLOCK_TYPES.METAL },
      { x: 492, y: 194, type: BLOCK_TYPES.NORMAL },
      { x: 501, y: 194, type: BLOCK_TYPES.NORMAL },
      { x: 521, y: 197, type: BLOCK_TYPES.METAL },
      { x: 533, y: 193, type: BLOCK_TYPES.NORMAL },
      { x: 539, y: 189, type: BLOCK_TYPES.METAL },
      { x: 551, y: 195, type: BLOCK_TYPES.METAL },
      { x: 563, y: 190, type: BLOCK_TYPES.NORMAL },
      { x: 574, y: 194, type: BLOCK_TYPES.METAL },
      { x: 587, y: 197, type: BLOCK_TYPES.METAL },
      { x: 601, y: 189, type: BLOCK_TYPES.METAL },
      { x: 609, y: 194, type: BLOCK_TYPES.METAL },
      { x: 624, y: 193, type: BLOCK_TYPES.METAL },
      { x: 633, y: 190, type: BLOCK_TYPES.NORMAL },
      { x: 649, y: 195, type: BLOCK_TYPES.METAL },
      { x: 662, y: 195, type: BLOCK_TYPES.METAL },
      { x: 673, y: 190, type: BLOCK_TYPES.METAL },
      { x: 681, y: 196, type: BLOCK_TYPES.METAL },
      { x: 696, y: 195, type: BLOCK_TYPES.METAL },
      { x: 706, y: 197, type: BLOCK_TYPES.NORMAL },
      { x: 718, y: 190, type: BLOCK_TYPES.METAL },
      { x: 724, y: 191, type: BLOCK_TYPES.METAL },
      { x: 742, y: 190, type: BLOCK_TYPES.METAL },
      { x: 748, y: 196, type: BLOCK_TYPES.NORMAL },
      { x: 764, y: 193, type: BLOCK_TYPES.METAL },
      { x: 237, y: 203, type: BLOCK_TYPES.FUEL },
      { x: 247, y: 206, type: BLOCK_TYPES.FUEL },
      { x: 259, y: 209, type: BLOCK_TYPES.FUEL },
      { x: 270, y: 206, type: BLOCK_TYPES.TIRE },
      { x: 292, y: 205, type: BLOCK_TYPES.METAL },
      { x: 310, y: 203, type: BLOCK_TYPES.NORMAL },
      { x: 321, y: 206, type: BLOCK_TYPES.TIRE },
      { x: 351, y: 209, type: BLOCK_TYPES.NORMAL },
      { x: 364, y: 203, type: BLOCK_TYPES.METAL },
      { x: 410, y: 204, type: BLOCK_TYPES.NORMAL },
      { x: 210, y: 214, type: BLOCK_TYPES.METAL },
      { x: 222, y: 217, type: BLOCK_TYPES.NORMAL },
      { x: 238, y: 219, type: BLOCK_TYPES.NORMAL },
      { x: 250, y: 215, type: BLOCK_TYPES.METAL },
      { x: 258, y: 213, type: BLOCK_TYPES.METAL },
      { x: 271, y: 215, type: BLOCK_TYPES.NORMAL },
      { x: 281, y: 216, type: BLOCK_TYPES.NORMAL },
      { x: 296, y: 221, type: BLOCK_TYPES.NORMAL },
      { x: 309, y: 213, type: BLOCK_TYPES.METAL },
      { x: 364, y: 217, type: BLOCK_TYPES.NORMAL },
      { x: 310, y: 229, type: BLOCK_TYPES.NORMAL },
      { x: 322, y: 227, type: BLOCK_TYPES.METAL },
      { x: 369, y: 225, type: BLOCK_TYPES.NORMAL },
      { x: 413, y: 232, type: BLOCK_TYPES.METAL },
      { x: 423, y: 229, type: BLOCK_TYPES.METAL },
      { x: 438, y: 232, type: BLOCK_TYPES.METAL },
      { x: 446, y: 232, type: BLOCK_TYPES.METAL },
      { x: 459, y: 230, type: BLOCK_TYPES.NORMAL },
      { x: 472, y: 224, type: BLOCK_TYPES.METAL },
      { x: 484, y: 227, type: BLOCK_TYPES.NORMAL },
      { x: 496, y: 227, type: BLOCK_TYPES.NORMAL },
      { x: 508, y: 232, type: BLOCK_TYPES.METAL },
      { x: 518, y: 226, type: BLOCK_TYPES.METAL },
      { x: 527, y: 225, type: BLOCK_TYPES.NORMAL },
      { x: 543, y: 230, type: BLOCK_TYPES.METAL },
      { x: 550, y: 227, type: BLOCK_TYPES.METAL },
      { x: 563, y: 224, type: BLOCK_TYPES.NORMAL },
      { x: 573, y: 232, type: BLOCK_TYPES.NORMAL },
      { x: 590, y: 231, type: BLOCK_TYPES.METAL },
      { x: 600, y: 232, type: BLOCK_TYPES.NORMAL },
      { x: 609, y: 230, type: BLOCK_TYPES.NORMAL },
      { x: 619, y: 232, type: BLOCK_TYPES.NORMAL },
      { x: 633, y: 224, type: BLOCK_TYPES.NORMAL },
      { x: 648, y: 232, type: BLOCK_TYPES.METAL },
      { x: 657, y: 226, type: BLOCK_TYPES.METAL },
      { x: 670, y: 231, type: BLOCK_TYPES.NORMAL },
      { x: 680, y: 229, type: BLOCK_TYPES.NORMAL },
      { x: 697, y: 227, type: BLOCK_TYPES.METAL },
      { x: 702, y: 228, type: BLOCK_TYPES.NORMAL },
      { x: 715, y: 230, type: BLOCK_TYPES.NORMAL },
      { x: 728, y: 230, type: BLOCK_TYPES.NORMAL },
      { x: 741, y: 225, type: BLOCK_TYPES.METAL },
      { x: 752, y: 228, type: BLOCK_TYPES.NORMAL },
      { x: 766, y: 232, type: BLOCK_TYPES.NORMAL },
      { x: 209, y: 242, type: BLOCK_TYPES.METAL },
      { x: 318, y: 241, type: BLOCK_TYPES.NORMAL },
      { x: 410, y: 239, type: BLOCK_TYPES.METAL },
      { x: 421, y: 240, type: BLOCK_TYPES.NORMAL },
      { x: 439, y: 242, type: BLOCK_TYPES.NORMAL },
      { x: 443, y: 237, type: BLOCK_TYPES.METAL },
      { x: 455, y: 236, type: BLOCK_TYPES.METAL },
      { x: 469, y: 237, type: BLOCK_TYPES.METAL },
      { x: 485, y: 241, type: BLOCK_TYPES.METAL },
      { x: 491, y: 242, type: BLOCK_TYPES.METAL },
      { x: 506, y: 239, type: BLOCK_TYPES.METAL },
      { x: 515, y: 237, type: BLOCK_TYPES.NORMAL },
      { x: 525, y: 237, type: BLOCK_TYPES.NORMAL },
      { x: 537, y: 242, type: BLOCK_TYPES.NORMAL },
      { x: 551, y: 242, type: BLOCK_TYPES.METAL },
      { x: 567, y: 243, type: BLOCK_TYPES.METAL },
      { x: 580, y: 242, type: BLOCK_TYPES.METAL },
      { x: 586, y: 241, type: BLOCK_TYPES.METAL },
      { x: 599, y: 242, type: BLOCK_TYPES.METAL },
      { x: 614, y: 238, type: BLOCK_TYPES.NORMAL },
      { x: 622, y: 238, type: BLOCK_TYPES.NORMAL },
      { x: 637, y: 238, type: BLOCK_TYPES.METAL },
      { x: 646, y: 240, type: BLOCK_TYPES.NORMAL },
      { x: 660, y: 238, type: BLOCK_TYPES.NORMAL },
      { x: 672, y: 240, type: BLOCK_TYPES.NORMAL },
      { x: 677, y: 236, type: BLOCK_TYPES.NORMAL },
      { x: 689, y: 244, type: BLOCK_TYPES.METAL },
      { x: 703, y: 243, type: BLOCK_TYPES.METAL },
      { x: 716, y: 244, type: BLOCK_TYPES.METAL },
      { x: 731, y: 238, type: BLOCK_TYPES.METAL },
      { x: 738, y: 241, type: BLOCK_TYPES.NORMAL },
      { x: 749, y: 236, type: BLOCK_TYPES.NORMAL },
      { x: 761, y: 241, type: BLOCK_TYPES.METAL },
      { x: 215, y: 251, type: BLOCK_TYPES.METAL },
      { x: 222, y: 256, type: BLOCK_TYPES.NORMAL },
      { x: 256, y: 254, type: BLOCK_TYPES.METAL },
      { x: 273, y: 251, type: BLOCK_TYPES.METAL },
      { x: 285, y: 256, type: BLOCK_TYPES.METAL },
      { x: 294, y: 256, type: BLOCK_TYPES.NORMAL },
      { x: 306, y: 253, type: BLOCK_TYPES.METAL },
      { x: 411, y: 249, type: BLOCK_TYPES.METAL },
      { x: 423, y: 254, type: BLOCK_TYPES.NORMAL },
      { x: 436, y: 248, type: BLOCK_TYPES.NORMAL },
      { x: 445, y: 251, type: BLOCK_TYPES.NORMAL },
      { x: 457, y: 251, type: BLOCK_TYPES.NORMAL },
      { x: 469, y: 251, type: BLOCK_TYPES.METAL },
      { x: 486, y: 253, type: BLOCK_TYPES.METAL },
      { x: 496, y: 255, type: BLOCK_TYPES.METAL },
      { x: 504, y: 248, type: BLOCK_TYPES.NORMAL },
      { x: 513, y: 250, type: BLOCK_TYPES.METAL },
      { x: 531, y: 249, type: BLOCK_TYPES.METAL },
      { x: 543, y: 248, type: BLOCK_TYPES.METAL },
      { x: 553, y: 250, type: BLOCK_TYPES.METAL },
      { x: 568, y: 255, type: BLOCK_TYPES.NORMAL },
      { x: 575, y: 252, type: BLOCK_TYPES.NORMAL },
      { x: 589, y: 249, type: BLOCK_TYPES.METAL },
      { x: 602, y: 255, type: BLOCK_TYPES.METAL },
      { x: 611, y: 248, type: BLOCK_TYPES.METAL },
      { x: 627, y: 249, type: BLOCK_TYPES.METAL },
      { x: 637, y: 255, type: BLOCK_TYPES.NORMAL },
      { x: 648, y: 252, type: BLOCK_TYPES.NORMAL },
      { x: 656, y: 253, type: BLOCK_TYPES.NORMAL },
      { x: 670, y: 255, type: BLOCK_TYPES.METAL },
      { x: 678, y: 248, type: BLOCK_TYPES.NORMAL },
      { x: 696, y: 255, type: BLOCK_TYPES.NORMAL },
      { x: 701, y: 250, type: BLOCK_TYPES.METAL },
      { x: 718, y: 252, type: BLOCK_TYPES.METAL },
      { x: 732, y: 249, type: BLOCK_TYPES.NORMAL },
      { x: 742, y: 249, type: BLOCK_TYPES.NORMAL },
      { x: 756, y: 252, type: BLOCK_TYPES.METAL },
      { x: 765, y: 256, type: BLOCK_TYPES.METAL },
      { x: 215, y: 263, type: BLOCK_TYPES.NORMAL },
      { x: 225, y: 266, type: BLOCK_TYPES.NORMAL },
      { x: 232, y: 264, type: BLOCK_TYPES.METAL },
      { x: 337, y: 266, type: BLOCK_TYPES.NORMAL },
      { x: 352, y: 267, type: BLOCK_TYPES.NORMAL },
      { x: 364, y: 261, type: BLOCK_TYPES.METAL },
      { x: 410, y: 267, type: BLOCK_TYPES.METAL },
      { x: 423, y: 268, type: BLOCK_TYPES.NORMAL },
      { x: 436, y: 265, type: BLOCK_TYPES.METAL },
      { x: 451, y: 267, type: BLOCK_TYPES.METAL },
      { x: 463, y: 264, type: BLOCK_TYPES.NORMAL },
      { x: 470, y: 265, type: BLOCK_TYPES.NORMAL },
      { x: 486, y: 264, type: BLOCK_TYPES.NORMAL },
      { x: 493, y: 267, type: BLOCK_TYPES.METAL },
      { x: 504, y: 266, type: BLOCK_TYPES.METAL },
      { x: 517, y: 260, type: BLOCK_TYPES.METAL },
      { x: 533, y: 268, type: BLOCK_TYPES.METAL },
      { x: 545, y: 263, type: BLOCK_TYPES.NORMAL },
      { x: 552, y: 262, type: BLOCK_TYPES.NORMAL },
      { x: 563, y: 262, type: BLOCK_TYPES.METAL },
      { x: 578, y: 264, type: BLOCK_TYPES.NORMAL },
      { x: 592, y: 265, type: BLOCK_TYPES.NORMAL },
      { x: 596, y: 261, type: BLOCK_TYPES.METAL },
      { x: 612, y: 263, type: BLOCK_TYPES.NORMAL },
      { x: 626, y: 268, type: BLOCK_TYPES.METAL },
      { x: 638, y: 264, type: BLOCK_TYPES.NORMAL },
      { x: 648, y: 267, type: BLOCK_TYPES.NORMAL },
      { x: 659, y: 265, type: BLOCK_TYPES.METAL },
      { x: 669, y: 264, type: BLOCK_TYPES.METAL },
      { x: 685, y: 260, type: BLOCK_TYPES.NORMAL },
      { x: 690, y: 261, type: BLOCK_TYPES.METAL },
      { x: 705, y: 263, type: BLOCK_TYPES.METAL },
      { x: 712, y: 266, type: BLOCK_TYPES.NORMAL },
      { x: 728, y: 267, type: BLOCK_TYPES.METAL },
      { x: 744, y: 268, type: BLOCK_TYPES.NORMAL },
      { x: 753, y: 264, type: BLOCK_TYPES.METAL },
      { x: 760, y: 264, type: BLOCK_TYPES.METAL },
      { x: 212, y: 276, type: BLOCK_TYPES.METAL },
      { x: 221, y: 277, type: BLOCK_TYPES.METAL },
      { x: 343, y: 274, type: BLOCK_TYPES.NORMAL },
      { x: 351, y: 272, type: BLOCK_TYPES.METAL },
      { x: 365, y: 272, type: BLOCK_TYPES.METAL },
      { x: 397, y: 273, type: BLOCK_TYPES.NORMAL },
      { x: 415, y: 275, type: BLOCK_TYPES.NORMAL },
      { x: 423, y: 272, type: BLOCK_TYPES.NORMAL },
      { x: 431, y: 275, type: BLOCK_TYPES.METAL },
      { x: 446, y: 278, type: BLOCK_TYPES.METAL },
      { x: 457, y: 276, type: BLOCK_TYPES.NORMAL },
      { x: 473, y: 279, type: BLOCK_TYPES.METAL },
      { x: 481, y: 271, type: BLOCK_TYPES.METAL },
      { x: 498, y: 278, type: BLOCK_TYPES.METAL },
      { x: 508, y: 277, type: BLOCK_TYPES.NORMAL },
      { x: 513, y: 274, type: BLOCK_TYPES.NORMAL },
      { x: 529, y: 273, type: BLOCK_TYPES.NORMAL },
      { x: 544, y: 271, type: BLOCK_TYPES.NORMAL },
      { x: 552, y: 279, type: BLOCK_TYPES.METAL },
      { x: 565, y: 274, type: BLOCK_TYPES.NORMAL },
      { x: 578, y: 272, type: BLOCK_TYPES.METAL },
      { x: 584, y: 278, type: BLOCK_TYPES.NORMAL },
      { x: 601, y: 272, type: BLOCK_TYPES.METAL },
      { x: 611, y: 278, type: BLOCK_TYPES.NORMAL },
      { x: 626, y: 273, type: BLOCK_TYPES.NORMAL },
      { x: 645, y: 275, type: BLOCK_TYPES.NORMAL },
      { x: 662, y: 273, type: BLOCK_TYPES.NORMAL },
      { x: 668, y: 274, type: BLOCK_TYPES.METAL },
      { x: 678, y: 271, type: BLOCK_TYPES.METAL },
      { x: 697, y: 273, type: BLOCK_TYPES.NORMAL },
      { x: 703, y: 276, type: BLOCK_TYPES.METAL },
      { x: 714, y: 278, type: BLOCK_TYPES.METAL },
      { x: 729, y: 276, type: BLOCK_TYPES.NORMAL },
      { x: 373, y: 285, type: BLOCK_TYPES.FUEL },
      { x: 390, y: 287, type: BLOCK_TYPES.TIRE },
      { x: 402, y: 283, type: BLOCK_TYPES.TIRE },
      { x: 415, y: 284, type: BLOCK_TYPES.FUEL },
      { x: 425, y: 285, type: BLOCK_TYPES.FUEL },
      { x: 439, y: 286, type: BLOCK_TYPES.TIRE },
      { x: 447, y: 285, type: BLOCK_TYPES.NORMAL },
      { x: 461, y: 288, type: BLOCK_TYPES.FUEL },
      { x: 467, y: 284, type: BLOCK_TYPES.TIRE },
      { x: 486, y: 290, type: BLOCK_TYPES.NORMAL },
      { x: 497, y: 291, type: BLOCK_TYPES.FUEL },
      { x: 508, y: 289, type: BLOCK_TYPES.NORMAL },
      { x: 516, y: 286, type: BLOCK_TYPES.NORMAL },
      { x: 532, y: 291, type: BLOCK_TYPES.TIRE },
      { x: 545, y: 284, type: BLOCK_TYPES.TIRE },
      { x: 548, y: 286, type: BLOCK_TYPES.FUEL },
      { x: 566, y: 287, type: BLOCK_TYPES.FUEL },
      { x: 576, y: 284, type: BLOCK_TYPES.TIRE },
      { x: 592, y: 291, type: BLOCK_TYPES.TIRE },
      { x: 600, y: 287, type: BLOCK_TYPES.NORMAL },
      { x: 614, y: 290, type: BLOCK_TYPES.TIRE },
      { x: 626, y: 287, type: BLOCK_TYPES.METAL },
      { x: 644, y: 285, type: BLOCK_TYPES.NORMAL },
      { x: 661, y: 283, type: BLOCK_TYPES.TIRE },
      { x: 667, y: 284, type: BLOCK_TYPES.NORMAL },
      { x: 684, y: 289, type: BLOCK_TYPES.NORMAL },
      { x: 695, y: 285, type: BLOCK_TYPES.NORMAL },
      { x: 706, y: 286, type: BLOCK_TYPES.TIRE },
      { x: 718, y: 286, type: BLOCK_TYPES.TIRE },
      { x: 732, y: 284, type: BLOCK_TYPES.NORMAL },
      { x: 737, y: 289, type: BLOCK_TYPES.NORMAL },
      { x: 211, y: 302, type: BLOCK_TYPES.METAL },
      { x: 222, y: 295, type: BLOCK_TYPES.NORMAL },
      { x: 234, y: 303, type: BLOCK_TYPES.METAL },
      { x: 252, y: 295, type: BLOCK_TYPES.NORMAL },
      { x: 256, y: 302, type: BLOCK_TYPES.NORMAL },
      { x: 270, y: 295, type: BLOCK_TYPES.NORMAL },
      { x: 305, y: 296, type: BLOCK_TYPES.METAL },
      { x: 316, y: 300, type: BLOCK_TYPES.METAL },
      { x: 334, y: 297, type: BLOCK_TYPES.NORMAL },
      { x: 341, y: 296, type: BLOCK_TYPES.NORMAL },
      { x: 368, y: 302, type: BLOCK_TYPES.METAL },
      { x: 379, y: 300, type: BLOCK_TYPES.NORMAL },
      { x: 388, y: 296, type: BLOCK_TYPES.TIRE },
      { x: 400, y: 296, type: BLOCK_TYPES.TIRE },
      { x: 411, y: 302, type: BLOCK_TYPES.NORMAL },
      { x: 426, y: 298, type: BLOCK_TYPES.TIRE },
      { x: 438, y: 301, type: BLOCK_TYPES.NORMAL },
      { x: 446, y: 302, type: BLOCK_TYPES.TIRE },
      { x: 463, y: 301, type: BLOCK_TYPES.TIRE },
      { x: 471, y: 303, type: BLOCK_TYPES.TIRE },
      { x: 478, y: 299, type: BLOCK_TYPES.TIRE },
      { x: 498, y: 300, type: BLOCK_TYPES.TIRE },
      { x: 507, y: 296, type: BLOCK_TYPES.TIRE },
      { x: 520, y: 301, type: BLOCK_TYPES.TIRE },
      { x: 530, y: 301, type: BLOCK_TYPES.TIRE },
      { x: 544, y: 296, type: BLOCK_TYPES.TIRE },
      { x: 553, y: 303, type: BLOCK_TYPES.TIRE },
      { x: 565, y: 295, type: BLOCK_TYPES.TIRE },
      { x: 576, y: 295, type: BLOCK_TYPES.TIRE },
      { x: 584, y: 302, type: BLOCK_TYPES.NORMAL },
      { x: 600, y: 299, type: BLOCK_TYPES.NORMAL },
      { x: 620, y: 301, type: BLOCK_TYPES.NORMAL },
      { x: 636, y: 300, type: BLOCK_TYPES.NORMAL },
      { x: 648, y: 299, type: BLOCK_TYPES.NORMAL },
      { x: 659, y: 295, type: BLOCK_TYPES.NORMAL },
      { x: 673, y: 295, type: BLOCK_TYPES.NORMAL },
      { x: 680, y: 297, type: BLOCK_TYPES.TIRE },
      { x: 689, y: 296, type: BLOCK_TYPES.TIRE },
      { x: 707, y: 302, type: BLOCK_TYPES.TIRE },
      { x: 712, y: 301, type: BLOCK_TYPES.TIRE },
      { x: 727, y: 302, type: BLOCK_TYPES.TIRE },
      { x: 743, y: 302, type: BLOCK_TYPES.TIRE },
      { x: 213, y: 311, type: BLOCK_TYPES.TIRE },
      { x: 226, y: 311, type: BLOCK_TYPES.TIRE },
      { x: 232, y: 314, type: BLOCK_TYPES.TIRE },
      { x: 249, y: 313, type: BLOCK_TYPES.TIRE },
      { x: 257, y: 308, type: BLOCK_TYPES.TIRE },
      { x: 268, y: 309, type: BLOCK_TYPES.FUEL },
      { x: 280, y: 307, type: BLOCK_TYPES.NORMAL },
      { x: 294, y: 306, type: BLOCK_TYPES.TIRE },
      { x: 306, y: 312, type: BLOCK_TYPES.TIRE },
      { x: 316, y: 309, type: BLOCK_TYPES.TIRE },
      { x: 328, y: 308, type: BLOCK_TYPES.TIRE },
      { x: 345, y: 308, type: BLOCK_TYPES.TIRE },
      { x: 354, y: 307, type: BLOCK_TYPES.NORMAL },
      { x: 367, y: 307, type: BLOCK_TYPES.FUEL },
      { x: 380, y: 307, type: BLOCK_TYPES.TIRE },
      { x: 400, y: 312, type: BLOCK_TYPES.NORMAL },
      { x: 437, y: 312, type: BLOCK_TYPES.METAL },
      { x: 451, y: 314, type: BLOCK_TYPES.TIRE },
      { x: 455, y: 310, type: BLOCK_TYPES.TIRE },
      { x: 467, y: 311, type: BLOCK_TYPES.TIRE },
      { x: 484, y: 313, type: BLOCK_TYPES.TIRE },
      { x: 496, y: 311, type: BLOCK_TYPES.NORMAL },
      { x: 509, y: 307, type: BLOCK_TYPES.NORMAL },
      { x: 516, y: 309, type: BLOCK_TYPES.NORMAL },
      { x: 531, y: 311, type: BLOCK_TYPES.FUEL },
      { x: 538, y: 312, type: BLOCK_TYPES.TIRE },
      { x: 551, y: 309, type: BLOCK_TYPES.TIRE },
      { x: 561, y: 311, type: BLOCK_TYPES.TIRE },
      { x: 576, y: 310, type: BLOCK_TYPES.NORMAL },
      { x: 584, y: 312, type: BLOCK_TYPES.METAL },
      { x: 609, y: 314, type: BLOCK_TYPES.FUEL },
      { x: 621, y: 312, type: BLOCK_TYPES.TIRE },
      { x: 630, y: 308, type: BLOCK_TYPES.TIRE },
      { x: 647, y: 307, type: BLOCK_TYPES.TIRE },
      { x: 654, y: 308, type: BLOCK_TYPES.TIRE },
      { x: 673, y: 307, type: BLOCK_TYPES.NORMAL },
      { x: 685, y: 313, type: BLOCK_TYPES.TIRE },
      { x: 695, y: 309, type: BLOCK_TYPES.NORMAL },
      { x: 709, y: 314, type: BLOCK_TYPES.TIRE },
      { x: 714, y: 306, type: BLOCK_TYPES.TIRE },
      { x: 730, y: 308, type: BLOCK_TYPES.FUEL },
      { x: 744, y: 313, type: BLOCK_TYPES.TIRE },
      { x: 212, y: 321, type: BLOCK_TYPES.TIRE },
      { x: 224, y: 318, type: BLOCK_TYPES.TIRE },
      { x: 240, y: 324, type: BLOCK_TYPES.TIRE },
      { x: 244, y: 326, type: BLOCK_TYPES.TIRE },
      { x: 260, y: 326, type: BLOCK_TYPES.TIRE },
      { x: 275, y: 322, type: BLOCK_TYPES.NORMAL },
      { x: 286, y: 318, type: BLOCK_TYPES.FUEL },
      { x: 293, y: 322, type: BLOCK_TYPES.TIRE },
      { x: 306, y: 319, type: BLOCK_TYPES.TIRE },
      { x: 330, y: 319, type: BLOCK_TYPES.TIRE },
      { x: 344, y: 324, type: BLOCK_TYPES.TIRE },
      { x: 357, y: 323, type: BLOCK_TYPES.TIRE },
      { x: 369, y: 320, type: BLOCK_TYPES.TIRE },
      { x: 376, y: 322, type: BLOCK_TYPES.TIRE },
      { x: 391, y: 326, type: BLOCK_TYPES.TIRE },
      { x: 396, y: 319, type: BLOCK_TYPES.NORMAL },
      { x: 445, y: 326, type: BLOCK_TYPES.TIRE },
      { x: 595, y: 324, type: BLOCK_TYPES.NORMAL },
      { x: 614, y: 320, type: BLOCK_TYPES.TIRE },
      { x: 625, y: 324, type: BLOCK_TYPES.FUEL },
      { x: 636, y: 324, type: BLOCK_TYPES.NORMAL },
      { x: 649, y: 320, type: BLOCK_TYPES.TIRE },
      { x: 658, y: 323, type: BLOCK_TYPES.TIRE },
      { x: 669, y: 319, type: BLOCK_TYPES.TIRE },
      { x: 216, y: 333, type: BLOCK_TYPES.TIRE },
      { x: 226, y: 333, type: BLOCK_TYPES.TIRE },
      { x: 235, y: 335, type: BLOCK_TYPES.TIRE },
      { x: 245, y: 331, type: BLOCK_TYPES.TIRE },
      { x: 255, y: 336, type: BLOCK_TYPES.FUEL },
      { x: 275, y: 330, type: BLOCK_TYPES.FUEL },
      { x: 286, y: 330, type: BLOCK_TYPES.TIRE },
      { x: 292, y: 337, type: BLOCK_TYPES.TIRE },
      { x: 309, y: 331, type: BLOCK_TYPES.FUEL },
      { x: 332, y: 330, type: BLOCK_TYPES.NORMAL },
      { x: 339, y: 334, type: BLOCK_TYPES.TIRE },
      { x: 354, y: 330, type: BLOCK_TYPES.TIRE },
      { x: 365, y: 334, type: BLOCK_TYPES.NORMAL },
      { x: 389, y: 330, type: BLOCK_TYPES.NORMAL },
      { x: 398, y: 330, type: BLOCK_TYPES.FUEL },
      { x: 449, y: 330, type: BLOCK_TYPES.FUEL },
      { x: 589, y: 334, type: BLOCK_TYPES.TIRE },
      { x: 595, y: 338, type: BLOCK_TYPES.TIRE },
      { x: 613, y: 335, type: BLOCK_TYPES.TIRE },
      { x: 626, y: 332, type: BLOCK_TYPES.FUEL },
      { x: 662, y: 337, type: BLOCK_TYPES.FUEL },
      { x: 670, y: 338, type: BLOCK_TYPES.TIRE },
      { x: 685, y: 337, type: BLOCK_TYPES.NORMAL },
      { x: 283, y: 349, type: BLOCK_TYPES.TIRE },
      { x: 293, y: 345, type: BLOCK_TYPES.TIRE },
      { x: 302, y: 343, type: BLOCK_TYPES.NORMAL },
      { x: 328, y: 345, type: BLOCK_TYPES.NORMAL },
      { x: 342, y: 346, type: BLOCK_TYPES.FUEL },
      { x: 356, y: 344, type: BLOCK_TYPES.TIRE },
      { x: 588, y: 348, type: BLOCK_TYPES.TIRE },
      { x: 601, y: 343, type: BLOCK_TYPES.TIRE },
      { x: 609, y: 347, type: BLOCK_TYPES.FUEL },
      { x: 622, y: 350, type: BLOCK_TYPES.NORMAL },
      { x: 656, y: 346, type: BLOCK_TYPES.TIRE },
      { x: 668, y: 350, type: BLOCK_TYPES.TIRE },
      { x: 281, y: 360, type: BLOCK_TYPES.FUEL },
      { x: 294, y: 359, type: BLOCK_TYPES.NORMAL },
      { x: 328, y: 357, type: BLOCK_TYPES.TIRE },
      { x: 342, y: 356, type: BLOCK_TYPES.TIRE },
      { x: 356, y: 358, type: BLOCK_TYPES.TIRE },
      { x: 587, y: 354, type: BLOCK_TYPES.NORMAL },
      { x: 598, y: 354, type: BLOCK_TYPES.TIRE },
      { x: 613, y: 360, type: BLOCK_TYPES.NORMAL },
      { x: 642, y: 354, type: BLOCK_TYPES.TIRE },
      { x: 666, y: 361, type: BLOCK_TYPES.TIRE },
      { x: 299, y: 373, type: BLOCK_TYPES.FUEL },
      { x: 308, y: 366, type: BLOCK_TYPES.FUEL },
      { x: 334, y: 365, type: BLOCK_TYPES.TIRE },
      { x: 343, y: 371, type: BLOCK_TYPES.TIRE },
      { x: 595, y: 372, type: BLOCK_TYPES.FUEL },
      { x: 610, y: 371, type: BLOCK_TYPES.FUEL },
      { x: 625, y: 367, type: BLOCK_TYPES.FUEL },
      { x: 648, y: 368, type: BLOCK_TYPES.TIRE },
      { x: 659, y: 365, type: BLOCK_TYPES.TIRE },
      { x: 293, y: 377, type: BLOCK_TYPES.FUEL },
      { x: 308, y: 383, type: BLOCK_TYPES.TIRE },
      { x: 315, y: 385, type: BLOCK_TYPES.FUEL },
      { x: 334, y: 381, type: BLOCK_TYPES.TIRE },
      { x: 339, y: 385, type: BLOCK_TYPES.FUEL },
      { x: 613, y: 380, type: BLOCK_TYPES.FUEL },
      { x: 620, y: 377, type: BLOCK_TYPES.TIRE },
      { x: 630, y: 377, type: BLOCK_TYPES.FUEL },
      { x: 642, y: 381, type: BLOCK_TYPES.NORMAL },
      { x: 308, y: 396, type: BLOCK_TYPES.TIRE },
      { x: 322, y: 396, type: BLOCK_TYPES.TIRE },
      { x: 329, y: 391, type: BLOCK_TYPES.TIRE },
      { x: 625, y: 388, type: BLOCK_TYPES.TIRE },
      { x: 634, y: 393, type: BLOCK_TYPES.TIRE },
      { x: 643, y: 394, type: BLOCK_TYPES.TIRE }
  ],
  
  3: [
      { x: 252, y: 96, type: BLOCK_TYPES.NORMAL },
      { x: 276, y: 109, type: BLOCK_TYPES.NORMAL },
      { x: 287, y: 108, type: BLOCK_TYPES.NORMAL },
      { x: 306, y: 120, type: BLOCK_TYPES.TIRE },
      { x: 324, y: 118, type: BLOCK_TYPES.FUEL },
      { x: 394, y: 158, type: BLOCK_TYPES.FUEL },
      { x: 524, y: 161, type: BLOCK_TYPES.FUEL },
      { x: 533, y: 157, type: BLOCK_TYPES.TIRE },
      { x: 550, y: 162, type: BLOCK_TYPES.FUEL },
      { x: 555, y: 160, type: BLOCK_TYPES.FUEL },
      { x: 574, y: 161, type: BLOCK_TYPES.NORMAL },
      { x: 581, y: 160, type: BLOCK_TYPES.TIRE },
      { x: 597, y: 157, type: BLOCK_TYPES.NORMAL },
      { x: 605, y: 163, type: BLOCK_TYPES.NORMAL },
      { x: 423, y: 171, type: BLOCK_TYPES.FUEL },
      { x: 433, y: 173, type: BLOCK_TYPES.TIRE },
      { x: 445, y: 171, type: BLOCK_TYPES.FUEL },
      { x: 457, y: 175, type: BLOCK_TYPES.NORMAL },
      { x: 476, y: 176, type: BLOCK_TYPES.NORMAL },
      { x: 481, y: 170, type: BLOCK_TYPES.FUEL },
      { x: 493, y: 170, type: BLOCK_TYPES.FUEL },
      { x: 510, y: 169, type: BLOCK_TYPES.NORMAL },
      { x: 519, y: 168, type: BLOCK_TYPES.TIRE },
      { x: 536, y: 176, type: BLOCK_TYPES.TIRE },
      { x: 542, y: 168, type: BLOCK_TYPES.FUEL },
      { x: 562, y: 169, type: BLOCK_TYPES.NORMAL },
      { x: 575, y: 176, type: BLOCK_TYPES.FUEL },
      { x: 585, y: 169, type: BLOCK_TYPES.NORMAL },
      { x: 594, y: 173, type: BLOCK_TYPES.NORMAL },
      { x: 612, y: 171, type: BLOCK_TYPES.TIRE },
      { x: 619, y: 169, type: BLOCK_TYPES.NORMAL },
      { x: 635, y: 171, type: BLOCK_TYPES.NORMAL },
      { x: 647, y: 173, type: BLOCK_TYPES.TIRE },
      { x: 654, y: 173, type: BLOCK_TYPES.FUEL },
      { x: 447, y: 180, type: BLOCK_TYPES.FUEL },
      { x: 459, y: 184, type: BLOCK_TYPES.FUEL },
      { x: 474, y: 184, type: BLOCK_TYPES.NORMAL },
      { x: 482, y: 181, type: BLOCK_TYPES.NORMAL },
      { x: 507, y: 187, type: BLOCK_TYPES.NORMAL },
      { x: 520, y: 186, type: BLOCK_TYPES.NORMAL },
      { x: 533, y: 180, type: BLOCK_TYPES.NORMAL },
      { x: 546, y: 182, type: BLOCK_TYPES.NORMAL },
      { x: 555, y: 188, type: BLOCK_TYPES.FUEL },
      { x: 568, y: 185, type: BLOCK_TYPES.FUEL },
      { x: 585, y: 184, type: BLOCK_TYPES.FUEL },
      { x: 596, y: 185, type: BLOCK_TYPES.NORMAL },
      { x: 607, y: 180, type: BLOCK_TYPES.FUEL },
      { x: 625, y: 187, type: BLOCK_TYPES.FUEL },
      { x: 637, y: 187, type: BLOCK_TYPES.NORMAL },
      { x: 650, y: 187, type: BLOCK_TYPES.NORMAL },
      { x: 661, y: 182, type: BLOCK_TYPES.TIRE },
      { x: 673, y: 180, type: BLOCK_TYPES.LIGHT },
      { x: 445, y: 193, type: BLOCK_TYPES.FUEL },
      { x: 460, y: 193, type: BLOCK_TYPES.NORMAL },
      { x: 475, y: 199, type: BLOCK_TYPES.TIRE },
      { x: 486, y: 194, type: BLOCK_TYPES.NORMAL },
      { x: 494, y: 196, type: BLOCK_TYPES.NORMAL },
      { x: 508, y: 200, type: BLOCK_TYPES.FUEL },
      { x: 518, y: 195, type: BLOCK_TYPES.TIRE },
      { x: 533, y: 196, type: BLOCK_TYPES.FUEL },
      { x: 542, y: 195, type: BLOCK_TYPES.FUEL },
      { x: 561, y: 193, type: BLOCK_TYPES.NORMAL },
      { x: 567, y: 199, type: BLOCK_TYPES.TIRE },
      { x: 587, y: 193, type: BLOCK_TYPES.TIRE },
      { x: 592, y: 194, type: BLOCK_TYPES.NORMAL },
      { x: 607, y: 197, type: BLOCK_TYPES.NORMAL },
      { x: 618, y: 195, type: BLOCK_TYPES.TIRE },
      { x: 638, y: 194, type: BLOCK_TYPES.NORMAL },
      { x: 642, y: 194, type: BLOCK_TYPES.FUEL },
      { x: 661, y: 195, type: BLOCK_TYPES.TIRE },
      { x: 673, y: 199, type: BLOCK_TYPES.TIRE },
      { x: 444, y: 212, type: BLOCK_TYPES.TIRE },
      { x: 462, y: 207, type: BLOCK_TYPES.TIRE },
      { x: 472, y: 213, type: BLOCK_TYPES.NORMAL },
      { x: 487, y: 212, type: BLOCK_TYPES.TIRE },
      { x: 495, y: 207, type: BLOCK_TYPES.TIRE },
      { x: 506, y: 207, type: BLOCK_TYPES.FUEL },
      { x: 520, y: 206, type: BLOCK_TYPES.TIRE },
      { x: 536, y: 205, type: BLOCK_TYPES.TIRE },
      { x: 548, y: 206, type: BLOCK_TYPES.TIRE },
      { x: 561, y: 212, type: BLOCK_TYPES.FUEL },
      { x: 569, y: 212, type: BLOCK_TYPES.FUEL },
      { x: 585, y: 209, type: BLOCK_TYPES.TIRE },
      { x: 594, y: 208, type: BLOCK_TYPES.FUEL },
      { x: 607, y: 207, type: BLOCK_TYPES.TIRE },
      { x: 619, y: 209, type: BLOCK_TYPES.FUEL },
      { x: 638, y: 210, type: BLOCK_TYPES.NORMAL },
      { x: 644, y: 212, type: BLOCK_TYPES.FUEL },
      { x: 659, y: 212, type: BLOCK_TYPES.FUEL },
      { x: 674, y: 208, type: BLOCK_TYPES.NORMAL },
      { x: 455, y: 220, type: BLOCK_TYPES.FUEL },
      { x: 469, y: 225, type: BLOCK_TYPES.FUEL },
      { x: 487, y: 221, type: BLOCK_TYPES.TIRE },
      { x: 497, y: 219, type: BLOCK_TYPES.FUEL },
      { x: 506, y: 220, type: BLOCK_TYPES.FUEL },
      { x: 525, y: 218, type: BLOCK_TYPES.NORMAL },
      { x: 538, y: 222, type: BLOCK_TYPES.NORMAL },
      { x: 550, y: 220, type: BLOCK_TYPES.TIRE },
      { x: 560, y: 219, type: BLOCK_TYPES.FUEL },
      { x: 569, y: 219, type: BLOCK_TYPES.TIRE },
      { x: 583, y: 217, type: BLOCK_TYPES.FUEL },
      { x: 600, y: 222, type: BLOCK_TYPES.NORMAL },
      { x: 605, y: 218, type: BLOCK_TYPES.TIRE },
      { x: 619, y: 219, type: BLOCK_TYPES.NORMAL },
      { x: 636, y: 224, type: BLOCK_TYPES.NORMAL },
      { x: 649, y: 220, type: BLOCK_TYPES.FUEL },
      { x: 659, y: 217, type: BLOCK_TYPES.FUEL },
      { x: 673, y: 225, type: BLOCK_TYPES.NORMAL },
      { x: 687, y: 218, type: BLOCK_TYPES.FUEL },
      { x: 700, y: 220, type: BLOCK_TYPES.TIRE },
      { x: 709, y: 219, type: BLOCK_TYPES.NORMAL },
      { x: 430, y: 237, type: BLOCK_TYPES.TIRE },
      { x: 450, y: 235, type: BLOCK_TYPES.FUEL },
      { x: 457, y: 231, type: BLOCK_TYPES.FUEL },
      { x: 475, y: 235, type: BLOCK_TYPES.FUEL },
      { x: 480, y: 231, type: BLOCK_TYPES.NORMAL },
      { x: 498, y: 233, type: BLOCK_TYPES.NORMAL },
      { x: 513, y: 238, type: BLOCK_TYPES.TIRE },
      { x: 520, y: 230, type: BLOCK_TYPES.TIRE },
      { x: 531, y: 234, type: BLOCK_TYPES.FUEL },
      { x: 542, y: 230, type: BLOCK_TYPES.FUEL },
      { x: 569, y: 237, type: BLOCK_TYPES.TIRE },
      { x: 581, y: 234, type: BLOCK_TYPES.FUEL },
      { x: 598, y: 236, type: BLOCK_TYPES.TIRE },
      { x: 613, y: 238, type: BLOCK_TYPES.NORMAL },
      { x: 620, y: 234, type: BLOCK_TYPES.TIRE },
      { x: 631, y: 233, type: BLOCK_TYPES.FUEL },
      { x: 644, y: 237, type: BLOCK_TYPES.FUEL },
      { x: 656, y: 233, type: BLOCK_TYPES.NORMAL },
      { x: 675, y: 230, type: BLOCK_TYPES.NORMAL },
      { x: 680, y: 235, type: BLOCK_TYPES.NORMAL },
      { x: 694, y: 231, type: BLOCK_TYPES.TIRE },
      { x: 709, y: 235, type: BLOCK_TYPES.TIRE },
      { x: 720, y: 236, type: BLOCK_TYPES.FUEL },
      { x: 737, y: 233, type: BLOCK_TYPES.NORMAL },
      { x: 748, y: 230, type: BLOCK_TYPES.NORMAL },
      { x: 386, y: 248, type: BLOCK_TYPES.NORMAL },
      { x: 419, y: 246, type: BLOCK_TYPES.FUEL },
      { x: 430, y: 248, type: BLOCK_TYPES.FUEL },
      { x: 449, y: 247, type: BLOCK_TYPES.NORMAL },
      { x: 461, y: 246, type: BLOCK_TYPES.TIRE },
      { x: 468, y: 248, type: BLOCK_TYPES.FUEL },
      { x: 485, y: 249, type: BLOCK_TYPES.FUEL },
      { x: 501, y: 244, type: BLOCK_TYPES.NORMAL },
      { x: 513, y: 247, type: BLOCK_TYPES.NORMAL },
      { x: 521, y: 250, type: BLOCK_TYPES.NORMAL },
      { x: 537, y: 248, type: BLOCK_TYPES.NORMAL },
      { x: 558, y: 244, type: BLOCK_TYPES.FUEL },
      { x: 569, y: 242, type: BLOCK_TYPES.FUEL },
      { x: 587, y: 246, type: BLOCK_TYPES.FUEL },
      { x: 592, y: 247, type: BLOCK_TYPES.TIRE },
      { x: 612, y: 244, type: BLOCK_TYPES.FUEL },
      { x: 622, y: 248, type: BLOCK_TYPES.TIRE },
      { x: 634, y: 248, type: BLOCK_TYPES.FUEL },
      { x: 642, y: 250, type: BLOCK_TYPES.TIRE },
      { x: 661, y: 247, type: BLOCK_TYPES.FUEL },
      { x: 673, y: 245, type: BLOCK_TYPES.TIRE },
      { x: 684, y: 248, type: BLOCK_TYPES.FUEL },
      { x: 696, y: 250, type: BLOCK_TYPES.TIRE },
      { x: 709, y: 250, type: BLOCK_TYPES.FUEL },
      { x: 721, y: 245, type: BLOCK_TYPES.NORMAL },
      { x: 731, y: 243, type: BLOCK_TYPES.TIRE },
      { x: 746, y: 243, type: BLOCK_TYPES.FUEL },
      { x: 756, y: 249, type: BLOCK_TYPES.TIRE },
      { x: 772, y: 248, type: BLOCK_TYPES.FUEL },
      { x: 375, y: 262, type: BLOCK_TYPES.FUEL },
      { x: 384, y: 258, type: BLOCK_TYPES.TIRE },
      { x: 396, y: 260, type: BLOCK_TYPES.NORMAL },
      { x: 408, y: 262, type: BLOCK_TYPES.NORMAL },
      { x: 426, y: 263, type: BLOCK_TYPES.TIRE },
      { x: 435, y: 259, type: BLOCK_TYPES.FUEL },
      { x: 445, y: 263, type: BLOCK_TYPES.FUEL },
      { x: 462, y: 255, type: BLOCK_TYPES.NORMAL },
      { x: 472, y: 260, type: BLOCK_TYPES.TIRE },
      { x: 483, y: 255, type: BLOCK_TYPES.NORMAL },
      { x: 498, y: 258, type: BLOCK_TYPES.TIRE },
      { x: 507, y: 258, type: BLOCK_TYPES.TIRE },
      { x: 519, y: 260, type: BLOCK_TYPES.NORMAL },
      { x: 531, y: 262, type: BLOCK_TYPES.FUEL },
      { x: 549, y: 260, type: BLOCK_TYPES.NORMAL },
      { x: 559, y: 258, type: BLOCK_TYPES.FUEL },
      { x: 574, y: 255, type: BLOCK_TYPES.TIRE },
      { x: 588, y: 258, type: BLOCK_TYPES.TIRE },
      { x: 598, y: 262, type: BLOCK_TYPES.TIRE },
      { x: 605, y: 260, type: BLOCK_TYPES.FUEL },
      { x: 624, y: 257, type: BLOCK_TYPES.TIRE },
      { x: 631, y: 256, type: BLOCK_TYPES.NORMAL },
      { x: 647, y: 257, type: BLOCK_TYPES.TIRE },
      { x: 657, y: 258, type: BLOCK_TYPES.NORMAL },
      { x: 672, y: 258, type: BLOCK_TYPES.NORMAL },
      { x: 679, y: 263, type: BLOCK_TYPES.FUEL },
      { x: 693, y: 262, type: BLOCK_TYPES.NORMAL },
      { x: 709, y: 259, type: BLOCK_TYPES.TIRE },
      { x: 720, y: 261, type: BLOCK_TYPES.FUEL },
      { x: 732, y: 258, type: BLOCK_TYPES.FUEL },
      { x: 745, y: 261, type: BLOCK_TYPES.NORMAL },
      { x: 758, y: 257, type: BLOCK_TYPES.FUEL },
      { x: 771, y: 258, type: BLOCK_TYPES.NORMAL },
      { x: 786, y: 259, type: BLOCK_TYPES.TIRE },
      { x: 333, y: 273, type: BLOCK_TYPES.TIRE },
      { x: 343, y: 275, type: BLOCK_TYPES.TIRE },
      { x: 363, y: 271, type: BLOCK_TYPES.TIRE },
      { x: 371, y: 270, type: BLOCK_TYPES.TIRE },
      { x: 386, y: 274, type: BLOCK_TYPES.TIRE },
      { x: 399, y: 270, type: BLOCK_TYPES.TIRE },
      { x: 408, y: 269, type: BLOCK_TYPES.TIRE },
      { x: 423, y: 273, type: BLOCK_TYPES.TIRE },
      { x: 435, y: 275, type: BLOCK_TYPES.TIRE },
      { x: 447, y: 271, type: BLOCK_TYPES.TIRE },
      { x: 458, y: 271, type: BLOCK_TYPES.TIRE },
      { x: 474, y: 267, type: BLOCK_TYPES.TIRE },
      { x: 487, y: 269, type: BLOCK_TYPES.TIRE },
      { x: 496, y: 268, type: BLOCK_TYPES.TIRE },
      { x: 506, y: 274, type: BLOCK_TYPES.TIRE },
      { x: 521, y: 271, type: BLOCK_TYPES.TIRE },
      { x: 535, y: 270, type: BLOCK_TYPES.TIRE },
      { x: 549, y: 272, type: BLOCK_TYPES.TIRE },
      { x: 559, y: 275, type: BLOCK_TYPES.TIRE },
      { x: 573, y: 273, type: BLOCK_TYPES.TIRE },
      { x: 585, y: 270, type: BLOCK_TYPES.TIRE },
      { x: 593, y: 271, type: BLOCK_TYPES.TIRE },
      { x: 607, y: 269, type: BLOCK_TYPES.TIRE },
      { x: 621, y: 272, type: BLOCK_TYPES.TIRE },
      { x: 634, y: 267, type: BLOCK_TYPES.TIRE },
      { x: 643, y: 272, type: BLOCK_TYPES.TIRE },
      { x: 661, y: 267, type: BLOCK_TYPES.TIRE },
      { x: 670, y: 274, type: BLOCK_TYPES.TIRE },
      { x: 686, y: 275, type: BLOCK_TYPES.TIRE },
      { x: 692, y: 270, type: BLOCK_TYPES.TIRE },
      { x: 707, y: 267, type: BLOCK_TYPES.TIRE },
      { x: 721, y: 270, type: BLOCK_TYPES.TIRE },
      { x: 736, y: 272, type: BLOCK_TYPES.TIRE },
      { x: 750, y: 267, type: BLOCK_TYPES.TIRE },
      { x: 756, y: 267, type: BLOCK_TYPES.TIRE },
      { x: 774, y: 273, type: BLOCK_TYPES.TIRE },
      { x: 782, y: 273, type: BLOCK_TYPES.TIRE },
      { x: 792, y: 271, type: BLOCK_TYPES.TIRE },
      { x: 809, y: 268, type: BLOCK_TYPES.TIRE },
      { x: 338, y: 288, type: BLOCK_TYPES.TIRE },
      { x: 348, y: 281, type: BLOCK_TYPES.TIRE },
      { x: 361, y: 283, type: BLOCK_TYPES.TIRE },
      { x: 371, y: 283, type: BLOCK_TYPES.TIRE },
      { x: 382, y: 284, type: BLOCK_TYPES.TIRE },
      { x: 401, y: 287, type: BLOCK_TYPES.TIRE },
      { x: 413, y: 286, type: BLOCK_TYPES.TIRE },
      { x: 419, y: 283, type: BLOCK_TYPES.TIRE },
      { x: 430, y: 280, type: BLOCK_TYPES.TIRE },
      { x: 449, y: 281, type: BLOCK_TYPES.TIRE },
      { x: 459, y: 281, type: BLOCK_TYPES.TIRE },
      { x: 471, y: 281, type: BLOCK_TYPES.TIRE },
      { x: 487, y: 285, type: BLOCK_TYPES.TIRE },
      { x: 499, y: 285, type: BLOCK_TYPES.TIRE },
      { x: 505, y: 284, type: BLOCK_TYPES.TIRE },
      { x: 519, y: 282, type: BLOCK_TYPES.TIRE },
      { x: 538, y: 287, type: BLOCK_TYPES.TIRE },
      { x: 546, y: 287, type: BLOCK_TYPES.TIRE },
      { x: 558, y: 282, type: BLOCK_TYPES.TIRE },
      { x: 574, y: 280, type: BLOCK_TYPES.TIRE },
      { x: 583, y: 280, type: BLOCK_TYPES.TIRE },
      { x: 597, y: 287, type: BLOCK_TYPES.TIRE },
      { x: 605, y: 286, type: BLOCK_TYPES.TIRE },
      { x: 624, y: 286, type: BLOCK_TYPES.TIRE },
      { x: 630, y: 287, type: BLOCK_TYPES.TIRE },
      { x: 643, y: 283, type: BLOCK_TYPES.TIRE },
      { x: 659, y: 287, type: BLOCK_TYPES.TIRE },
      { x: 669, y: 283, type: BLOCK_TYPES.TIRE },
      { x: 680, y: 282, type: BLOCK_TYPES.TIRE },
      { x: 698, y: 288, type: BLOCK_TYPES.TIRE },
      { x: 709, y: 284, type: BLOCK_TYPES.TIRE },
      { x: 718, y: 282, type: BLOCK_TYPES.TIRE },
      { x: 735, y: 286, type: BLOCK_TYPES.TIRE },
      { x: 747, y: 281, type: BLOCK_TYPES.TIRE },
      { x: 762, y: 283, type: BLOCK_TYPES.TIRE },
      { x: 773, y: 288, type: BLOCK_TYPES.TIRE },
      { x: 781, y: 281, type: BLOCK_TYPES.TIRE },
      { x: 797, y: 284, type: BLOCK_TYPES.TIRE },
      { x: 807, y: 284, type: BLOCK_TYPES.TIRE },
      { x: 823, y: 284, type: BLOCK_TYPES.TIRE },
      { x: 837, y: 287, type: BLOCK_TYPES.TIRE },
      { x: 322, y: 300, type: BLOCK_TYPES.TIRE },
      { x: 339, y: 292, type: BLOCK_TYPES.TIRE },
      { x: 348, y: 293, type: BLOCK_TYPES.TIRE },
      { x: 358, y: 299, type: BLOCK_TYPES.TIRE },
      { x: 376, y: 300, type: BLOCK_TYPES.TIRE },
      { x: 382, y: 293, type: BLOCK_TYPES.TIRE },
      { x: 398, y: 297, type: BLOCK_TYPES.TIRE },
      { x: 407, y: 295, type: BLOCK_TYPES.TIRE },
      { x: 424, y: 299, type: BLOCK_TYPES.NORMAL },
      { x: 434, y: 296, type: BLOCK_TYPES.TIRE },
      { x: 448, y: 294, type: BLOCK_TYPES.TIRE },
      { x: 459, y: 293, type: BLOCK_TYPES.TIRE },
      { x: 475, y: 299, type: BLOCK_TYPES.TIRE },
      { x: 488, y: 292, type: BLOCK_TYPES.TIRE },
      { x: 495, y: 296, type: BLOCK_TYPES.TIRE },
      { x: 507, y: 297, type: BLOCK_TYPES.NORMAL },
      { x: 520, y: 298, type: BLOCK_TYPES.TIRE },
      { x: 533, y: 294, type: BLOCK_TYPES.TIRE },
      { x: 542, y: 300, type: BLOCK_TYPES.TIRE },
      { x: 559, y: 294, type: BLOCK_TYPES.TIRE },
      { x: 575, y: 298, type: BLOCK_TYPES.TIRE },
      { x: 581, y: 293, type: BLOCK_TYPES.TIRE },
      { x: 595, y: 293, type: BLOCK_TYPES.TIRE },
      { x: 612, y: 295, type: BLOCK_TYPES.NORMAL },
      { x: 624, y: 296, type: BLOCK_TYPES.TIRE },
      { x: 631, y: 292, type: BLOCK_TYPES.TIRE },
      { x: 642, y: 297, type: BLOCK_TYPES.TIRE },
      { x: 657, y: 300, type: BLOCK_TYPES.TIRE },
      { x: 670, y: 293, type: BLOCK_TYPES.TIRE },
      { x: 684, y: 298, type: BLOCK_TYPES.TIRE },
      { x: 698, y: 298, type: BLOCK_TYPES.TIRE },
      { x: 707, y: 295, type: BLOCK_TYPES.TIRE },
      { x: 723, y: 296, type: BLOCK_TYPES.TIRE },
      { x: 734, y: 296, type: BLOCK_TYPES.TIRE },
      { x: 743, y: 295, type: BLOCK_TYPES.TIRE },
      { x: 761, y: 297, type: BLOCK_TYPES.FUEL },
      { x: 772, y: 295, type: BLOCK_TYPES.NORMAL },
      { x: 780, y: 295, type: BLOCK_TYPES.NORMAL },
      { x: 797, y: 294, type: BLOCK_TYPES.TIRE },
      { x: 821, y: 299, type: BLOCK_TYPES.TIRE },
      { x: 830, y: 299, type: BLOCK_TYPES.TIRE },
      { x: 324, y: 305, type: BLOCK_TYPES.TIRE },
      { x: 338, y: 312, type: BLOCK_TYPES.TIRE },
      { x: 348, y: 308, type: BLOCK_TYPES.FUEL },
      { x: 363, y: 305, type: BLOCK_TYPES.TIRE },
      { x: 373, y: 311, type: BLOCK_TYPES.TIRE },
      { x: 388, y: 305, type: BLOCK_TYPES.TIRE },
      { x: 399, y: 307, type: BLOCK_TYPES.TIRE },
      { x: 405, y: 304, type: BLOCK_TYPES.TIRE },
      { x: 418, y: 306, type: BLOCK_TYPES.NORMAL },
      { x: 433, y: 305, type: BLOCK_TYPES.FUEL },
      { x: 444, y: 311, type: BLOCK_TYPES.TIRE },
      { x: 455, y: 305, type: BLOCK_TYPES.TIRE },
      { x: 468, y: 311, type: BLOCK_TYPES.TIRE },
      { x: 483, y: 308, type: BLOCK_TYPES.TIRE },
      { x: 493, y: 306, type: BLOCK_TYPES.TIRE },
      { x: 506, y: 311, type: BLOCK_TYPES.NORMAL },
      { x: 523, y: 308, type: BLOCK_TYPES.TIRE },
      { x: 534, y: 308, type: BLOCK_TYPES.TIRE },
      { x: 546, y: 310, type: BLOCK_TYPES.TIRE },
      { x: 555, y: 309, type: BLOCK_TYPES.TIRE },
      { x: 573, y: 305, type: BLOCK_TYPES.TIRE },
      { x: 584, y: 310, type: BLOCK_TYPES.TIRE },
      { x: 596, y: 304, type: BLOCK_TYPES.NORMAL },
      { x: 609, y: 312, type: BLOCK_TYPES.NORMAL },
      { x: 625, y: 312, type: BLOCK_TYPES.TIRE },
      { x: 637, y: 306, type: BLOCK_TYPES.TIRE },
      { x: 650, y: 310, type: BLOCK_TYPES.TIRE },
      { x: 655, y: 310, type: BLOCK_TYPES.TIRE },
      { x: 674, y: 311, type: BLOCK_TYPES.TIRE },
      { x: 686, y: 306, type: BLOCK_TYPES.NORMAL },
      { x: 696, y: 310, type: BLOCK_TYPES.TIRE },
      { x: 707, y: 304, type: BLOCK_TYPES.NORMAL },
      { x: 718, y: 306, type: BLOCK_TYPES.TIRE },
      { x: 732, y: 306, type: BLOCK_TYPES.TIRE },
      { x: 746, y: 307, type: BLOCK_TYPES.TIRE },
      { x: 761, y: 304, type: BLOCK_TYPES.TIRE },
      { x: 771, y: 304, type: BLOCK_TYPES.NORMAL },
      { x: 779, y: 310, type: BLOCK_TYPES.NORMAL },
      { x: 797, y: 309, type: BLOCK_TYPES.TIRE },
      { x: 807, y: 312, type: BLOCK_TYPES.FUEL },
      { x: 338, y: 320, type: BLOCK_TYPES.TIRE },
      { x: 347, y: 324, type: BLOCK_TYPES.TIRE },
      { x: 362, y: 325, type: BLOCK_TYPES.TIRE },
      { x: 376, y: 323, type: BLOCK_TYPES.FUEL },
      { x: 386, y: 320, type: BLOCK_TYPES.TIRE },
      { x: 400, y: 319, type: BLOCK_TYPES.TIRE },
      { x: 408, y: 321, type: BLOCK_TYPES.TIRE },
      { x: 419, y: 320, type: BLOCK_TYPES.NORMAL },
      { x: 436, y: 317, type: BLOCK_TYPES.FUEL },
      { x: 447, y: 319, type: BLOCK_TYPES.TIRE },
      { x: 455, y: 322, type: BLOCK_TYPES.TIRE },
      { x: 468, y: 317, type: BLOCK_TYPES.TIRE },
      { x: 488, y: 323, type: BLOCK_TYPES.TIRE },
      { x: 496, y: 317, type: BLOCK_TYPES.TIRE },
      { x: 508, y: 325, type: BLOCK_TYPES.TIRE },
      { x: 517, y: 324, type: BLOCK_TYPES.FUEL },
      { x: 533, y: 320, type: BLOCK_TYPES.NORMAL },
      { x: 547, y: 318, type: BLOCK_TYPES.TIRE },
      { x: 559, y: 321, type: BLOCK_TYPES.TIRE },
      { x: 570, y: 322, type: BLOCK_TYPES.TIRE },
      { x: 586, y: 319, type: BLOCK_TYPES.TIRE },
      { x: 598, y: 325, type: BLOCK_TYPES.NORMAL },
      { x: 606, y: 319, type: BLOCK_TYPES.NORMAL },
      { x: 618, y: 317, type: BLOCK_TYPES.TIRE },
      { x: 635, y: 320, type: BLOCK_TYPES.TIRE },
      { x: 642, y: 325, type: BLOCK_TYPES.TIRE },
      { x: 656, y: 319, type: BLOCK_TYPES.TIRE },
      { x: 673, y: 325, type: BLOCK_TYPES.TIRE },
      { x: 680, y: 322, type: BLOCK_TYPES.TIRE },
      { x: 693, y: 324, type: BLOCK_TYPES.TIRE },
      { x: 712, y: 317, type: BLOCK_TYPES.FUEL },
      { x: 718, y: 323, type: BLOCK_TYPES.TIRE },
      { x: 729, y: 323, type: BLOCK_TYPES.TIRE },
      { x: 748, y: 322, type: BLOCK_TYPES.TIRE },
      { x: 758, y: 321, type: BLOCK_TYPES.TIRE },
      { x: 768, y: 317, type: BLOCK_TYPES.TIRE },
      { x: 781, y: 318, type: BLOCK_TYPES.FUEL },
      { x: 793, y: 317, type: BLOCK_TYPES.FUEL },
      { x: 334, y: 335, type: BLOCK_TYPES.NORMAL },
      { x: 351, y: 330, type: BLOCK_TYPES.TIRE },
      { x: 360, y: 337, type: BLOCK_TYPES.FUEL },
      { x: 385, y: 334, type: BLOCK_TYPES.TIRE },
      { x: 401, y: 336, type: BLOCK_TYPES.TIRE },
      { x: 409, y: 334, type: BLOCK_TYPES.TIRE },
      { x: 422, y: 335, type: BLOCK_TYPES.FUEL },
      { x: 433, y: 330, type: BLOCK_TYPES.FUEL },
      { x: 446, y: 330, type: BLOCK_TYPES.TIRE },
      { x: 458, y: 336, type: BLOCK_TYPES.TIRE },
      { x: 470, y: 335, type: BLOCK_TYPES.TIRE },
      { x: 486, y: 337, type: BLOCK_TYPES.TIRE },
      { x: 493, y: 337, type: BLOCK_TYPES.TIRE },
      { x: 523, y: 333, type: BLOCK_TYPES.NORMAL },
      { x: 536, y: 335, type: BLOCK_TYPES.NORMAL },
      { x: 548, y: 336, type: BLOCK_TYPES.TIRE },
      { x: 563, y: 334, type: BLOCK_TYPES.TIRE },
      { x: 569, y: 333, type: BLOCK_TYPES.NORMAL },
      { x: 584, y: 334, type: BLOCK_TYPES.TIRE },
      { x: 594, y: 334, type: BLOCK_TYPES.NORMAL },
      { x: 613, y: 335, type: BLOCK_TYPES.NORMAL },
      { x: 624, y: 330, type: BLOCK_TYPES.TIRE },
      { x: 637, y: 330, type: BLOCK_TYPES.TIRE },
      { x: 645, y: 329, type: BLOCK_TYPES.TIRE },
      { x: 658, y: 334, type: BLOCK_TYPES.TIRE },
      { x: 673, y: 330, type: BLOCK_TYPES.NORMAL },
      { x: 680, y: 333, type: BLOCK_TYPES.FUEL },
      { x: 698, y: 336, type: BLOCK_TYPES.FUEL },
      { x: 712, y: 336, type: BLOCK_TYPES.TIRE },
      { x: 721, y: 337, type: BLOCK_TYPES.TIRE },
      { x: 737, y: 331, type: BLOCK_TYPES.TIRE },
      { x: 746, y: 331, type: BLOCK_TYPES.TIRE },
      { x: 757, y: 330, type: BLOCK_TYPES.TIRE },
      { x: 766, y: 333, type: BLOCK_TYPES.TIRE },
      { x: 401, y: 344, type: BLOCK_TYPES.TIRE },
      { x: 406, y: 346, type: BLOCK_TYPES.TIRE },
      { x: 423, y: 342, type: BLOCK_TYPES.TIRE },
      { x: 438, y: 349, type: BLOCK_TYPES.TIRE },
      { x: 446, y: 348, type: BLOCK_TYPES.TIRE },
      { x: 500, y: 342, type: BLOCK_TYPES.TIRE },
      { x: 513, y: 343, type: BLOCK_TYPES.TIRE },
      { x: 520, y: 349, type: BLOCK_TYPES.TIRE },
      { x: 531, y: 348, type: BLOCK_TYPES.TIRE },
      { x: 584, y: 347, type: BLOCK_TYPES.TIRE },
      { x: 598, y: 343, type: BLOCK_TYPES.TIRE },
      { x: 608, y: 344, type: BLOCK_TYPES.TIRE },
      { x: 617, y: 345, type: BLOCK_TYPES.TIRE },
      { x: 637, y: 347, type: BLOCK_TYPES.NORMAL },
      { x: 682, y: 350, type: BLOCK_TYPES.TIRE },
      { x: 697, y: 345, type: BLOCK_TYPES.TIRE },
      { x: 710, y: 344, type: BLOCK_TYPES.TIRE },
      { x: 723, y: 344, type: BLOCK_TYPES.TIRE },
      { x: 393, y: 355, type: BLOCK_TYPES.TIRE },
      { x: 413, y: 362, type: BLOCK_TYPES.TIRE },
      { x: 421, y: 362, type: BLOCK_TYPES.TIRE },
      { x: 433, y: 358, type: BLOCK_TYPES.TIRE },
      { x: 451, y: 357, type: BLOCK_TYPES.TIRE },
      { x: 493, y: 354, type: BLOCK_TYPES.TIRE },
      { x: 513, y: 357, type: BLOCK_TYPES.TIRE },
      { x: 519, y: 356, type: BLOCK_TYPES.TIRE },
      { x: 536, y: 357, type: BLOCK_TYPES.TIRE },
      { x: 585, y: 356, type: BLOCK_TYPES.TIRE },
      { x: 600, y: 362, type: BLOCK_TYPES.TIRE },
      { x: 613, y: 359, type: BLOCK_TYPES.TIRE },
      { x: 622, y: 362, type: BLOCK_TYPES.TIRE },
      { x: 632, y: 360, type: BLOCK_TYPES.FUEL },
      { x: 680, y: 358, type: BLOCK_TYPES.TIRE },
      { x: 700, y: 354, type: BLOCK_TYPES.TIRE },
      { x: 711, y: 357, type: BLOCK_TYPES.TIRE },
      { x: 719, y: 359, type: BLOCK_TYPES.FUEL }
  ]
  };







// === 블럭 색상 매핑 ===. 나중에 이미지로
function getColorByType(type, hitCount = 0) {
  switch (type) {
    case BLOCK_TYPES.METAL:
      if (hitCount === 0) return "#aaa";
      if (hitCount === 1) return "#888";
      if (hitCount === 2) return "#555";
      return "#333";
    case BLOCK_TYPES.TIRE: return "#444";
    case BLOCK_TYPES.FUEL: return "#f00";
    case BLOCK_TYPES.LIGHT: return "#fff";
    case BLOCK_TYPES.GLASS: return "#0ff";
    //case BLOCK_TYPES.ITEM_BARRIER: return "#f5a";
    case BLOCK_TYPES.ITEM_COOLER: return "#5af";
    case BLOCK_TYPES.ITEM_CUTTER: return "#fa0";
    case BLOCK_TYPES.ITEM_GUIDE: return "#5f5";
    case BLOCK_TYPES.NORMAL:
    default: return "#ccc";
  }
}

// ===== GameState.js =====

const GameState = {
  nickname: "",
  selectedCharacter: null,
  selectedStage: 1,
  score: 0,
  comboScore: 0,
  comboCount: 0,
  totalScore: 0,
  totalComboScore: 0,
  upgrades: [],
  failedUpgrades: [],
  reinforceChances: 3,
  settings: {
    bgm: true,
    sfx: true,
    cursor: true,
    bgm: true,
  },
  mapVisitedOnce: false
};

function resetGameState() {
  GameState.score = 0;
  GameState.comboScore = 0;
  GameState.comboCount = 0;
  GameState.totalComboScore = 0;
  GameState.totalScore = 0;
  GameState.selectedStage = 1;
  GameState.upgrades = [];
  GameState.failedUpgrades = [];
  GameState.reinforceChances = 0;
  GameState.hasCooler = false;
  GameState.hasCutter = false;
  GameState.barrierCount = 0;
}
$('#retryBtn').on('click', () => {
  resetGameState();
  goToMapScene();
});

$('#restartBtn').on('click', () => {
  resetGameState();
  goToMapScene();
});
// ===== GameStartUI.js =====

// import { goToStoryScene } from './StoryScene.js';

function showStartUI() {
  $('body').html(`
  <div style="text-align:center; position: relative;">
      <canvas id="gameCanvas" width="1000" height="600"
      style="background-color: black; border: none;"></canvas>
      <audio id="bgm" src="audio/opening.mp3" autoplay loop muted></audio>
  </div> 
  `);

  // 이제 canvas가 DOM에 들어왔기 때문에 여기서 접근 가능
  const canvas = document.getElementById("gameCanvas");
  const ctx = canvas.getContext("2d");

  const bgImage = new Image();
  bgImage.src = "startPage.png"; // 이미지 경로는 필요시 수정

  const startButtonImg = new Image();
  startButtonImg.src = "StartBtn.png";

  const startButtonHoverImg = new Image();
  startButtonHoverImg.src = "StartBtnHover.png";

  const button = {
    x: 400,
    y: 420,
    width: 200,
    height: 60
  };


  let isHoveringStartBtn = false;
  let imagesLoaded = 0;

  function tryDrawStartScene() {
    if (imagesLoaded === 2) {
      ctx.drawImage(bgImage, 0, 0, canvas.width, canvas.height);
      ctx.drawImage(startButtonImg, button.x, button.y, button.width, button.height);
    }
  }

  bgImage.onload = () => {
    imagesLoaded++;
    tryDrawStartScene();
  };

  startButtonImg.onload = () => {
    imagesLoaded++;
    tryDrawStartScene();
  };



  canvas.addEventListener("click", function (e) {
    const rect = canvas.getBoundingClientRect();
    const mx = e.clientX - rect.left;
    const my = e.clientY - rect.top;

    if (
      mx >= button.x &&
      mx <= button.x + button.width &&
      my >= button.y &&
      my <= button.y + button.height
    ) {
      // START 버튼 눌렀을 때 실행할 동작
      goToStoryScene();
    }
  });

  function drawStartButton(ctx) {
    const img = isHoveringStartBtn ? startButtonHoverImg : startButtonImg;
    ctx.drawImage(img, 400, 420, 200, 60);
  }

  canvas.addEventListener("mousemove", function (e) {
    const rect = canvas.getBoundingClientRect();
    const mx = e.clientX - rect.left;
    const my = e.clientY - rect.top;

    const hovering = mx >= 400 && mx <= 600 && my >= 420 && my <= 480;
    if (hovering !== isHoveringStartBtn) {
      isHoveringStartBtn = hovering;
      ctx.drawImage(bgImage, 0, 0, canvas.width, canvas.height);
      drawStartButton(ctx);
    }
  });


}

// ===== StoryScene.js =====

// 파일: StoryScene.js - 이름 입력란 조건부 노출로 수정
// import { GameState } from './GameState.js';
// import { goToCharacterSelect } from './CharacterSelector.js';

function goToStoryScene() {
  $('body').html(`
    <div style="text-align:center;position:relative;">
      <canvas id="gameCanvas" width="1000" height="600" style="background-color:black; border:none;"></canvas>
      <img id="skipBtn_w" src="skip_btn_w.png"  
      style="position:absolute; 
      top:20px; right:20px; width:50px; z-index:10;">
    </div>
  `);

  const canvas = document.getElementById("gameCanvas");
  const ctx = canvas.getContext("2d");

  const storyText = [
    "평생을 운동 선수로 살아온 당신...",
    "안타깝게도 눈에 띄는 성적을 보이지는 못했다.",
    "당신의 이름은?"
  ];

  let storyIndex = 0;
  let nickname = "";
  let isEnteringName = false;
  let promptBoxImageLoaded = false;

  const promptBoxImage = new Image();
  promptBoxImage.src = "pop-up.png";
  promptBoxImage.onload = () => {
    promptBoxImageLoaded = true;
    if (isEnteringName) {
      drawNameInputBox();
    }
    document.fonts.ready.then(() => {
      drawStoryScene();
    });
  };

  function drawStoryScene() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "white";
    ctx.font = "28px DungGeunMo, sans-serif";
    ctx.textAlign = "center";
    ctx.fillText(storyText[storyIndex], canvas.width / 2, 300);
  }


  //이름 입력 받는 창 띄움
  //조합형이 적용이 안되므로 html에서 관련된 소스 불러와 사용 중
  function drawNameInputBox() {
    drawStoryScene();

    const boxWidth = promptBoxImage.width || 400;
    const boxHeight = promptBoxImage.height || 160;
    const boxX = (canvas.width - boxWidth) / 2;
    const boxY = (canvas.height - boxHeight) / 2 - 40;

    if (promptBoxImageLoaded) {
      ctx.drawImage(promptBoxImage, boxX, boxY);
    }

    ctx.fillStyle = "white";
    ctx.font = "24px DungGeunMo, sans-serif";
    ctx.textAlign = "center";
    ctx.fillText("당신의 이름은?", canvas.width / 2, boxY + 40);

    const composed = Hangul.assemble(nickname.split(''));
    ctx.fillText(composed + "_", canvas.width / 2, boxY + 85);
  }

  function advanceStory() {
    if (storyIndex < storyText.length - 1) {
      storyIndex++;
      drawStoryScene();
      if (storyIndex === storyText.length - 1) {
        isEnteringName = true;
        drawNameInputBox();
      }
    }
  }

  // 마우스 클릭 --> 다음 대사
  canvas.addEventListener("click", advanceStory);

  // 키보드 이벤트: Space,Enter --> 다음 / skipBtn_w --> Skip
  //앤터 입력시 스킵된다는 문구 추가 필요
  $(document).on("keydown", (e) => {
    if (!isEnteringName) {
      if (e.code === "Space" || e.code === "Enter") {
        e.preventDefault();
        advanceStory();
      }
    } else {
      // 이름 입력 중
      if (e.key === "Backspace") {
        nickname = nickname.slice(0, -1);
      } else if (e.key.length === 1 && nickname.length < 10) {
        nickname += e.key;
      } else if (e.key === "Enter") {
        const composed = Hangul.assemble(nickname.split('')).trim() || "랄푸";
        GameState.nickname = composed;
        isEnteringName = false;
        $(document).off("keydown");
        canvas.removeEventListener("click", advanceStory);
        goToCharacterSelect();
        return;
      }
      drawNameInputBox();
    }
  });
  drawStoryScene();

  $('#skipBtn_w').on('click', () => {
    GameState.nickname = "랄푸";
    $(document).off("keydown");
    canvas.removeEventListener("click", advanceStory);
    goToCharacterSelect();
  });
}





// ===== CharacterSelector.js =====

// import { GameState } from './GameState.js';
// import { goToMapScene } from './MapScene.js';

// ===== CharacterSelector.js =====

// import { GameState } from './GameState.js';
// import { goToMapScene } from './MapScene.js';

// 캐릭터 선택 화면 구현 (캔버스 기반) - 시각 효과 강화 및 배경, 말풍선 추가 버전
// 주요 기능:
// 1. 3개의 캐릭터를 한 화면에 표시
// 2. 가운데 캐릭터는 컬러와 원본 크기, 좌우 캐릭터는 작고 흐리게 (양옆 배경 기준 위치 조정)
// 3. 캐릭터마다 배경 추가 (야구장 등) → 중앙 캐릭터 뒤에만 배경을 소형으로 출력
// 4. 호버 시 말풍선 + 설명 멘트 팝업
// 5. 선택 애니메이션 포함, GameState 저장

const characters = [
  { name: "야구선수", image: "baseballP.png", bg: "baseball_bg.png", hint: "홈런을 노려라!" },
  { name: "테니스선수", image: "tennisP.png", bg: "tennis_bg.png", hint: "강력한 서브!" },
  { name: "축구선수", image: "soccerP.png", bg: "soccer_bg.png", hint: "골을 향해!" },
];

let imageCache = {}; // 캐릭터 이미지 캐시
let currentIndex = 0; // 현재 선택된 캐릭터 인덱스
let selected = false; // 캐릭터가 선택되었는지 여부
let imagesLoaded = 0; // 로딩 완료된 이미지 수
let totalImagesToLoad = characters.length * 2; // 캐릭터 이미지 + 배경 이미지 개수
let animating = false; // 애니메이션 상태 여부

function goToCharacterSelect() {
  //이미지 로딩 초기화
  imagesLoaded = 0;
  totalImagesToLoad = characters.length * 2;
  imageCache = {};
  selected = false;
  let isHoveringSelect = false;
  let lastHoveredIndex = -1;
  // 캔버스 초기화
  document.body.innerHTML = '<div style="text-align:center;"><canvas id="gameCanvas" width="1000" height="600" style="background-color:black; border:none;"></canvas></div>';
  const canvas = document.getElementById("gameCanvas");
  const ctx = canvas.getContext("2d");

  // 이미지 로딩
  characters.forEach((char) => {
    const img = new Image();
    img.src = char.image;
    img.onload = () => {
      imageCache[char.name] = img;
      imagesLoaded++;
      if (imagesLoaded === totalImagesToLoad) startCharacterSelectScene();
    };

    const bg = new Image();
    bg.src = char.bg;
    bg.onload = () => {
      char.bgImage = bg;
      imagesLoaded++;
      if (imagesLoaded === totalImagesToLoad) startCharacterSelectScene();
    };
  });

  function startCharacterSelectScene() {
    drawCharacterScene();
    canvas.addEventListener("mousemove", onHover);
    canvas.addEventListener("click", onClick);
    $(document).on("keydown", onKeyDown);
  }

  // 캐릭터 선택 시 호출
  function selectCharacter() {
    if (selected) return;
    selected = true;
    GameState.selectedCharacter = characters[currentIndex];
    canvas.removeEventListener("click", onClick);
    $(document).off("keydown", onKeyDown);
    goToStoryScene2();
  }

  // 전체 화면 그리기 함수
  function drawCharacterScene(hoveredIndex = -1) {
    const char = characters[currentIndex];

    // 배경 검정색 초기화
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // 중앙 배경 출력
    if (char.bgImage && char.bgImage.complete) {
      const bgW = 500;
      const bgH = 280;
      const bgX = (canvas.width - bgW) / 2;
      const bgY = (canvas.height - bgH) / 2 - 20;
      ctx.drawImage(char.bgImage, bgX, bgY, bgW, bgH);
    }

    // 상단 안내 텍스트 출력
    ctx.fillStyle = "white";
    ctx.textAlign = "center";
    ctx.font = "28px DungGeunMo, sans-serif";
    ctx.fillText("캐릭터 선택", canvas.width / 2, 50);
    ctx.font = "20px DungGeunMo, sans-serif";
    ctx.fillText(`${GameState.nickname}님 환영합니다!`, canvas.width / 2, 80);

    // 캐릭터 3명 그리기 (좌/중앙/우)
    const positions = [-350, 0, 350];
    const scales = [0.7, 1.0, 0.7];
    const alphas = [0.4, 1.0, 0.4];

    for (let i = 0; i < 3; i++) {
      const index = (currentIndex - 1 + i + characters.length) % characters.length;
      const char = characters[index];
      const img = imageCache[char.name];
      if (!img) continue;

      // 캐릭터 이미지 위치 및 투명도/스케일 조정
      ctx.save();
      ctx.translate(canvas.width / 2 + positions[i], canvas.height / 2 - 30);
      ctx.scale(scales[i], scales[i]);
      ctx.globalAlpha = alphas[i];
      ctx.drawImage(img, -100, -100, 200, 200);
      ctx.restore();

      // 중앙 캐릭터 이름 출력 (외곽선 포함)
      if (i === 1) {
        ctx.font = "bold 36px DungGeunMo, sans-serif";
        ctx.lineWidth = 4;
        ctx.strokeStyle = "black";
        ctx.strokeText(char.name, canvas.width / 2, canvas.height / 2 + 90); // 살짝 위로 이동
        ctx.fillStyle = "white";
        ctx.fillText(char.name, canvas.width / 2, canvas.height / 2 + 90);
      }
    }

    // 양쪽 화살표 출력
    ctx.font = "48px DungGeunMo, sans-serif";
    ctx.fillText("⬅️", 60, canvas.height / 2 + 10);
    ctx.fillText("➡️", canvas.width - 60, canvas.height / 2 + 10);

    // 선택 버튼 출력 (조금 아래로 이동)
    if (isHoveringSelect) {
      ctx.fillStyle = "white";
      ctx.fillRect(canvas.width / 2 - 100, canvas.height / 2 + 140, 200, 60);
      ctx.strokeStyle = "black";
      ctx.strokeRect(canvas.width / 2 - 100, canvas.height / 2 + 140, 200, 60);
      ctx.fillStyle = "black";
    } else {
      ctx.fillStyle = "black";
      ctx.fillRect(canvas.width / 2 - 100, canvas.height / 2 + 140, 200, 60);
      ctx.strokeStyle = "white";
      ctx.strokeRect(canvas.width / 2 - 100, canvas.height / 2 + 140, 200, 60);
      ctx.fillStyle = "white";
    }
    ctx.font = "bold 24px DungGeunMo, sans-serif";
    ctx.fillText("선택", canvas.width / 2, canvas.height / 2 + 175);

    // 하단 안내 메시지
    ctx.font = "18px DungGeunMo, sans-serif";
    ctx.fillStyle = "white";
    ctx.fillText("← → 키 or 마우스로 이동, Enter 또는 선택 클릭", canvas.width / 2, 570);

    // 말풍선 텍스트 표시 (호버 시)
    if (hoveredIndex !== -1) {
      const char = characters[hoveredIndex];
      const hint = char.hint;
      ctx.fillStyle = "white";
      ctx.fillRect(canvas.width / 2 - 100, 110, 200, 50);
      ctx.strokeStyle = "black";
      ctx.strokeRect(canvas.width / 2 - 100, 110, 200, 50);
      ctx.fillStyle = "black";
      ctx.font = "18px DungGeunMo, sans-serif";
      ctx.fillText(hint, canvas.width / 2, 140);
    }
  }

  // 클릭 이벤트 처리
  function onClick(e) {
    if (animating) return;
    const rect = canvas.getBoundingClientRect();
    const mx = e.clientX - rect.left;
    const my = e.clientY - rect.top;

    // 왼쪽 화살표 클릭
    if (mx <= 120 && my >= canvas.height / 2 - 50 && my <= canvas.height / 2 + 50) {
      currentIndex = (currentIndex - 1 + characters.length) % characters.length;
      drawCharacterScene();
    }
    // 오른쪽 화살표 클릭
    else if (mx >= canvas.width - 120 && my >= canvas.height / 2 - 50 && my <= canvas.height / 2 + 50) {
      currentIndex = (currentIndex + 1) % characters.length;
      drawCharacterScene();
    }
    // 선택 버튼 클릭
    else if (mx >= canvas.width / 2 - 100 && mx <= canvas.width / 2 + 100 && my >= canvas.height / 2 + 140 && my <= canvas.height / 2 + 200) {
      selectCharacter();
    }
  }

  // 키보드 이벤트 처리
  function onKeyDown(e) {
    if (animating) return;
    if (e.key === "ArrowLeft") {
      currentIndex = (currentIndex - 1 + characters.length) % characters.length;
      drawCharacterScene();
    } else if (e.key === "ArrowRight") {
      currentIndex = (currentIndex + 1) % characters.length;
      drawCharacterScene();
    } else if (e.key === "Enter") {
      selectCharacter();
    }
  }

  // 마우스 hover 시 말풍선 표시 여부 판단 & 선택 hover 판단
  function onHover(e) {
    const rect = canvas.getBoundingClientRect();
    const mx = e.clientX - rect.left;
    const my = e.clientY - rect.top;

    const inSelectBox =
      mx >= canvas.width / 2 - 100 && mx <= canvas.width / 2 + 100 &&
      my >= canvas.height / 2 + 140 && my <= canvas.height / 2 + 200;

    const inCharacter =
      mx >= canvas.width / 2 - 100 && mx <= canvas.width / 2 + 100 &&
      my >= canvas.height / 2 - 100 && my <= canvas.height / 2 + 100;

    let needRedraw = false;

    if (inSelectBox !== isHoveringSelect) {
      isHoveringSelect = inSelectBox;
      needRedraw = true;
    }

    const hovered = inCharacter ? currentIndex : -1;
    if (hovered !== lastHoveredIndex) {
      lastHoveredIndex = hovered;
      needRedraw = true;
    }

    if (needRedraw) {
      drawCharacterScene(lastHoveredIndex);
    }
  }
}

//==========스토리==========
function goToStoryScene2() {
  $('body').html(`
    <style>
      canvas, #skipBtn {
        cursor: url("cursor.png") 16 16, auto !important;
      }
    </style>

    <div style="text-align:center; position:relative;">
      <canvas id="gameCanvas" width="1000" height="600" style="background-color:black; border:none;"></canvas>
      <img id="skipBtn" src="skipBtn.png" style="position:absolute; top:20px; right:20px; width:50px; z-index:10;">
    </div>
  `);

  const canvas = document.getElementById("gameCanvas");
  const ctx = canvas.getContext("2d");

  const bg = new Image();
  bg.src = "StoryPage.png";

  const bubble = new Image();
  bubble.src = "story.png";

  const storyLines = [
    { speaker: "아버지", text: `${GameState.nickname}... 우리 약속했지 않냐.` },
    { speaker: "아버지", text: "이제 아빠도 나이를 계속 먹어. 근육도 다 빠져서 일을 못해~" },
    { speaker: "아버지", text: "이제 운동은 그만 하고 아빠 폐차장 사업을 물려 받으렴." },
    { speaker: GameState.nickname, text: "(그래... 이제는 더 늦기 전에 폐차장으로 가야해.)" },
    { speaker: GameState.nickname, text: "네 아버지. 해볼게요!" },
    { speaker: "아버지", text: "그래그래. 비록 운동에서는 못했지만, 폐차 업계에서는 꼭 정상에 오르길 바란다." },
    { speaker: GameState.nickname, text: "네!!! 아버지!!!!" }
  ];
  let currentLine = 0;

  function drawScene() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    if (bg.complete) ctx.drawImage(bg, 0, 0, canvas.width, canvas.height);

    const bw = 900;
    const bh = 140;
    const bx = (canvas.width - bw) / 2;
    const by = canvas.height - bh - 30;

    if (bubble.complete)
      ctx.drawImage(bubble, bx, by, bw, bh);

    const current = storyLines[currentLine];

    ctx.fillStyle = "black";
    ctx.font = "16px DungGeunMo, sans-serif";
    ctx.textAlign = "left";
    ctx.fillText(current.speaker, bx + 20, by + 26);

    ctx.font = "18px DungGeunMo, sans-serif";
    ctx.textAlign = "center";
    ctx.fillText(current.text, canvas.width / 2, by + 80);
  }

  bg.onload = drawScene;
  bubble.onload = drawScene;

  function advanceStory() {
    if (currentLine < storyLines.length - 1) {
      currentLine++;
      drawScene();
    } else {
      goToMapScene();  // 모든 대사 끝나면 맵 씬으로 이동
    }
  }

  canvas.addEventListener("click", function (e) {
    const rect = canvas.getBoundingClientRect();
    const mx = e.clientX - rect.left;
    const my = e.clientY - rect.top;

    const bw = 900;
    const bh = 140;
    const bx = (canvas.width - bw) / 2;
    const by = canvas.height - bh - 30;

    // 말풍선 영역 안일 때
    if (mx >= bx && mx <= bx + bw && my >= by && my <= by + bh) {
      advanceStory();
    }
  });

  $('#skipBtn').on('click', () => {
    $(document).off("keydown");
    goToMapScene();
  });

  $(document).on("keydown", function (e) {
    if (e.code === "Enter" || e.code === "Space") {
      e.preventDefault();
      advanceStory();
    }
  });
}


// ===== MapScene.js =====

// import { GameState } from './GameState.js';
// import { startStage } from './GameStage.js';
function updateItemUI() {
  const $area = $('#itemStatusArea');
  $area.empty();

  if (GameState.hasCooler) {
    $area.append('<span id="coolerStatus">❄️</span>');
  }
  if (GameState.hasCutter) {
    $area.append('<span id="cutterStatus">🔥</span>');
  }
  if ((GameState.barrierCount || 0) > 0) {
    $area.append(`<span id="barrierStatus">🛡️ ×${GameState.barrierCount}</span>`);
  }
  if ($area.children().length === 0) {
    $area.html('&nbsp;');
  }
}


function goToMapScene() {
  GameState.score = 0;
  GameState.comboScore = 0;
  GameState.comboCount = 0;
  GameState.upgrades = [];
  GameState.failedUpgrades = [];
  GameState.reinforceChances = 0;

  let selectedIndex = 0;
  const stageImages = ["stage1.png", "stage2.png", "stage3.png"];
  const stageLabels = ["경차 해체", "트럭 해체", "탱크 해체"];

  $('body').html(`
    <div style="position: relative; text-align: center;">
      <canvas id="gameCanvas" width="1000" height="600" style="background-color:black;"></canvas>
    </div>
  `);

  const canvas = document.getElementById("gameCanvas");
  const ctx = canvas.getContext("2d");

  const bgImg = new Image();
  bgImg.src = "stageBackground.png";

  const arrowImg = new Image();
  arrowImg.src = "arrow.png";

  const stageImgs = stageImages.map(src => {
    const img = new Image();
    img.src = src;
    return img;
  });

  function drawScene() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(bgImg, 0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "white";
    ctx.strokeStyle = "black";
    ctx.lineWidth = 4;
    ctx.font = "20px DungGeunMo, sans-serif";
    ctx.textAlign = "center";
    ctx.fillText("더블 클릭/엔터 시 스테이지 시작", canvas.width / 2, canvas.height - 10);

    const spacing = 300;
    const startX = 80;
    const y = 410;
    const displayWidth = 240;

    for (let i = 0; i < stageImgs.length; i++) {
      const img = stageImgs[i];
      const aspectRatio = img.height / img.width;
      const displayHeight = displayWidth * aspectRatio;
      const x = startX + i * spacing;

      const yOffset = (i === 1) ? -10 : (i === 2 ? 5 : 0);
      const yPos = y + yOffset;

      ctx.drawImage(img, x, yPos, displayWidth, displayHeight);
      ctx.font = "18px DungGeunMo, sans-serif";
      ctx.strokeText(stageLabels[i], x + displayWidth / 2, yPos + displayHeight + 25);
      ctx.fillText(stageLabels[i], x + displayWidth / 2, yPos + displayHeight + 25);
    }

    // 화살표
    const arrowWidth = 105;
    const arrowHeight = 140;
    const arrowX = startX + selectedIndex * spacing + displayWidth / 2 - arrowWidth / 2;
    const arrowY = y - arrowHeight - 70;
    ctx.drawImage(arrowImg, arrowX, arrowY, arrowWidth, arrowHeight);
  }

  function getSelectedIndexByMouse(mx, my) {
    const spacing = 300;
    const startX = 80;
    const y = 410;
    const displayWidth = 240;

    for (let i = 0; i < stageImgs.length; i++) {
      const img = stageImgs[i];
      const aspectRatio = img.height / img.width;
      const displayHeight = displayWidth * aspectRatio;

      const x = startX + i * spacing;
      const yOffset = (i === 1) ? -10 : (i === 2 ? 5 : 0);
      const yPos = y + yOffset;

      if (mx >= x && mx <= x + displayWidth &&
        my >= yPos && my <= yPos + displayHeight) {
        return i;
      }
    }
    return -1;
  }

  canvas.addEventListener("click", function (e) {
    const rect = canvas.getBoundingClientRect();
    const mx = e.clientX - rect.left;
    const my = e.clientY - rect.top;

    const index = getSelectedIndexByMouse(mx, my);
    if (index !== -1) {
      selectedIndex = index;
      drawScene();
    }
  });

  canvas.addEventListener("dblclick", function (e) {
    const rect = canvas.getBoundingClientRect();
    const mx = e.clientX - rect.left;
    const my = e.clientY - rect.top;

    // 선택된 스테이지의 위치 계산
    const spacing = 300;
    const startX = 80;
    const y = 410;
    const displayWidth = 240;

    const img = stageImgs[selectedIndex];
    const aspectRatio = img.height / img.width;
    const displayHeight = displayWidth * aspectRatio;

    const x = startX + selectedIndex * spacing;
    const yOffset = (selectedIndex === 1) ? -10 : (selectedIndex === 2 ? 5 : 0);
    const yPos = y + yOffset;

    const within =
      mx >= x && mx <= x + displayWidth &&
      my >= yPos && my <= yPos + displayHeight;

    if (within) {
      GameState.selectedStage = selectedIndex + 1;
      startStage(GameState.selectedStage);
    }
  });

  $(document).on("keydown", function (e) {
    if (e.key === "Enter") {
      GameState.selectedStage = selectedIndex + 1;
      startStage(GameState.selectedStage);
    } else if (e.key === "ArrowLeft") {
      selectedIndex = (selectedIndex - 1 + stageImgs.length) % stageImgs.length;
      drawScene();
    } else if (e.key === "ArrowRight") {
      selectedIndex = (selectedIndex + 1) % stageImgs.length;
      drawScene();
    }
  });

  let loadedCount = 0;
  const totalImages = 2 + stageImgs.length;

  function tryDrawScene() {
    loadedCount++;
    if (loadedCount === totalImages) {
      drawScene();
    }
  }

  bgImg.onload = tryDrawScene;
  arrowImg.onload = tryDrawScene;
  stageImgs.forEach(img => img.onload = tryDrawScene);
}

let canvas, ctx;
let ball, paddle, bricks;
let score = 0;
let comboScore = 0;
let comboCount = 0;
let comboTimer = null;
let isGameOver = false;
let animationId = null;

const backgroundImg = new Image();
backgroundImg.src = "stage.png";

function startStage(stageNumber) {
  score = 0;
  GameState.hasCooler = false;
  GameState.hasCutter = false;

  comboScore = 0;
  comboCount = 0;
  isGameOver = false;

  $('body').html(`
    <div class="game-container">
      <div class="score">
        총 점수: <span id="score">0</span> 
        / 콤보 횟수: <span id="combo">0</span>
      </div>
      <div class="item-status" id="itemStatusArea"></div>
      <canvas id="gameCanvas" width="1000" height="600"></canvas>
    </div>
  `);

  canvas = document.getElementById("gameCanvas");
  ctx = canvas.getContext("2d");

  updateItemUI();

  initGameElements();
  draw();
}

// 캐릭터별 공 이미지와 반지름 정보
const ballInfoMap = {
  "야구선수": {
    img: (() => {
      const img = new Image();
      img.src = "baseball_img.png";
      return img;
    })(),
    radius: 14,
    speedFactor: 1.0
  },
  "축구선수": {
    img: (() => {
      const img = new Image();
      img.src = "soccer_img.png";
      return img;
    })(),
    radius: 18,
    speedFactor: 0.8
  },
  "테니스선수": {
    img: (() => {
      const img = new Image();
      img.src = "tennis_img.png";
      return img;
    })(),
    radius: 12,
    speedFactor: 1.2
  }
};


function initGameElements() {
  const selected = GameState.selectedCharacter.name;
  const info = ballInfoMap[selected] || { radius: 14, speedFactor: 1.0 };

  const stageSpeed = 2 + GameState.selectedStage +
    (GameState.upgrades.includes("스피드업") ? 1 : 0);
  const baseSpeed = stageSpeed * info.speedFactor;

  const angleDeg = Math.random() * 60 + 30;
  const angleRad = angleDeg * (Math.PI / 180);
  const direction = Math.random() < 0.5 ? -1 : 1;

  ball = {
    x: canvas.width / 2,
    y: canvas.height - 60 - info.radius,
    dx: Math.cos(angleRad) * baseSpeed * direction,
    dy: -Math.sin(angleRad) * baseSpeed,
    radius: info.radius,
    speed: baseSpeed,
    originalSpeed: baseSpeed,
    img: info.img
  };

  const paddleUpgradeCount = GameState.upgrades.filter(x => x === "패들강화").length;
  const paddleLevel = Math.min(1 + paddleUpgradeCount, 3);

  const base = GameState.selectedCharacter?.name || "야구선수";
  const prefix = base === "야구선수" ? "b" :
    base === "축구선수" ? "s" :
      base === "테니스선수" ? "t" : "b";

  const paddleImgName = `paddles/${prefix}Paddle${paddleLevel}.png`;

  const paddleImg = new Image();
  paddleImg.src = paddleImgName;

  paddle = {
    width: 100, // 임시값
    height: 20,
    x: (canvas.width - 100) / 2,
    rightPressed: false,
    leftPressed: false,
    img: paddleImg
  };

  paddleImg.onload = () => {
    paddle.height = 12;  // 고정된 기존 paddle 높이
    const scale = paddle.height / paddleImg.height;  // 비율 유지
    paddle.width = paddleImg.width * scale;          // 비율에 따라 너비 조정
    paddle.x = (canvas.width - paddle.width) / 2;    // 가운데 정렬
    paddle.y = canvas.height - paddle.height - 10;
  };


  const layout = levelBlockLayouts[GameState.selectedStage];
  bricks = layout.map(block => ({
    x: block.x,
    y: block.y,
    type: block.type,
    status: 1,
    hitCount: 0,
    maxHits: block.type === BLOCK_TYPES.METAL ? 3 : 1,
    effectStage: null,
    effectTimer: 0
  }));

  $(document).off('keydown').on('keydown', function (e) {
    if (e.key === "ArrowRight") paddle.rightPressed = true;
    if (e.key === "ArrowLeft") paddle.leftPressed = true;
  });

  $(document).on('keyup', function (e) {
    if (e.key === "ArrowRight") paddle.rightPressed = false;
    if (e.key === "ArrowLeft") paddle.leftPressed = false;
  });
}

// ✅ 정리된 draw 함수 - 중복 제거 및 반사 보정 포함
function draw() {
  if (isGameOver) return;

  ctx.clearRect(0, 0, canvas.width, canvas.height);
  if (backgroundImg.complete) {
    ctx.drawImage(backgroundImg, 0, 0, canvas.width, canvas.height);
  } else {
    ctx.fillStyle = "#000";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  }

  drawBricks();
  drawBall();
  drawPaddle();
  collisionDetection();
  checkGameClear();

  // 벽 반사
  if (ball.x + ball.dx > canvas.width - ball.radius || ball.x + ball.dx < ball.radius) {
    ball.dx = -ball.dx;
  }
  if (ball.y + ball.dy < ball.radius) {
    ball.dy = -ball.dy;
  }

  // 바닥에 닿음
  const tolerance = 10;
  if (ball.y + ball.dy > canvas.height - ball.radius - paddle.height - 10) {
    if (ball.x + ball.radius >= paddle.x - tolerance &&
    ball.x - ball.radius <= paddle.x + paddle.width + tolerance) {
      ball.dy = -ball.dy;
      if (ball.collidedWithPaddleOnceAfterCooler) {
        ball.speed = ball.originalSpeed || 3;
        ball.collidedWithPaddleOnceAfterCooler = false;
        GameState.hasCooler = false;
        updateItemUI();
      }
    } else {
      if ((GameState.barrierCount || 0) > 0) {
        GameState.barrierCount--;
        updateItemUI();
        cancelAnimationFrame(animationId);
        animationId = null;

        let countdown = 3;
        const overlay = document.createElement('div');
        overlay.style.position = 'absolute';
        overlay.style.top = '0';
        overlay.style.left = '0';
        overlay.style.width = '100%';
        overlay.style.height = '100%';
        overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
        overlay.style.color = 'white';
        overlay.style.fontSize = '80px';
        overlay.style.display = 'flex';
        overlay.style.alignItems = 'center';
        overlay.style.justifyContent = 'center';
        overlay.style.zIndex = '1000';
        overlay.id = 'barrierOverlay';
        document.body.appendChild(overlay);

        const interval = setInterval(() => {
          overlay.textContent = countdown;
          countdown--;
          if (countdown < 0) {
            clearInterval(interval);
            document.body.removeChild(overlay);

            // 공과 패들 위치 초기화
            ball.x = canvas.width / 2;
            ball.y = canvas.height - 30;

            const isLeft = Math.random() < 0.5;
            const angleDeg = isLeft
              ? Math.random() * 15 + 60   // 왼쪽으로 날아감
              : Math.random() * 15 + 105; // 오른쪽으로 날아감
            const angleRad = angleDeg * (Math.PI / 180);
            const direction = Math.random() < 0.5 ? -1 : 1;
            const speed = ball.speed;

            ball.dx = Math.cos(angleRad) * speed * direction;
            ball.dy = -Math.sin(angleRad) * speed;

            paddle.x = (canvas.width - paddle.width) / 2;

            // ✅ draw 직접 호출 대신 안전하게 루프 재개
            animationId = requestAnimationFrame(draw);
          }
        }, 1000);

        return;
      } else {
        gameOver();
        return;
      }
    }
  }

  // 속도 및 반사 보정
  let magnitude = Math.sqrt(ball.dx * ball.dx + ball.dy * ball.dy);
  if (magnitude === 0) {
    ball.dx = 1;
    ball.dy = -1;
    magnitude = Math.sqrt(ball.dx * ball.dx + ball.dy * ball.dy);
  }

  ball.speed = Math.min(ball.speed, ball.originalSpeed || 3);

  // 수직·수평 방지 보정
  const minComponent = 0.3;
  let dxNorm = ball.dx / magnitude;
  let dyNorm = ball.dy / magnitude;
  if (Math.abs(dxNorm) < minComponent) dxNorm = minComponent * Math.sign(dxNorm);
  if (Math.abs(dyNorm) < minComponent) dyNorm = minComponent * Math.sign(dyNorm);
  const normMag = Math.sqrt(dxNorm * dxNorm + dyNorm * dyNorm);
  ball.dx = (dxNorm / normMag) * ball.speed;
  ball.dy = (dyNorm / normMag) * ball.speed;

  ball.x += ball.dx;
  ball.y += ball.dy;

  if (paddle.rightPressed && paddle.x < canvas.width - paddle.width) {
    paddle.x += 5;
  } else if (paddle.leftPressed && paddle.x > 0) {
    paddle.x -= 5;
  }

  animationId = requestAnimationFrame(draw);
}

function drawBall() {
  const size = ball.radius * 2;
  if (ball.img?.complete) {
    ctx.drawImage(ball.img, ball.x - ball.radius, ball.y - ball.radius, size, size);
  } else {
    // 이미지 로딩 안 됐을 경우 대체 표시
    ctx.beginPath();
    ctx.arc(ball.x, ball.y, ball.radius, 0, Math.PI * 2);
    ctx.fillStyle = "#fff";
    ctx.fill();
    ctx.closePath();
  }
}


function drawPaddle() {
  if (paddle.img?.complete) {
    ctx.drawImage(paddle.img, paddle.x, paddle.y, paddle.width, paddle.height);
  } else {
    ctx.fillStyle = "#fff";
    ctx.fillRect(
      paddle.x,
      canvas.height - paddle.height - 10,
      paddle.width,
      paddle.height
    );
  }
}

function drawBricks() {
  bricks.forEach(b => {
    if (b.status === 1 || (b.effectStage !== null && b.effectStage !== "gone")) {
      ctx.beginPath();
      ctx.rect(b.x, b.y, 70, 20);

      if (b.effectStage === "pending") {
        b.effectTimer--;
        ctx.fillStyle = "#aaf";
        if (b.effectTimer <= 0) {
          b.effectStage = "cracking";
          b.effectTimer = 3;
        }
      } else if (b.effectStage === "cracking") {
        b.effectTimer--;
        ctx.fillStyle = "#fff";
        if (b.effectTimer <= 0) {
          b.status = 0;
          b.effectStage = "gone";
          delete b.ignoreCollision;
        }
      } else {
        ctx.fillStyle = getColorByType(b.type, b.hitCount);
      }

      ctx.fill();
      ctx.closePath();
    }
  });
}



function collisionDetection() {
  bricks.forEach(b => {
    if (b.status === 1 &&
      b.effectStage === null &&
      ball.x > b.x && ball.x < b.x + 70 &&
      ball.y > b.y && ball.y < b.y + 20) {

      // 고출력 커터 효과 우선 적용
      if (applyCutterIfAvailable(b)) {
        ball.dy = -ball.dy;
        score += 10;
        return;
      }

      switch (b.type) {
        case BLOCK_TYPES.NORMAL:
          handleNormalBlock(b);
          break;
        case BLOCK_TYPES.METAL:
          handleMetalBlock(b);
          break;
        case BLOCK_TYPES.GLASS:
          handleGlassBlock(b);
          break;
        case BLOCK_TYPES.FUEL:
          handleFuelBlock(b);
          break;
        case BLOCK_TYPES.TIRE:
          handleTireBlock(b);
          break;
        case BLOCK_TYPES.LIGHT:
          handleLightBlock(b);
          break;
        case BLOCK_TYPES.ITEM_COOLER:
          handleItemCoolerBlock(b);
          break;
        case BLOCK_TYPES.ITEM_CUTTER:
          handleItemCutterBlock(b);
          break;
        // case BLOCK_TYPES.ITEM_BARRIER:
        //   handleItemBarrierBlock(b);
        //   break;
        case BLOCK_TYPES.ITEM_GUIDE:
          handleItemGuideBlock(b);
          break;
        default:
          b.status = 0;
      }

      ball.dy = -ball.dy;
      score += 10;
    }
  });
}



function checkGameClear() {
  const cleared = bricks.every(b =>
    b.status === 0 && (b.effectStage === null || b.effectStage === "gone")
  );
  if (cleared) {
    endGame();
  }
}




// 게임 결과 팝업 UI 표시 함수
// - 게임이 끝난 후 호출됨
// - 획득한 별 개수에 따라 star 이미지 출력
// - '다음 스테이지'와 '스테이지 선택' 버튼 포함
// - 기존 캔버스는 그대로 유지하고 위에 HTML 요소로 팝업을 띄움
// - 실패 시 자동으로 3초 후 스테이지 선택 화면으로 이동

function showStageResultPopup(starCount) {
  const popup = document.createElement('div');
  popup.id = 'resultPopup';
  popup.style.position = 'absolute';
  popup.style.top = '50%';
  popup.style.left = '50%';
  popup.style.transform = 'translate(-50%, -50%)';
  popup.style.backgroundColor = 'rgba(0, 0, 0, 0.9)';
  popup.style.padding = '30px';
  popup.style.border = '2px solid white';
  popup.style.borderRadius = '12px';
  popup.style.textAlign = 'center';
  popup.style.color = 'white';
  popup.style.zIndex = '1000';
  ///////////////////////////////////////
  const currentScore = GameState.score;
  const currentComboScore = GameState.comboScore;
  ///////////////////////////////////////

  // ⭐ 별 이미지 추가
  const starImg = document.createElement('img');
  starImg.src = `star${starCount}.png`;
  starImg.alt = `별 ${starCount}개`;
  starImg.style.width = '150px';
  popup.appendChild(starImg);

  // 점수 또는 안내 메시지 출력
  const msg = document.createElement('p');
  msg.textContent = `획득한 별: ${starCount}개`;
  msg.style.fontFamily = 'DungGeunMo, sans-serif';
  msg.style.fontSize = '22px';
  popup.appendChild(msg);

  if (starCount === 0) {
    const failMsg = document.createElement('p');
    failMsg.textContent = '게임 실패! 곧 스테이지 선택 화면으로 이동합니다.';
    failMsg.style.fontSize = '18px';
    failMsg.style.marginTop = '10px';
    popup.appendChild(failMsg);

    document.body.appendChild(popup);

    setTimeout(() => {
      if (document.body.contains(popup)) document.body.removeChild(popup);
      resetGameState();
      goToMapScene();
    }, 3000);
  } else {
    const nextBtn = document.createElement('img');
    nextBtn.src = 'toNextBtn.png';
    nextBtn.alt = '다음 스테이지';
    nextBtn.style.margin = '10px';
    nextBtn.style.cursor = 'pointer';
    //nextBtn.style.width = '160px';
    nextBtn.style.height = '40px';
    nextBtn.onclick = () => {
      document.body.removeChild(popup);
      if (GameState.selectedStage >= 3) {
        showEnding();
      } else {
        goToUpgradePopup(starCount); // 강화 팝업 호출
      }
    }
    // hover 시 이미지 변경
    nextBtn.addEventListener('mouseenter', () => {
      nextBtn.src = 'HtoNextBtn.png';
    });
    nextBtn.addEventListener('mouseleave', () => {
      nextBtn.src = 'toNextBtn.png';
    });

    const selectBtn = document.createElement('img');
    selectBtn.src = 'toStageBtn.png';
    selectBtn.alt = '스테이지 선택';
    selectBtn.style.margin = '10px';
    selectBtn.style.cursor = 'pointer';
    //selectBtn.style.width = '160px';
    selectBtn.style.height = '40px';
    selectBtn.onclick = () => {
      document.body.removeChild(popup);
      goToMapScene();
    };

    // hover 시 이미지 변경
    selectBtn.addEventListener('mouseenter', () => {
      selectBtn.src = 'HtoStageBtn.png';
    });
    selectBtn.addEventListener('mouseleave', () => {
      selectBtn.src = 'toStageBtn.png';
    });

    ///////////////////////////////////////
    // 다시 시작 버튼 추가
    const restartBtn = document.createElement('img');
    restartBtn.src = 'restartBtn.png';
    restartBtn.alt = '다시 도전';
    restartBtn.style.margin = '10px';
    restartBtn.style.cursor = 'pointer';
    restartBtn.style.height = '40px';
    restartBtn.onclick = () => {
      document.body.removeChild(popup);

      // 방금 플레이 점수 반영 취소
      GameState.totalScore -= currentScore;
      GameState.totalComboScore -= currentComboScore;
      GameState.score = 0;
      GameState.comboScore = 0;

      startStage(GameState.selectedStage);  // 현재 스테이지 다시 시작
    };

    // hover 시 이미지 변경
    restartBtn.addEventListener('mouseenter', () => {
      restartBtn.src = 'HrestartBtn.png';
    });
    restartBtn.addEventListener('mouseleave', () => {
      restartBtn.src = 'restartBtn.png';
    });
    ///////////////////////////////////////

    popup.appendChild(selectBtn);
    popup.appendChild(restartBtn);
    popup.appendChild(nextBtn);

    if (starCount > 0) {
      const countdownText = document.createElement('p');
      countdownText.style.fontSize = '16px';
      countdownText.style.marginTop = '10px';
      countdownText.style.fontFamily = 'DungGeunMo, sans-serif';
      popup.appendChild(countdownText);

      let timeLeft = 5;
      countdownText.textContent = `자동 이동까지 ${timeLeft}초...`;

      const countdownInterval = setInterval(() => {
        timeLeft--;
        countdownText.textContent = `자동 이동까지 ${timeLeft}초...`;
        if (timeLeft <= 0) {
          clearInterval(countdownInterval);
          if (document.body.contains(popup)) {
            document.body.removeChild(popup);
            if (GameState.selectedStage >= 3) {
              showEnding();
            } else {
              goToUpgradePopup(starCount);
            }
          }
        }
      }, 1000);
    }


    document.body.appendChild(popup);
  }
}


// 게임 종료 처리 함수 (성공 시)
function endGame() {
  cancelAnimationFrame(animationId);
  isGameOver = true;

  const stageScore = score;
  const stageCombo = comboScore;
  const total = stageScore + stageCombo;

  GameState.totalScore += stageScore;
  GameState.totalComboScore += stageCombo;

  let stars = 0;
  if (total >= 300) stars = 3;
  else if (total >= 200) stars = 2;
  else if (total >= 100) stars = 1;

  GameState.score = stageScore;
  GameState.comboScore = stageCombo

  showStageResultPopup(stars);
}

// 게임 종료 처리 함수 (실패 시)
function gameOver() {
  cancelAnimationFrame(animationId);
  isGameOver = true;
  GameState.score = score + comboScore;
  $(document).off('keydown');
  $(document).off('keyup');
  showStageResultPopup(0);
}





// ===== UpgradeManager.js =====

// import { GameState } from './GameState.js';
// import { startStage } from './GameStage.js';
// import { showEnding } from './EndingScene.js';

// 캔버스 기반 강화 UI 전체 구성 (선택, 버튼, 결과 표시 포함)
function goToUpgradePopup(stars) {
  // 강화 기회를 별 개수만큼 추가
  GameState.reinforceChances += stars;

  // 팝업창 역할을 하는 div 생성
  const popup = document.createElement('div');
  popup.id = 'upgradePopup';
  popup.style.position = 'absolute';
  popup.style.top = '50%';
  popup.style.left = '50%';
  popup.style.transform = 'translate(-50%, -50%)';
  popup.style.backgroundColor = 'rgba(0, 0, 0, 0.95)';
  popup.style.padding = '30px';
  popup.style.border = '2px solid white';
  popup.style.borderRadius = '12px';
  popup.style.textAlign = 'center';
  popup.style.color = 'white';
  popup.style.zIndex = '2000';

  // 강화 내역, 기회 수, 캔버스 포함한 HTML 삽입
  popup.innerHTML = `
    <h2>강화 화면</h2>
    <div id="upgradeStatus">강화 내역: ${summarizeUpgrades()}</div>
    <p>현재 강화 기회: <span id="chanceDisplay">${GameState.reinforceChances}</span>회</p>
    <canvas id="upgradeCanvas" width="400" height="250" style="border:1px solid white; background:black; margin-top: 15px;"></canvas>
  `;

  document.body.appendChild(popup);

  // 렌더링 이후 캔버스 요소를 얻어와 UI 세팅
  setTimeout(() => {
    const canvas = document.getElementById("upgradeCanvas");
    const ctx = canvas.getContext("2d");
    setupUpgradeCanvas(canvas, ctx, popup);
  }, 50);
}

function setupUpgradeCanvas(canvas, ctx, popup) {
  // 강화 옵션 정의
  const options = ["패들강화", "보너스점수", "생명"];
  let selectedIndex = 0;
  let resultText = ""; // 강화 결과 메시지
  let animationFrame = 0;
  let animTimer = 0;

  // 버튼 정보 (위치, 크기, hover 여부)
  const buttons = [
    { label: "강화 시도", x: 40, y: 170, w: 120, h: 40, hover: false },
    { label: "건너뛰기", x: 240, y: 170, w: 120, h: 40, hover: false }
  ];

  // 마우스 이동 시 hover 처리
  canvas.addEventListener("mousemove", (e) => {
    const rect = canvas.getBoundingClientRect();
    const mx = e.clientX - rect.left;
    const my = e.clientY - rect.top;

    buttons.forEach(btn => {
      btn.hover = mx >= btn.x && mx <= btn.x + btn.w &&
                  my >= btn.y && my <= btn.y + btn.h;
    });

    drawUI();
  });

  // 마우스 클릭 시 버튼 또는 옵션 선택 처리
  canvas.addEventListener("click", (e) => {
    const rect = canvas.getBoundingClientRect();
    const mx = e.clientX - rect.left;
    const my = e.clientY - rect.top;

    options.forEach((opt, i) => {
      const x = 40 + i * 120;
      if (mx >= x && mx <= x + 100 && my >= 30 && my <= 60) {
        selectedIndex = i;
        drawUI();
      }
    });

    if (mx >= buttons[0].x && mx <= buttons[0].x + buttons[0].w &&
        my >= buttons[0].y && my <= buttons[0].y + buttons[0].h) {
      tryUpgrade(options[selectedIndex]);
    }

    if (mx >= buttons[1].x && mx <= buttons[1].x + buttons[1].w &&
        my >= buttons[1].y && my <= buttons[1].y + buttons[1].h) {
      document.body.removeChild(popup);
      proceedToNextStage();
    }
  });

  // 캔버스에 전체 UI 그리기 (옵션, 버튼, 결과 메시지)
  function drawUI() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.font = "16px DungGeunMo, sans-serif";
    ctx.textAlign = "center";

    options.forEach((opt, i) => {
      const x = 40 + i * 120;
      const isSelected = i === selectedIndex;
      ctx.fillStyle = isSelected ? "#fff" : "#333";
      ctx.fillRect(x, 30, 100, 30);
      ctx.strokeStyle = "#888";
      ctx.strokeRect(x, 30, 100, 30);
      ctx.fillStyle = isSelected ? "#000" : "#fff";
      ctx.fillText(opt, x + 50, 50);
    });

    buttons.forEach(btn => {
      ctx.fillStyle = btn.hover ? "#fff" : "#111";
      ctx.fillRect(btn.x, btn.y, btn.w, btn.h);
      ctx.strokeStyle = "#fff";
      ctx.strokeRect(btn.x, btn.y, btn.w, btn.h);
      ctx.fillStyle = btn.hover ? "#000" : "#fff";
      ctx.fillText(btn.label, btn.x + btn.w / 2, btn.y + btn.h / 2 + 6);
    });

    if (resultText) {
      ctx.font = "bold 20px DungGeunMo, sans-serif";
      ctx.fillStyle = animationFrame % 2 === 0 ? "#ff0" : "#f00";
      ctx.fillText(resultText, canvas.width / 2, 130);
    }
  }

  // 강화 시도 처리
  function tryUpgrade(option) {
    if (GameState.reinforceChances <= 0) return;

    const count = GameState.upgrades.filter(x => x === option).length;

    // 최대 3회까지만 강화 가능
    if (count >= 3) {
      resultText = `${option} 최대 강화`;
      drawUI();
      return;
    }

    GameState.reinforceChances--;
    document.getElementById("chanceDisplay").innerText = GameState.reinforceChances;

    const success = Math.random() < 0.6; // 60% 확률

    if (success) {
      GameState.upgrades.push(option);

      if (option === "생명") {
        GameState.barrierCount = (GameState.barrierCount || 0) + 1;
        updateItemUI(); // 생명 UI 갱신
      }

      resultText = `${option} 강화 성공!`;
    } else {
      GameState.failedUpgrades.push(option);
      resultText = `${option} 강화 실패...`;
    }

    const upgradeStatus = document.getElementById("upgradeStatus");
    if (upgradeStatus) {
      upgradeStatus.innerText = `강화 내역: ${summarizeUpgrades()}`;
    }

    animTimer = 30;
    animateResult();

    // 기회 모두 소진 시 자동 다음 스테이지로 이동
    if (GameState.reinforceChances === 0) {
      setTimeout(() => {
        document.body.removeChild(popup);
        proceedToNextStage();
      }, 2000);
    }
  }

  // 결과 메시지 깜빡이는 애니메이션 처리
  function animateResult() {
    if (animTimer-- <= 0) {
      drawUI();
      return;
    }
    animationFrame++;
    drawUI();
    requestAnimationFrame(animateResult);
  }

  drawUI();
}

// 강화 내역 요약 문자열 반환
function summarizeUpgrades() {
  const summary = {};
  GameState.upgrades.forEach(up => {
    summary[up] = (summary[up] || 0) + 1;
  });
  return Object.entries(summary).map(([k, v]) => `${k} x${v}`).join(', ') || '없음';
}

// 다음 스테이지로 이동 처리
function proceedToNextStage() {
  if (GameState.selectedStage >= 3) {
    showEnding();
  } else {
    GameState.selectedStage++;
    startStage(GameState.selectedStage);
  }
}






// ===== EndingScene.js =====

// import { GameState } from './GameState.js';
// import { goToMapScene } from './MapScene.js';

function showEnding() {
  $('body').html(`
    <div style="text-align:center; position:relative;">
      <canvas id="gameCanvas" width="1000" height="600" style="background:black;"></canvas>
    </div>
  `);

  const canvas = document.getElementById("gameCanvas");
  const ctx = canvas.getContext("2d");

  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "white";
  ctx.font = "24px DungGeunMo, sans-serif";
  ctx.textAlign = "center";
  ctx.fillText("결과 불러오는 중...", canvas.width / 2, canvas.height / 2);

  const bg = new Image();
  bg.src = "mergedEnding.png";

  const charImg = new Image();
  charImg.src = GameState.selectedCharacter?.image || "baseballP.png";  // 기본 이미지

  let loaded = 0;
  const tryDraw = () => {
    loaded++;
    if (loaded < 2) return;
    GameState._endingCharImg = charImg;  // ✅ 캐릭터 이미지를 글로벌 상태에 임시 저장
    startFinalScene(bg);
  };

  bg.onload = tryDraw;
  charImg.onload = tryDraw;

  canvas.addEventListener("click", handleEndingPopupClick);
  canvas.addEventListener("mousemove", handleEndingMouseMove);
}
// 버튼 상태
let endingButtons = [
  { id: "restartBtn", text: "다시 시작", x: 0, y: 0, w: 160, h: 40, hover: false },
  { id: "exitBtn", text: "게임 종료", x: 0, y: 0, w: 160, h: 40, hover: false }
];

// 파티클 상태
let fireParticles = [];
let fireAnimId = null;

function startFinalScene(bgImage) {
  const palette = ['#ff0044', '#ffaa00', '#00eaff', '#44ff00', '#ffffff', '#ffcc00'];

  setInterval(() => {
    for (let i = 0; i < 6; i++) {
      const canvas = document.getElementById("gameCanvas");
      const x = Math.random() * canvas.width;
      const y = -10;
      const speedY = Math.random() * 1.5 + 0.5;
      const size = Math.floor(Math.random() * 3 + 2); // 2~4
      const color = palette[Math.floor(Math.random() * palette.length)];
      fireParticles.push({ x, y, speedY, size, color });
    }
  }, 120);

  animateScene(bgImage);
}

function animateScene(bgImage) {
  const canvas = document.getElementById("gameCanvas");
  const ctx = canvas.getContext("2d");

  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // 1. 배경 이미지
  ctx.drawImage(bgImage, 0, 0, canvas.width, canvas.height);

  // 2. 파티클
  fireParticles.forEach(p => {
    p.y += p.speedY;
    ctx.fillStyle = p.color;
    ctx.fillRect(Math.floor(p.x), Math.floor(p.y), p.size, p.size);
  });
  fireParticles = fireParticles.filter(p => p.y < canvas.height + 10);

  // 3. 점수/결과 텍스트 + 버튼
  drawGameEndingOverlay(ctx);

  fireAnimId = requestAnimationFrame(() => animateScene(bgImage));
}

function drawGameEndingOverlay(ctx) {
  const canvas = ctx.canvas;

  const nickname = GameState.nickname || "플레이어";
  const totalScore = GameState.totalScore + GameState.totalComboScore;
  const upgrades = GameState.upgrades.length > 0 ? GameState.upgrades.join(", ") : "없음";

  // 1. 캐릭터 이미지 (중앙 상단)
  if (GameState._endingCharImg) {
    ctx.drawImage(GameState._endingCharImg, canvas.width / 2 - 100, 330, 200, 200);
  }

  // 2. 텍스트
  ctx.textAlign = "center";
  ctx.lineWidth = 4;
  ctx.font = "24px DungGeunMo, sans-serif";
  ctx.strokeStyle = "black";
  ctx.fillStyle = "yellow";

  ctx.strokeText(`${nickname}님의 총 점수: ${totalScore}`, canvas.width / 2, 260);
  ctx.fillText(`${nickname}님의 총 점수: ${totalScore}`, canvas.width / 2, 260);

  ctx.strokeText(`강화 내역: ${upgrades}`, canvas.width / 2, 300);
  ctx.fillText(`강화 내역: ${upgrades}`, canvas.width / 2, 300);

  // 3. 버튼
  drawButtons(ctx);
}


function drawButtons(ctx) {
  const canvas = ctx.canvas;
  const width = canvas.width;

  const btnWidth = 160;
  const spacing = 20;
  const totalWidth = btnWidth * 2 + spacing;
  const startX = (width - totalWidth) / 2;
  const btnY = 540;

  endingButtons[0].x = startX;
  endingButtons[0].y = btnY;
  endingButtons[1].x = startX + btnWidth + spacing;
  endingButtons[1].y = btnY;

  endingButtons.forEach(btn => {
    ctx.fillStyle = btn.hover ? "#fff" : "#111";
    ctx.fillRect(btn.x, btn.y, btn.w, btn.h);
    ctx.strokeStyle = btn.hover ? "#000" : "#fff"
    ctx.strokeRect(btn.x, btn.y, btn.w, btn.h);
    ctx.fillStyle = btn.hover ? "#000" : "#fff";
    ctx.font = "20px DungGeunMo, sans-serif";
    ctx.fillText(btn.text, btn.x + btn.w / 2, btn.y + btn.h / 2 + 6);
  });
}

function handleEndingMouseMove(e) {
  const canvas = document.getElementById("gameCanvas");
  const rect = canvas.getBoundingClientRect();
  const mx = e.clientX - rect.left;
  const my = e.clientY - rect.top;

  let needsRedraw = false;

  endingButtons.forEach(btn => {
    const inside = mx >= btn.x && mx <= btn.x + btn.w && my >= btn.y && my <= btn.y + btn.h;
    if (btn.hover !== inside) {
      btn.hover = inside;
      needsRedraw = true;
    }
  });

  if (needsRedraw) {
    const ctx = canvas.getContext("2d");
    drawGameEndingOverlay(ctx);
  }
}

function handleEndingPopupClick(e) {
  const canvas = document.getElementById("gameCanvas");
  const rect = canvas.getBoundingClientRect();
  const mx = e.clientX - rect.left;
  const my = e.clientY - rect.top;

  for (const btn of endingButtons) {
    if (
      mx >= btn.x && mx <= btn.x + btn.w &&
      my >= btn.y && my <= btn.y + btn.h
    ) {
      cancelAnimationFrame(fireAnimId);
      canvas.removeEventListener("click", handleEndingPopupClick);
      canvas.removeEventListener("mousemove", handleEndingMouseMove);

      if (btn.id === "restartBtn") {
        resetGameState();
        goToCharacterSelect();
      } else if (btn.id === "exitBtn") {
        window.close();
      }
    }
  }
}









// ===== Settings.js =====

// import { GameState } from './GameState.js';

function toggleBGM() {
  GameState.settings.bgm = !GameState.settings.bgm;
}


// ===== webTP.js =====

// import { showStartUI } from './GameStartUI.js';

$(document).ready(() => {
  showStartUI();
});

function handleNormalBlock(block) {
  block.status = 0;
}

function handleGlassBlock(block) {
  block.effectStage = "cracking";
  block.effectTimer = 3;
  block.ignoreCollision = true;  // ✅ 공과의 충돌 무시
  const visited = new Set();
  visited.add(`${block.x},${block.y}`);
  const count = explodeGlassChain(block, 1, visited);
  applyScore(count + 1, 10);
}


function explodeGlassChain(target, depth = 0, visited = new Set()) {
  let destroyed = 0;
  bricks.forEach(b => {
    const key = `${b.x},${b.y}`;
    if (
      b.status === 1 &&
      b.type === BLOCK_TYPES.GLASS &&
      !visited.has(key)
    ) {
      const dx = Math.abs(b.x - target.x);
      const dy = Math.abs(b.y - target.y);

      if (dx <= 80 && dy <= 40) {
        visited.add(key);
        b.effectStage = "pending";
        b.effectTimer = 2 + depth; // ✅ 빠르고 순차적인 이펙트
        b.ignoreCollision = true;
        destroyed++;

        // 다음 깊이 탐색
        destroyed += explodeGlassChain(b, depth + 1, visited);
      }
    }
  });
  return destroyed;
}



function handleMetalBlock(block) {
  block.hitCount++;
  if (block.hitCount >= block.maxHits) {
    block.status = 0;
  }
}

function handleTireBlock(block) {
  const prevAngle = Math.atan2(ball.dy, ball.dx);
  let newAngle;

  for (let i = 0; i < 10; i++) {
    const offset = (Math.random() * 120 + 30) * (Math.PI / 180);
    const sign = Math.random() < 0.5 ? -1 : 1;
    newAngle = prevAngle + offset * sign;

    const angleDiff = Math.abs(newAngle - prevAngle) % (2 * Math.PI);
    if (angleDiff > Math.PI / 6) break;
  }

  // 블럭 제거는 즉시
  block.status = 0;

  // 다음 프레임에서 방향 변경 (물리 충돌 이후)
  setTimeout(() => {
    const speed = ball.speed;
    ball.dx = Math.cos(newAngle) * speed;
    ball.dy = Math.sin(newAngle) * speed;
  }, 0);
}


function handleFuelBlock(block) {
  const count = explodeFuelChain(block);
  applyScore(count, 15);
}

function explodeFuelChain(center) {
  let destroyed = 0;
  bricks.forEach(b => {
    if (b.status === 1) {
      const dx = Math.abs(b.x - center.x);
      const dy = Math.abs(b.y - center.y);
      if (dx <= 80 && dy <= 40) {
        if (b.type === BLOCK_TYPES.METAL) {
          b.hitCount++;
          if (b.hitCount >= b.maxHits) {
            b.status = 0;
            destroyed++;
          }
        } else {
          b.status = 0;
          destroyed++;

          if (b.type === BLOCK_TYPES.FUEL) {
            destroyed += explodeFuelChain(b);
          }
          if (b.type === BLOCK_TYPES.GLASS) {
            destroyed += explodeGlassChain(b);
          }
        }
      }
    }
  });
  return destroyed;
}

function destroySurroundingBlocks(center) {
  bricks.forEach(b => {
    if (b.status === 1) {
      const dx = Math.abs(b.x - center.x);
      const dy = Math.abs(b.y - center.y);
      if (dx <= 80 && dy <= 40) {
        b.status = 0;
      }
    }
  });
}
function handleLightBlock(block) {
  flashScreen();
  block.status = 0;
}

function flashScreen() {
  document.body.style.backgroundColor = "black";
  setTimeout(() => {
    document.body.style.backgroundColor = "white";
    setTimeout(() => {
      document.body.style.backgroundColor = "#f0f0f0";
    }, 100);
  }, 100);
}
function handleItemCoolerBlock(block) {
  if (!GameState.hasCooler) {
    ball.originalSpeed = ball.speed;
    ball.speed = Math.max(1, ball.speed - 1);
    ball.collidedWithPaddleOnceAfterCooler = true;
    GameState.hasCooler = true;
  }
  block.status = 0;
  updateItemUI();
}


function handleItemCutterBlock(block) {
  GameState.hasCutter = true;
  block.status = 0;
  updateItemUI();
}

function applyCutterIfAvailable(block) {
  if (!GameState.hasCutter) return false;

  GameState.hasCutter = false;
  updateItemUI();

  switch (block.type) {
    case BLOCK_TYPES.GLASS: handleGlassBlock(block); break;
    case BLOCK_TYPES.FUEL: handleFuelBlock(block); break;
    case BLOCK_TYPES.METAL:
      block.status = 0;
      block.hitCount = block.maxHits;
      break;
    case BLOCK_TYPES.TIRE: handleTireBlock(block); break;
    case BLOCK_TYPES.LIGHT: handleLightBlock(block); break;
    case BLOCK_TYPES.ITEM_COOLER: handleItemCoolerBlock(block); break;
    case BLOCK_TYPES.ITEM_CUTTER: handleItemCutterBlock(block); break;
    case BLOCK_TYPES.ITEM_GUIDE: handleItemGuideBlock(block); break;
    case BLOCK_TYPES.NORMAL:
    default: block.status = 0;
  }

  return true;
}



// function handleItemBarrierBlock(block) {
//   GameState.barrierCount = (GameState.barrierCount || 0) + 1;
//   block.status = 0;
//   updateItemUI();
// }

function handleItemGuideBlock(block) {
  block.status = 0;
  updateItemUI();

  const targetX = paddle.x + paddle.width / 2;
  const targetY = canvas.height - paddle.height - 20 - ball.radius;
  const startX = ball.x;
  const startY = ball.y;
  const duration = 500;
  const startTime = Date.now();
  const originalSpeed = ball.speed;

  function animateGuide() {
    const now = Date.now();
    const t = Math.min((now - startTime) / duration, 1);
    const ease = t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
    ball.x = startX + (targetX - startX) * ease;
    ball.y = startY + (targetY - startY) * ease;

    if (t < 1) {
      requestAnimationFrame(animateGuide);
    } else {
      // 무작위 각도로 발사
      const angleDeg = Math.random() * 60 + 30; // 30~90도
      const angleRad = angleDeg * (Math.PI / 180);
      const direction = Math.random() < 0.5 ? -1 : 1;

      ball.dx = Math.cos(angleRad) * originalSpeed * direction;
      ball.dy = -Math.sin(angleRad) * originalSpeed;
      ball.speed = originalSpeed;

      if (GameState.hasCooler) {
        GameState.hasCooler = false;
        ball.collidedWithPaddleOnceAfterCooler = false;
        updateItemUI();
      }
    }
  }

  animateGuide();
}

function applyScore(numBlocks = 1, baseScore = 10) {
  const bonusUpgradeCount = GameState.upgrades.filter(x => x === "보너스점수").length;
  const multiplier = 1 + 0.2 * bonusUpgradeCount;  // 20%씩 증가
  const totalBase = Math.floor(baseScore * numBlocks * multiplier);

  comboCount += numBlocks;
  comboScore += comboCount * 5;
  score += totalBase;

  $('#score').text(score + comboScore);
  $('#combo').text(comboCount);

  if (comboTimer) clearTimeout(comboTimer);
  comboTimer = setTimeout(() => {
    comboCount = 0;
    $('#combo').text("0");
  }, 1500);
}


function collisionDetection() {
  bricks.forEach(b => {
    if (b.status === 1 &&
      ball.x > b.x && ball.x < b.x + 70 &&
      !b.ignoreCollision &&
      ball.y > b.y && ball.y < b.y + 20) {
        

      // 고출력 커터 효과 우선 적용
      if (applyCutterIfAvailable(b)) {
        applyScore();
        ball.dy = -ball.dy;
        return;
      }

      switch (b.type) {
        case BLOCK_TYPES.NORMAL:
          handleNormalBlock(b);
          applyScore();
          break;
        case BLOCK_TYPES.METAL:
          handleMetalBlock(b);
          applyScore();
          break;
        case BLOCK_TYPES.GLASS:
          handleGlassBlock(b);
          break;
        case BLOCK_TYPES.FUEL:
          handleFuelBlock(b);
          break;
        case BLOCK_TYPES.TIRE:
          handleTireBlock(b);
          applyScore(1, 20);
          break;
        case BLOCK_TYPES.LIGHT:
          handleLightBlock(b);
          applyScore(1, 10);
          break;
        case BLOCK_TYPES.ITEM_COOLER:
          handleItemCoolerBlock(b);
          applyScore();
          break;
        case BLOCK_TYPES.ITEM_CUTTER:
          handleItemCutterBlock(b);
          applyScore();
          break;
        // case BLOCK_TYPES.ITEM_BARRIER:
        //   handleItemBarrierBlock(b);
        //   applyScore();
        //   break;
        case BLOCK_TYPES.ITEM_GUIDE:
          handleItemGuideBlock(b);
          applyScore();
          break;
        default:
          b.status = 0;
          applyScore();
      }

      ball.dy = -ball.dy;
    }
  });
}

function playBGM() {
  const bgm = document.getElementById("bgm");
  if (bgm) {
    bgm.muted = false; // 크롬 제한 우회
    if (GameState.settings.bgm) {
      bgm.play();
    }
  }
}

function stopBGM() {
  const bgm = document.getElementById("bgm");
  if (bgm) {
    bgm.pause();
    bgm.currentTime = 0;
  }
}


window.addEventListener('DOMContentLoaded', () => {
  document.body.addEventListener('click', () => {
    playBGM();
  }, { once: true }); // 딱 1번만 실행
});