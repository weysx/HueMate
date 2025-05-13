// 预定义的配色方案
const colorPalettes = [
    {
        colors: ['#fef6e4', '#8bd3dd', '#f582ae', '#001858'],
        name: '1',
        analysis: '柔和的米白色传递出纯净与舒适，浅青蓝带来冷静与现代感，柔粉色增添温暖与亲和力，而深藏青则稳固整体视觉平衡，赋予画面专业与思考的力量。整体配色既富有亲和力，又不失理性与格调，适合用于强调情感与信任感并重的设计场景，如健康生活类应用。',
        colorRules: {
            topBg: 0,
            headerText: 3,
            headerBg: 0,
            contentText: 1,
            bottomBg: 0,
            bottomText: 0
        }
    },
    {
        colors: ['#e78fb3', '#ffc0ad', '#9656a2', '#fff3ec'],
        name: '2',
        analysis: '玫粉色象征着甜美、活力与情感张力；柔杏橘色则带来温暖与治愈感；紫色调沉稳而神秘，为整体色彩注入一份深度与格调，激发想象力与创造力；而淡奶油色则像一层柔光，将整个配色调和得更加轻盈通透。组合在一起时，这套配色充满浪漫、艺术化的表达，适合用于强调情感、个性与创意的视觉场景，如插画作品、情感类应用、时尚品牌或生活方式类设计。',
        colorRules: {
            topBg: 3,
            headerText: 2,
            headerBg: 3,
            contentText: 1,
            bottomBg: 3,
            bottomText: 0
        }
    },
    {
        colors: ['#8c7851', '#eaddcf', '#f25042', '#020826'],
        name: '3',
        analysis: '这组配色融合了沉稳与视觉的张力，营造出复古而富有力量感的氛围。棕橄榄色与浅奶茶色传递温暖与亲和力，红橘色注入活力与情绪，而深蓝黑色则带来深度与对比。整体配色稳重中带有亮点，适合用于强调质感与情绪表达的设计，如咖啡品牌、科技产品、文艺产品等应用。',
        colorRules: {
            topBg: 3,
            headerText: 0,
            headerBg: 3,
            contentText: 1,
            bottomBg: 1,
            bottomText: 3
        }
    },
    {
        colors: ['#ffd803', '#e3f6f5', '#bae8e8', '#272343'],
        name: '4',
        analysis: '黑白黄经典撞色，形成强烈视觉对比，适用于科技、信息类网站设计。',
        colorRules: {
            topBg: 3,
            headerText: 0,
            headerBg: 3,
            contentText: 1,
            bottomBg: 3,
            bottomText: 3
        }
    },
    {
        colors: ['#3da9fc', '#90b4ce', '#ef4565', '#094067'],
        name: '5',
        analysis: '亮蓝与灰蓝营造出清晰、专业的科技氛围，玫红色注入活力与视觉焦点，深蓝则提供沉稳支撑。整体风格冷静中带有冲击力，适合用于科技产品、数字平台或创意类设计，突出高效、现代与表达力。',
        colorRules: {
            topBg: 1,
            headerText: 3,
            headerBg: 1,
            contentText: 3,
            bottomBg: 1,
            bottomText: 3
        }
    },
    {
        colors: ['#6246ea', '#d1d1e9', '#e45858', '#2b2c34'],
        name: '6',
        analysis: '紫蓝色沉稳富有科技感，浅灰紫柔和平衡，红色注入情绪与冲击力，深灰黑则增强整体深度与对比。适合用于强调创意、个性的设计场景。',
        colorRules: {
            topBg: 1,
            headerText: 0,
            headerBg: 1,
            contentText: 3,
            bottomBg: 1,
            bottomText: 3
        }
    },
    {
        colors: ['#faae2b', '#e3f6f5', '#fa5246', '#00332c'],
        name: '7',
        analysis: '明亮的黄色带来积极与创意，清新的蓝绿色营造平静感，鲜红色注入情绪与热情，深绿色则提供稳重与深度。整体风格现代、动感，适合用于活力四射的品牌和创意设计。',
        colorRules: {
            topBg: 3,
            headerText: 0,
            headerBg: 3,
            contentText: 1,
            bottomBg: 3,
            bottomText: 3
        }
    }
];

// 初始化页面
document.addEventListener('DOMContentLoaded', () => {
    const paletteList = document.getElementById('paletteList');
    
    // 渲染配色方案列表
    colorPalettes.forEach((palette, index) => {
        const paletteElement = createPaletteElement(palette, index);
        paletteList.appendChild(paletteElement);
    });

    // 默认显示第一个配色方案的预览
    if (colorPalettes.length > 0) {
        showPalettePreview(colorPalettes[0], 0);
    }
});

// 创建配色方案元素
function createPaletteElement(palette, index) {
    const div = document.createElement('div');
    div.className = 'color-palette';
    div.setAttribute('data-index', index);

    palette.colors.forEach(color => {
        const strip = document.createElement('div');
        strip.className = 'color-strip';
        strip.style.backgroundColor = color;
        div.appendChild(strip);
    });

    div.addEventListener('click', () => {
        showPalettePreview(palette, index);
    });

    return div;
}

// 更新预览区域的样式
function updatePreviewStyles(colors, colorRules) {
    const previewContainer = document.getElementById('previewContainer');
    const previewTop = previewContainer.querySelector('.preview-top');
    const previewHeader = previewContainer.querySelector('.preview-header');
    const previewContent = previewContainer.querySelector('.preview-content');

    previewTop.style.backgroundColor = colors[colorRules.topBg];
    previewHeader.style.color = colors[colorRules.headerText];
    previewHeader.style.backgroundColor = colors[colorRules.headerBg];
    previewTop.querySelector('.preview-content').style.color = colors[colorRules.contentText];

    const previewBottom = previewContainer.querySelector('.preview-bottom');
    previewBottom.style.backgroundColor = colors[colorRules.bottomBg];
    previewBottom.querySelector('.preview-content').style.color = colors[colorRules.bottomText];
}

// 显示配色方案预览
function showPalettePreview(palette, index) {
    const colorCodes = document.getElementById('colorCodes');
    const colorAnalysis = document.getElementById('colorAnalysis');

    colorCodes.innerHTML = '';
    
    palette.colors.forEach(color => {
        const colorCodeDiv = document.createElement('div');
        colorCodeDiv.className = 'color-code';
        
        const colorPreview = document.createElement('div');
        colorPreview.className = 'color-preview';
        colorPreview.style.backgroundColor = color;
        
        const colorText = document.createElement('span');
        colorText.textContent = color.toUpperCase();
        
        const copyButton = document.createElement('button');
        copyButton.textContent = '复制';
        copyButton.style.marginLeft = '10px';
        copyButton.onclick = () => {
            navigator.clipboard.writeText(color)
                .then(() => {
                    copyButton.textContent = '已复制';
                    setTimeout(() => {
                        copyButton.textContent = '复制';
                    }, 1000);
                });
        };

        colorCodeDiv.appendChild(colorPreview);
        colorCodeDiv.appendChild(colorText);
        colorCodeDiv.appendChild(copyButton);
        colorCodes.appendChild(colorCodeDiv);
    });

    colorAnalysis.textContent = palette.analysis;

    // 更新预览区域的样式，传入颜色规则
    updatePreviewStyles(palette.colors, palette.colorRules);
}