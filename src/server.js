const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const Rating = require('./models/rating');
const app = express();

// 中间件
app.use(cors());
app.use(express.json());
app.use(express.static('.'));

// MongoDB连接
const MONGODB_URI = "mongodb://localhost:27017/huemate";

mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('成功连接到MongoDB');
}).catch((error) => {
    console.error('MongoDB连接错误:', error);
});

// 评分路由
app.post('/api/ratings', async (req, res) => {
    try {
        const { paletteId, rating } = req.body; // 从请求体获取参数
        const newRating = new Rating({ paletteId, rating }); // 创建新的评分记录
        await newRating.save(); // 保存到数据库
        res.status(201).json(newRating); // 返回成功响应
    } catch (error) {
        res.status(500).json({ message: error.message }); // 返回错误信息
    }
});

// 获取评分数据
app.get('/api/ratings/:paletteId', async (req, res) => {
    try {
        const ratings = await Rating.find({ paletteId: req.params.paletteId }); // 查询该配色方案的所有评分
        const averageRating = ratings.reduce((acc, curr) => acc + curr.rating, 0) / ratings.length || 0; // 计算平均分
        res.json({ ratings, averageRating });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// 启动服务器
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`服务器运行在端口 ${PORT}`);
}); 