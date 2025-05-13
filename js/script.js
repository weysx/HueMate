// 预定义的配色方案
const colorPalettes = [
    {
        colors: ['#fef6e4', '#8bd3dd', '#f582ae', '#001858'],
        name: '清新活力',
        analysis: '深蓝色与浅米色的搭配营造出清新感，粉色点缀增添活力，适合现代简约风格的设计。',
        colorRules: {
            topBg: 0,
            headerText: 3,
            headerBg: 0,
            contentText: 1,
            bottomBg: 0,
            bottomText: 0,
            infoBg: 0,
            infoText: 2
        }
    },
    {
        colors: ['#e78fb3', '#ffc0ad', '#9656a2', '#fff3ec'],
        name: '温暖复古',
        analysis: '棕色与奶油色组合营造出复古温馨的氛围，适合咖啡馆、手工艺等品牌。',
        colorRules: {
            topBg: 0,
            headerText: 2,
            headerBg: 1,
            contentText: 2,
            bottomBg: 3,
            bottomText: 0,
            infoBg: 2,
            infoText: 1
        }
    },
    {
        colors: ['#8c7851', '#eaddcf', '#f25042', '#020826'],
        name: '甜美复古',
        analysis: '淡粉和复古棕的结合传达甜美与怀旧，适合女性产品、插画风网站。',
        colorRules: {
            topBg: 3,
            headerText: 1,
            headerBg: 1,
            contentText: 1,
            bottomBg: 1,
            bottomText: 3,
            infoBg: 2,
            infoText: 1
        }
    },
    {
        colors: ['#ffd803', '#e3f6f5', '#bae8e8', '#272343'],
        name: '极简对比',
        analysis: '黑白黄经典撞色，形成强烈视觉对比，适用于科技、信息类网站设计。',
        colorRules: {
            topBg: 3,
            headerText: 0,
            headerBg: 1,
            contentText: 0,
            bottomBg: 1,
            bottomText: 3,
            infoBg: 2,
            infoText: 3
        }
    },
    {
        colors: ['#3da9fc', '#90b4ce', '#ef4565', '#094067'],
        name: '极简对比',
        analysis: '123'
    },
    {
        colors: ['#6246ea', '#d1d1e9', '#e45858', '#2b2c34'],
        name: '极简对比',
        analysis: '123'
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
        highlightSelected(0);
    }

    // 添加新配色功能
    const addPaletteBtn = document.getElementById('addPaletteBtn');
    const colorInputs = document.getElementById('colorInputs');
    const savePaletteBtn = document.getElementById('savePaletteBtn');
    const cancelPaletteBtn = document.getElementById('cancelPaletteBtn');
    const colorPickers = document.querySelectorAll('.color-picker');
    const colorCodeInputs = document.querySelectorAll('.color-code-input');

    // 显示颜色输入区域
    addPaletteBtn.addEventListener('click', () => {
        colorInputs.style.display = 'block';
        addPaletteBtn.style.display = 'none';
    });

    // 取消添加
    cancelPaletteBtn.addEventListener('click', () => {
        colorInputs.style.display = 'none';
        addPaletteBtn.style.display = 'block';
        colorPickers.forEach(picker => picker.value = '#000000');
        colorCodeInputs.forEach(input => input.value = '');
    });

    // 同步颜色选择器和输入框
    colorPickers.forEach((picker, index) => {
        picker.addEventListener('input', () => {
            colorCodeInputs[index].value = picker.value.toUpperCase();
        });
    });

    colorCodeInputs.forEach((input, index) => {
        input.addEventListener('input', () => {
            const color = input.value;
            if (/^#[0-9A-F]{6}$/i.test(color)) {
                colorPickers[index].value = color;
            }
        });
    });

    // 保存新配色方案
    savePaletteBtn.addEventListener('click', () => {
        const colors = Array.from(colorPickers).map(picker => picker.value);
        const newPalette = {
            colors: colors,
            name: '自定义配色',
            analysis: '这是一个自定义的配色方案。'
        };

        colorPalettes.push(newPalette);
        const index = colorPalettes.length - 1;

        const paletteElement = createPaletteElement(newPalette, index);
        paletteList.appendChild(paletteElement);
        showPalettePreview(newPalette, index);
        highlightSelected(index);

        colorInputs.style.display = 'none';
        addPaletteBtn.style.display = 'block';
        colorPickers.forEach(picker => picker.value = '#000000');
        colorCodeInputs.forEach(input => input.value = '');
    });
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
        highlightSelected(index);
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

    const colorInfo = document.querySelector('.color-info');
    const colorAnalysis = document.querySelector('.color-analysis');
    if (colorInfo) {
        colorInfo.style.backgroundColor = colors[colorRules.infoBg];
        colorInfo.style.color = colors[colorRules.infoText];
    }
    if (colorAnalysis) {
        colorAnalysis.style.backgroundColor = colors[colorRules.infoBg];
        colorAnalysis.style.color = colors[colorRules.infoText];
    }
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

// 高亮选中配色方案
function highlightSelected(index) {
    document.querySelectorAll('.color-palette').forEach(div => {
        div.classList.remove('selected');
    });
    const selected = document.querySelector(`.color-palette[data-index="${index}"]`);
    if (selected) {
        selected.classList.add('selected');
    }
}
