// 预定义的配色方案
const colorPalettes = [
    {
        colors: ['#fef6e4', '#8bd3dd', '#f582ae', '#001858'],
        analysis: '· 主色 #fef6e4 是一种柔和的米白色，带有淡淡的暖调，适合作为整体背景或界面基底，增强可读性与亲近感。\n\n· 次要色 #8bd3dd 属于清爽的浅青蓝色，保持轻盈通透的视觉效果，适用于内容区域、辅助信息或图标色。\n\n· 高亮色 #f582ae 是富有情感张力的柔粉红，能够迅速吸引用户视线，适合用于按钮、提示、标签等需要重点突出的元素。\n\n· 描边色 #001858 是深邃的藏青色，为整体提供了沉稳的视觉锚点，可作为边框、文字或重要结构线的颜色，增强层次感与可读性。',
        colorRules: {
            Bg: 0,
            headerText: 3,
            header2Text: 1,
        }
    },
    {
        colors: ['#e78fb3', '#ffc0ad', '#9656a2', '#fff3ec'],
        analysis: '· 主色 #fff3ec 是温柔的奶油白，带有一丝暖调，为整体界面提供柔和、纯净的视觉基底，适合用于背景或大面积留白区域。\n\n· 次要色 #e78fb3 是浪漫的玫粉色，带有甜美与活力感，可用于辅助图形、卡片背景或图标填充，增强设计的亲和力与情感温度。\n\n· 高亮色 #9656a2 是优雅而富有张力的紫色，适合用于按钮、强调文字、图形点缀等高关注区域，增强视觉冲击力。\n\n· 描边色 #ffc0ad 是明快的杏橘色，轻盈又柔和，用作边框、分隔线或轻量文字时能起到结构强化与柔性过渡的作用。',
        colorRules: {
            Bg: 3,
            headerText: 2,
            header2Text: 0,
        }
    },
    {
        colors: ['#8c7851', '#eaddcf', '#f25042', '#020826'],
        analysis: '· 主色 #020826 是深邃的蓝黑色，营造出稳重、理性且具科技感的视觉基底，适合用于暗色主题背景。\n\n· 次要色 #8c7851 是带灰调的棕橄榄色，散发复古与自然气息，适用于图标、文字标题或内容分区，平衡整体色彩的情绪与温度。\n\n· 高亮色 #f25042 是富有冲击力的红橘色，能够快速吸引用户注意力，适合用于按钮、重要提示或交互反馈等关键区域。\n\n· 描边色 #eaddcf 是温润的浅奶茶色，柔和不刺眼，用作边框、分隔线时，可提升界面层次感并保持整体视觉的协调性。',
        colorRules: {
            Bg: 3,
            headerText: 0,
            header2Text: 1,
        }
    },
    {
        colors: ['#ffd803', '#e3f6f5', '#bae8e8', '#272343'],
        analysis: '黑白黄经典撞色，形成强烈视觉对比。\n\n· 主色 #272343 是深沉浓郁的靛蓝色，带有一丝紫调，适合作为背景色使用，使整体界面富有深度与现代感。\n\n· 次要色 #bae8e8 是柔和的浅青绿色，清新通透，具备良好的辅助性，适用于次级内容背景、分区填充或视觉呼吸空间的创建。\n\n· 高亮色 #ffd803 是明亮饱满的柠檬黄色，极具视觉吸引力，可用于按钮、标签、图标或提示信息，增强交互的识别性与活力。\n\n· 描边色 #e3f6f5 是极浅的冰蓝色，轻盈温和，适合用作分隔线、边框或弱背景装饰。',
        colorRules: {
            Bg: 3,
            headerText: 0,
            header2Text: 1,
        }
    },
    {
        colors: ['#3da9fc', '#90b4ce', '#ef4565', '#094067'],
        analysis: '· 主色 #90b4ce 是冷静优雅的雾蓝色，带有灰调，营造出专业、可靠的视觉基调，适合作为主背景或主要内容区的底色。\n\n· 次要色 #094067 是深邃的钢铁蓝，饱和度高、对比强烈，可用于强调内容、导航栏或重要结构块，为界面提供清晰的层次支撑。\n\n· 高亮色 #ef4565 是鲜明的玫红色，极易吸引视线，适合用于按钮、交互提示、图标或重要标签，增强界面的情绪表现与操作引导。\n\n· 描边色 #90b4ce 与主色保持一致，既可用作视觉统一的边框颜色，又能维持整体色彩和谐，使界面简洁而富有秩序感。',
        colorRules: {
            Bg: 1,
            headerText: 3,
            header2Text: 3,
        }
    },
    {
        colors: ['#6246ea', '#d1d1e9', '#e45858', '#2b2c34'],
        analysis: '· 主色 #d1d1e9 是柔和的浅灰紫色，低饱和度带来理性与平和的视觉氛围，作为页面背景或底色，提升界面整体的可读性与亲和力。\n\n· 次要色 #6246ea 是鲜明的紫蓝色，富有现代感与科技气质，适合用于导航栏、标题区或重点模块背景，增强视觉聚焦与识别度。\n\n· 高亮色 #e45858 是饱和的暖红色，适用于按钮、警示提示或交互型元素，赋予设计以动感与冲击力。\n\n· 描边色 #2b2c34 是偏冷调的深灰黑色，为整体色彩系统提供结构支撑，适合用于文字、边框、图标线条等。',
        colorRules: {
            Bg: 1,
            headerText: 0,
            header2Text: 3,
        }
    },
    {
        colors: ['#faae2b', '#e3f6f5', '#fa5246', '#00332c'],
        analysis: '· 主色 #00332c 是深沉的墨绿调，具有强烈的稳定感与自然气息，适合作为页面背景或深色模式基底。\n\n· 次要色 #faae2b 是明亮的琥珀黄色，带来积极、乐观的视觉印象，适合用于导航条、模块标题或图标底色。\n\n· 高亮色 #fa5246 是鲜明的红橘色，，适用于按钮、警示信息或操作引导，迅速吸引用户注意力。\n\n· 描边色 #e3f6f5 是清浅的蓝绿色，具备良好的平衡性，既能用作边框、分割线，也适合大面积浅色背景使用，提升整体清爽感。',
        colorRules: {
            Bg: 3,
            headerText: 0,
            header2Text: 1,
        }
    },
];

// 评星功能
let currentRating = 0;
let currentPaletteId = null;

function initializeRatingSystem() {
    const stars = document.querySelectorAll('.stars i');
    const submitButton = document.getElementById('submitRating');

    //为每个星星添加事件监听
    stars.forEach(star => {
        // 鼠标悬停时预览评分
        star.addEventListener('mouseover', () => {
            const rating = parseInt(star.dataset.rating);
            updateStars(rating);
        });
        // 鼠标移出时恢复当前评分  
        star.addEventListener('mouseout', () => {
            updateStars(currentRating);
        });
        // 点击时设置评分
        star.addEventListener('click', () => {
            currentRating = parseInt(star.dataset.rating);
            updateStars(currentRating);
        });
    });
    // 提交评分
    submitButton.addEventListener('click', submitRating);
}

function updateStars(rating) {
    const stars = document.querySelectorAll('.stars i');
    stars.forEach(star => {
        const starRating = parseInt(star.dataset.rating);
        if (starRating <= rating) {
            star.classList.remove('far');
            star.classList.add('fas');
            star.classList.add('active');
        } else {
            star.classList.remove('fas');
            star.classList.add('far');
            star.classList.remove('active');
        }
    });
}

async function submitRating() {
    // 发送POST请求到后端
    try {
        // 在这里添加 console.log
        console.log('提交的 paletteId:', currentPaletteId, '评分:', currentRating);

        const response = await fetch('http://localhost:3000/api/ratings', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                paletteId: currentPaletteId,
                rating: currentRating
            })
        });

        if (response.ok) {
            alert('评分提交成功！');
            loadAverageRating(currentPaletteId);
        } else {
            throw new Error('评分提交失败');
        }
    } catch (error) {
        alert('评分提交失败：' + error.message);
    }
}

async function loadAverageRating(paletteId) {
    try {
        const response = await fetch(`http://localhost:3000/api/ratings/${paletteId}`);
        const data = await response.json();
        const averageRatingElement = document.getElementById('averageRating');
        averageRatingElement.textContent = `平均评分：${data.averageRating.toFixed(1)}`;
    } catch (error) {
        console.error('加载平均评分失败：', error);
    }
}

// 修改现有的配色方案选择处理函数
function handlePaletteSelection(palette) {
    currentPaletteId = palette.id;
    // ... 现有的配色方案处理代码 ...
    loadAverageRating(palette.id);
}

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

    initializeRatingSystem();
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
    const previewMain = previewContainer.querySelector('.preview-main');
    const previewHeader = previewContainer.querySelector('.preview-header');

    previewMain.style.backgroundColor = colors[colorRules.Bg];
    previewHeader.style.color = colors[colorRules.headerText];
    previewMain.querySelector('.preview-header2').style.color = colors[colorRules.header2Text];
}

// 显示配色方案预览
function showPalettePreview(palette, index) {
    currentPaletteId = String(index);

    const averageRatingElement = document.getElementById('averageRating'); // 获取平均评分元素
    averageRatingElement.textContent = '平均评分：暂无'; // 切换时显示“暂无”或清空

    currentRating = 0; // 重置当前选择的星级
    updateStars(currentRating); // 更新星级显示，全部清空

    const colorCodes = document.getElementById('colorCodes');
    const colorAnalysis = document.getElementById('colorAnalysis');

    // 设置CSS变量
    document.documentElement.style.setProperty('--accent-color', palette.colors[2]); // 使用第三个颜色（高亮色）
    document.documentElement.style.setProperty('--accent-hover-color', palette.colors[2]); // 使用相同的颜色，hover时通过opacity改变

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
        copyButton.textContent = 'copy';
        copyButton.style.marginLeft = '10px';
        copyButton.onclick = () => {
            navigator.clipboard.writeText(color)
                .then(() => {
                    copyButton.textContent = 'copied';
                    setTimeout(() => {
                        copyButton.textContent = 'copy';
                    }, 5000);
                });
        };

        colorCodeDiv.appendChild(colorPreview);
        colorCodeDiv.appendChild(colorText);
        colorCodeDiv.appendChild(copyButton);
        colorCodes.appendChild(colorCodeDiv);
    });

    colorAnalysis.innerHTML = palette.analysis.replace(/\n/g, '<br>');

    // 更新预览区域的样式，传入颜色规则
    updatePreviewStyles(palette.colors, palette.colorRules);

    // 最后加载平均评分，它会在加载完成后更新 averageRatingElement
    loadAverageRating(currentPaletteId); 
}