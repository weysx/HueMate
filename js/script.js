// 预定义的配色方案
const colorPalettes = [
    {
        colors: ['#2C3E50', '#E74C3C', '#ECF0F1', '#3498DB', '#2980B9'],
        name: '现代商务',
        analysis: '这组配色体现了专业性和可靠性，深蓝色作为主色调传达信任感，红色点缀增添活力。'
    },
    {
        colors: ['#16A085', '#2ECC71', '#F1C40F', '#E67E22', '#E74C3C'],
        name: '自然活力',
        analysis: '绿色系为主的配色方案，展现生机与活力，适合环保、健康类主题。'
    },
    {
        colors: ['#8E44AD', '#9B59B6', '#2C3E50', '#34495E', '#95A5A6'],
        name: '优雅紫韵',
        analysis: '以紫色为主调的配色方案，体现高贵与神秘感，适合创意和艺术类项目。'
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

// 显示配色方案预览
function showPalettePreview(palette, index) {
    const colorCodes = document.getElementById('colorCodes');
    const colorAnalysis = document.getElementById('colorAnalysis');

    // 清空现有内容
    colorCodes.innerHTML = '';
    
    // 显示颜色代码
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

    // 显示配色分析
    colorAnalysis.textContent = palette.analysis;

    // 更新预览区域的样式
    updatePreviewStyles(palette.colors);
}

// 更新预览区域的样式
function updatePreviewStyles(colors) {
    const previewContainer = document.getElementById('previewContainer');
    const previewHeader = previewContainer.querySelector('.preview-header');
    const previewContent = previewContainer.querySelector('.preview-content');

    previewContainer.style.backgroundColor = colors[2]; // 背景色
    previewHeader.style.backgroundColor = colors[0]; // 标题背景
    previewHeader.style.color = colors[2]; // 标题文字
    previewContent.style.color = colors[0]; // 内容文字
} 