var Base = require('./Base');
var studies = require('../studies');
var strategies = require('../strategies');

// var studyDefinitions = [
//     {study: studies.Ema, inputs: {length: 200}, outputMap: {ema: 'ema200'}},
//     {study: studies.Ema, inputs: {length: 100}, outputMap: {ema: 'ema100'}},
//     {study: studies.Ema, inputs: {length: 50}, outputMap: {ema: 'ema50'}},
//     {study: studies.Ema, inputs: {length: 13}, outputMap: {ema: 'ema13'}},
//     {study: studies.Sma, inputs: {length: 13}, outputMap: {ema: 'sma13'}},
//     {study: studies.Rsi, inputs: {length: 14}, outputMap: {rsi: 'rsi14'}},
//     {study: studies.Rsi, inputs: {length: 7}, outputMap: {rsi: 'rsi7'}},
//     {study: studies.Rsi, inputs: {length: 5}, outputMap: {rsi: 'rsi5'}},
//     {study: studies.Rsi, inputs: {length: 2}, outputMap: {rsi: 'rsi2'}},
//     {study: studies.PolynomialRegressionChannel, inputs: {length: 100, degree: 2, deviations: 1.618}, outputMap: {regression: 'prChannel100_2_1618', upper: 'prChannelUpper100_2_1618', lower: 'prChannelLower100_2_1618'}},
//     {study: studies.PolynomialRegressionChannel, inputs: {length: 100, degree: 3, deviations: 1.618}, outputMap: {regression: 'prChannel100_3_1618', upper: 'prChannelUpper100_3_1618', lower: 'prChannelLower100_3_1618'}},
//     {study: studies.PolynomialRegressionChannel, inputs: {length: 100, degree: 4, deviations: 1.618}, outputMap: {regression: 'prChannel100_4_1618', upper: 'prChannelUpper100_4_1618', lower: 'prChannelLower100_4_1618'}},
//     {study: studies.PolynomialRegressionChannel, inputs: {length: 100, degree: 2, deviations: 1.7}, outputMap: {regression: 'prChannel100_2_17', upper: 'prChannelUpper100_2_17', lower: 'prChannelLower100_2_17'}},
//     {study: studies.PolynomialRegressionChannel, inputs: {length: 100, degree: 3, deviations: 1.7}, outputMap: {regression: 'prChannel100_3_17', upper: 'prChannelUpper100_3_17', lower: 'prChannelLower100_3_17'}},
//     {study: studies.PolynomialRegressionChannel, inputs: {length: 100, degree: 4, deviations: 1.7}, outputMap: {regression: 'prChannel100_4_17', upper: 'prChannelUpper100_4_17', lower: 'prChannelLower100_4_17'}},
//     {study: studies.PolynomialRegressionChannel, inputs: {length: 100, degree: 2, deviations: 1.9}, outputMap: {regression: 'prChannel100_2_19', upper: 'prChannelUpper100_2_19', lower: 'prChannelLower100_2_19'}},
//     {study: studies.PolynomialRegressionChannel, inputs: {length: 100, degree: 3, deviations: 1.9}, outputMap: {regression: 'prChannel100_3_19', upper: 'prChannelUpper100_3_19', lower: 'prChannelLower100_3_19'}},
//     {study: studies.PolynomialRegressionChannel, inputs: {length: 100, degree: 4, deviations: 1.9}, outputMap: {regression: 'prChannel100_4_19', upper: 'prChannelUpper100_4_19', lower: 'prChannelLower100_4_19'}},
//     {study: studies.PolynomialRegressionChannel, inputs: {length: 100, degree: 2, deviations: 1.95}, outputMap: {regression: 'prChannel100_2_195', upper: 'prChannelUpper100_2_195', lower: 'prChannelLower100_2_195'}},
//     {study: studies.PolynomialRegressionChannel, inputs: {length: 100, degree: 3, deviations: 1.95}, outputMap: {regression: 'prChannel100_3_195', upper: 'prChannelUpper100_3_195', lower: 'prChannelLower100_3_195'}},
//     {study: studies.PolynomialRegressionChannel, inputs: {length: 100, degree: 4, deviations: 1.95}, outputMap: {regression: 'prChannel100_4_195', upper: 'prChannelUpper100_4_195', lower: 'prChannelLower100_4_195'}},
//     {study: studies.PolynomialRegressionChannel, inputs: {length: 100, degree: 2, deviations: 2.0}, outputMap: {regression: 'prChannel100_2_20', upper: 'prChannelUpper100_2_20', lower: 'prChannelLower100_2_20'}},
//     {study: studies.PolynomialRegressionChannel, inputs: {length: 100, degree: 3, deviations: 2.0}, outputMap: {regression: 'prChannel100_3_20', upper: 'prChannelUpper100_3_20', lower: 'prChannelLower100_3_20'}},
//     {study: studies.PolynomialRegressionChannel, inputs: {length: 100, degree: 4, deviations: 2.0}, outputMap: {regression: 'prChannel100_4_20', upper: 'prChannelUpper100_4_20', lower: 'prChannelLower100_4_20'}},
//     {study: studies.PolynomialRegressionChannel, inputs: {length: 100, degree: 2, deviations: 2.1}, outputMap: {regression: 'prChannel100_2_21', upper: 'prChannelUpper100_2_21', lower: 'prChannelLower100_2_21'}},
//     {study: studies.PolynomialRegressionChannel, inputs: {length: 100, degree: 3, deviations: 2.1}, outputMap: {regression: 'prChannel100_3_21', upper: 'prChannelUpper100_3_21', lower: 'prChannelLower100_3_21'}},
//     {study: studies.PolynomialRegressionChannel, inputs: {length: 100, degree: 4, deviations: 2.1}, outputMap: {regression: 'prChannel100_4_21', upper: 'prChannelUpper100_4_21', lower: 'prChannelLower100_4_21'}},
//     {study: studies.PolynomialRegressionChannel, inputs: {length: 200, degree: 2, deviations: 1.618}, outputMap: {regression: 'prChannel200_2_1618', upper: 'prChannelUpper200_2_1618', lower: 'prChannelLower200_2_1618'}},
//     {study: studies.PolynomialRegressionChannel, inputs: {length: 200, degree: 3, deviations: 1.618}, outputMap: {regression: 'prChannel200_3_1618', upper: 'prChannelUpper200_3_1618', lower: 'prChannelLower200_3_1618'}},
//     {study: studies.PolynomialRegressionChannel, inputs: {length: 200, degree: 4, deviations: 1.618}, outputMap: {regression: 'prChannel200_4_1618', upper: 'prChannelUpper200_4_1618', lower: 'prChannelLower200_4_1618'}},
//     {study: studies.PolynomialRegressionChannel, inputs: {length: 200, degree: 2, deviations: 1.7}, outputMap: {regression: 'prChannel200_2_17', upper: 'prChannelUpper200_2_17', lower: 'prChannelLower200_2_17'}},
//     {study: studies.PolynomialRegressionChannel, inputs: {length: 200, degree: 3, deviations: 1.7}, outputMap: {regression: 'prChannel200_3_17', upper: 'prChannelUpper200_3_17', lower: 'prChannelLower200_3_17'}},
//     {study: studies.PolynomialRegressionChannel, inputs: {length: 200, degree: 4, deviations: 1.7}, outputMap: {regression: 'prChannel200_4_17', upper: 'prChannelUpper200_4_17', lower: 'prChannelLower200_4_17'}},
//     {study: studies.PolynomialRegressionChannel, inputs: {length: 200, degree: 2, deviations: 1.9}, outputMap: {regression: 'prChannel200_2_19', upper: 'prChannelUpper200_2_19', lower: 'prChannelLower200_2_19'}},
//     {study: studies.PolynomialRegressionChannel, inputs: {length: 200, degree: 3, deviations: 1.9}, outputMap: {regression: 'prChannel200_3_19', upper: 'prChannelUpper200_3_19', lower: 'prChannelLower200_3_19'}},
//     {study: studies.PolynomialRegressionChannel, inputs: {length: 200, degree: 4, deviations: 1.9}, outputMap: {regression: 'prChannel200_4_19', upper: 'prChannelUpper200_4_19', lower: 'prChannelLower200_4_19'}},
//     {study: studies.PolynomialRegressionChannel, inputs: {length: 200, degree: 2, deviations: 1.95}, outputMap: {regression: 'prChannel200_2_195', upper: 'prChannelUpper200_2_195', lower: 'prChannelLower200_2_195'}},
//     {study: studies.PolynomialRegressionChannel, inputs: {length: 200, degree: 3, deviations: 1.95}, outputMap: {regression: 'prChannel200_3_195', upper: 'prChannelUpper200_3_195', lower: 'prChannelLower200_3_195'}},
//     {study: studies.PolynomialRegressionChannel, inputs: {length: 200, degree: 4, deviations: 1.95}, outputMap: {regression: 'prChannel200_4_195', upper: 'prChannelUpper200_4_195', lower: 'prChannelLower200_4_195'}},
//     {study: studies.PolynomialRegressionChannel, inputs: {length: 200, degree: 2, deviations: 2.0}, outputMap: {regression: 'prChannel200_2_20', upper: 'prChannelUpper200_2_20', lower: 'prChannelLower200_2_20'}},
//     {study: studies.PolynomialRegressionChannel, inputs: {length: 200, degree: 3, deviations: 2.0}, outputMap: {regression: 'prChannel200_3_20', upper: 'prChannelUpper200_3_20', lower: 'prChannelLower200_3_20'}},
//     {study: studies.PolynomialRegressionChannel, inputs: {length: 200, degree: 4, deviations: 2.0}, outputMap: {regression: 'prChannel200_4_20', upper: 'prChannelUpper200_4_20', lower: 'prChannelLower200_4_20'}},
//     {study: studies.PolynomialRegressionChannel, inputs: {length: 200, degree: 2, deviations: 2.1}, outputMap: {regression: 'prChannel200_2_21', upper: 'prChannelUpper200_2_21', lower: 'prChannelLower200_2_21'}},
//     {study: studies.PolynomialRegressionChannel, inputs: {length: 200, degree: 3, deviations: 2.1}, outputMap: {regression: 'prChannel200_3_21', upper: 'prChannelUpper200_3_21', lower: 'prChannelLower200_3_21'}},
//     {study: studies.PolynomialRegressionChannel, inputs: {length: 200, degree: 4, deviations: 2.1}, outputMap: {regression: 'prChannel200_4_21', upper: 'prChannelUpper200_4_21', lower: 'prChannelLower200_4_21'}},
//     {study: studies.PolynomialRegressionChannel, inputs: {length: 250, degree: 2, deviations: 1.618}, outputMap: {regression: 'prChannel250_2_1618', upper: 'prChannelUpper250_2_1618', lower: 'prChannelLower250_2_1618'}},
//     {study: studies.PolynomialRegressionChannel, inputs: {length: 250, degree: 3, deviations: 1.618}, outputMap: {regression: 'prChannel250_3_1618', upper: 'prChannelUpper250_3_1618', lower: 'prChannelLower250_3_1618'}},
//     {study: studies.PolynomialRegressionChannel, inputs: {length: 250, degree: 4, deviations: 1.618}, outputMap: {regression: 'prChannel250_4_1618', upper: 'prChannelUpper250_4_1618', lower: 'prChannelLower250_4_1618'}},
//     {study: studies.PolynomialRegressionChannel, inputs: {length: 250, degree: 2, deviations: 1.7}, outputMap: {regression: 'prChannel250_2_17', upper: 'prChannelUpper250_2_17', lower: 'prChannelLower250_2_17'}},
//     {study: studies.PolynomialRegressionChannel, inputs: {length: 250, degree: 3, deviations: 1.7}, outputMap: {regression: 'prChannel250_3_17', upper: 'prChannelUpper250_3_17', lower: 'prChannelLower250_3_17'}},
//     {study: studies.PolynomialRegressionChannel, inputs: {length: 250, degree: 4, deviations: 1.7}, outputMap: {regression: 'prChannel250_4_17', upper: 'prChannelUpper250_4_17', lower: 'prChannelLower250_4_17'}},
//     {study: studies.PolynomialRegressionChannel, inputs: {length: 250, degree: 2, deviations: 1.9}, outputMap: {regression: 'prChannel250_2_19', upper: 'prChannelUpper250_2_19', lower: 'prChannelLower250_2_19'}},
//     {study: studies.PolynomialRegressionChannel, inputs: {length: 250, degree: 3, deviations: 1.9}, outputMap: {regression: 'prChannel250_3_19', upper: 'prChannelUpper250_3_19', lower: 'prChannelLower250_3_19'}},
//     {study: studies.PolynomialRegressionChannel, inputs: {length: 250, degree: 4, deviations: 1.9}, outputMap: {regression: 'prChannel250_4_19', upper: 'prChannelUpper250_4_19', lower: 'prChannelLower250_4_19'}},
//     {study: studies.PolynomialRegressionChannel, inputs: {length: 250, degree: 2, deviations: 1.95}, outputMap: {regression: 'prChannel250_2_195', upper: 'prChannelUpper250_2_195', lower: 'prChannelLower250_2_195'}},
//     {study: studies.PolynomialRegressionChannel, inputs: {length: 250, degree: 3, deviations: 1.95}, outputMap: {regression: 'prChannel250_3_195', upper: 'prChannelUpper250_3_195', lower: 'prChannelLower250_3_195'}},
//     {study: studies.PolynomialRegressionChannel, inputs: {length: 250, degree: 4, deviations: 1.95}, outputMap: {regression: 'prChannel250_4_195', upper: 'prChannelUpper250_4_195', lower: 'prChannelLower250_4_195'}},
//     {study: studies.PolynomialRegressionChannel, inputs: {length: 250, degree: 2, deviations: 2.0}, outputMap: {regression: 'prChannel250_2_20', upper: 'prChannelUpper250_2_20', lower: 'prChannelLower250_2_20'}},
//     {study: studies.PolynomialRegressionChannel, inputs: {length: 250, degree: 3, deviations: 2.0}, outputMap: {regression: 'prChannel250_3_20', upper: 'prChannelUpper250_3_20', lower: 'prChannelLower250_3_20'}},
//     {study: studies.PolynomialRegressionChannel, inputs: {length: 250, degree: 4, deviations: 2.0}, outputMap: {regression: 'prChannel250_4_20', upper: 'prChannelUpper250_4_20', lower: 'prChannelLower250_4_20'}},
//     {study: studies.PolynomialRegressionChannel, inputs: {length: 250, degree: 2, deviations: 2.1}, outputMap: {regression: 'prChannel250_2_21', upper: 'prChannelUpper250_2_21', lower: 'prChannelLower250_2_21'}},
//     {study: studies.PolynomialRegressionChannel, inputs: {length: 250, degree: 3, deviations: 2.1}, outputMap: {regression: 'prChannel250_3_21', upper: 'prChannelUpper250_3_21', lower: 'prChannelLower250_3_21'}},
//     {study: studies.PolynomialRegressionChannel, inputs: {length: 250, degree: 4, deviations: 2.1}, outputMap: {regression: 'prChannel250_4_21', upper: 'prChannelUpper250_4_21', lower: 'prChannelLower250_4_21'}},
//     {study: studies.PolynomialRegressionChannel, inputs: {length: 300, degree: 2, deviations: 1.618}, outputMap: {regression: 'prChannel300_2_1618', upper: 'prChannelUpper300_2_1618', lower: 'prChannelLower300_2_1618'}},
//     {study: studies.PolynomialRegressionChannel, inputs: {length: 300, degree: 3, deviations: 1.618}, outputMap: {regression: 'prChannel300_3_1618', upper: 'prChannelUpper300_3_1618', lower: 'prChannelLower300_3_1618'}},
//     {study: studies.PolynomialRegressionChannel, inputs: {length: 300, degree: 4, deviations: 1.618}, outputMap: {regression: 'prChannel300_4_1618', upper: 'prChannelUpper300_4_1618', lower: 'prChannelLower300_4_1618'}},
//     {study: studies.PolynomialRegressionChannel, inputs: {length: 300, degree: 2, deviations: 1.7}, outputMap: {regression: 'prChannel300_2_17', upper: 'prChannelUpper300_2_17', lower: 'prChannelLower300_2_17'}},
//     {study: studies.PolynomialRegressionChannel, inputs: {length: 300, degree: 3, deviations: 1.7}, outputMap: {regression: 'prChannel300_3_17', upper: 'prChannelUpper300_3_17', lower: 'prChannelLower300_3_17'}},
//     {study: studies.PolynomialRegressionChannel, inputs: {length: 300, degree: 4, deviations: 1.7}, outputMap: {regression: 'prChannel300_4_17', upper: 'prChannelUpper300_4_17', lower: 'prChannelLower300_4_17'}},
//     {study: studies.PolynomialRegressionChannel, inputs: {length: 300, degree: 2, deviations: 1.9}, outputMap: {regression: 'prChannel300_2_19', upper: 'prChannelUpper300_2_19', lower: 'prChannelLower300_2_19'}},
//     {study: studies.PolynomialRegressionChannel, inputs: {length: 300, degree: 3, deviations: 1.9}, outputMap: {regression: 'prChannel300_3_19', upper: 'prChannelUpper300_3_19', lower: 'prChannelLower300_3_19'}},
//     {study: studies.PolynomialRegressionChannel, inputs: {length: 300, degree: 4, deviations: 1.9}, outputMap: {regression: 'prChannel300_4_19', upper: 'prChannelUpper300_4_19', lower: 'prChannelLower300_4_19'}},
//     {study: studies.PolynomialRegressionChannel, inputs: {length: 300, degree: 2, deviations: 1.95}, outputMap: {regression: 'prChannel300_2_195', upper: 'prChannelUpper300_2_195', lower: 'prChannelLower300_2_195'}},
//     {study: studies.PolynomialRegressionChannel, inputs: {length: 300, degree: 3, deviations: 1.95}, outputMap: {regression: 'prChannel300_3_195', upper: 'prChannelUpper300_3_195', lower: 'prChannelLower300_3_195'}},
//     {study: studies.PolynomialRegressionChannel, inputs: {length: 300, degree: 4, deviations: 1.95}, outputMap: {regression: 'prChannel300_4_195', upper: 'prChannelUpper300_4_195', lower: 'prChannelLower300_4_195'}},
//     {study: studies.PolynomialRegressionChannel, inputs: {length: 300, degree: 2, deviations: 2.0}, outputMap: {regression: 'prChannel300_2_20', upper: 'prChannelUpper300_2_20', lower: 'prChannelLower300_2_20'}},
//     {study: studies.PolynomialRegressionChannel, inputs: {length: 300, degree: 3, deviations: 2.0}, outputMap: {regression: 'prChannel300_3_20', upper: 'prChannelUpper300_3_20', lower: 'prChannelLower300_3_20'}},
//     {study: studies.PolynomialRegressionChannel, inputs: {length: 300, degree: 4, deviations: 2.0}, outputMap: {regression: 'prChannel300_4_20', upper: 'prChannelUpper300_4_20', lower: 'prChannelLower300_4_20'}},
//     {study: studies.PolynomialRegressionChannel, inputs: {length: 300, degree: 2, deviations: 2.1}, outputMap: {regression: 'prChannel300_2_21', upper: 'prChannelUpper300_2_21', lower: 'prChannelLower300_2_21'}},
//     {study: studies.PolynomialRegressionChannel, inputs: {length: 300, degree: 3, deviations: 2.1}, outputMap: {regression: 'prChannel300_3_21', upper: 'prChannelUpper300_3_21', lower: 'prChannelLower300_3_21'}},
//     {study: studies.PolynomialRegressionChannel, inputs: {length: 300, degree: 4, deviations: 2.1}, outputMap: {regression: 'prChannel300_4_21', upper: 'prChannelUpper300_4_21', lower: 'prChannelLower300_4_21'}},
//     {study: studies.PolynomialRegressionChannel, inputs: {length: 200, degree: 2}, outputMap: {regression: 'trendPrChannel200_2'}},
//     {study: studies.PolynomialRegressionChannel, inputs: {length: 200, degree: 3}, outputMap: {regression: 'trendPrChannel200_3'}},
//     {study: studies.PolynomialRegressionChannel, inputs: {length: 200, degree: 4}, outputMap: {regression: 'trendPrChannel200_4'}},
//     {study: studies.PolynomialRegressionChannel, inputs: {length: 300, degree: 2}, outputMap: {regression: 'trendPrChannel300_2'}},
//     {study: studies.PolynomialRegressionChannel, inputs: {length: 300, degree: 3}, outputMap: {regression: 'trendPrChannel300_3'}},
//     {study: studies.PolynomialRegressionChannel, inputs: {length: 300, degree: 4}, outputMap: {regression: 'trendPrChannel300_4'}},
//     {study: studies.PolynomialRegressionChannel, inputs: {length: 400, degree: 2}, outputMap: {regression: 'trendPrChannel400_2'}},
//     {study: studies.PolynomialRegressionChannel, inputs: {length: 400, degree: 3}, outputMap: {regression: 'trendPrChannel400_3'}},
//     {study: studies.PolynomialRegressionChannel, inputs: {length: 400, degree: 4}, outputMap: {regression: 'trendPrChannel400_4'}},
//     {study: studies.PolynomialRegressionChannel, inputs: {length: 450, degree: 2}, outputMap: {regression: 'trendPrChannel450_2'}},
//     {study: studies.PolynomialRegressionChannel, inputs: {length: 450, degree: 3}, outputMap: {regression: 'trendPrChannel450_3'}},
//     {study: studies.PolynomialRegressionChannel, inputs: {length: 450, degree: 4}, outputMap: {regression: 'trendPrChannel450_4'}},
//     {study: studies.PolynomialRegressionChannel, inputs: {length: 500, degree: 2}, outputMap: {regression: 'trendPrChannel500_2'}},
//     {study: studies.PolynomialRegressionChannel, inputs: {length: 500, degree: 3}, outputMap: {regression: 'trendPrChannel500_3'}},
//     {study: studies.PolynomialRegressionChannel, inputs: {length: 500, degree: 4}, outputMap: {regression: 'trendPrChannel500_4'}},
//     {study: studies.PolynomialRegressionChannel, inputs: {length: 600, degree: 2}, outputMap: {regression: 'trendPrChannel600_2'}},
//     {study: studies.PolynomialRegressionChannel, inputs: {length: 600, degree: 3}, outputMap: {regression: 'trendPrChannel600_3'}},
//     {study: studies.PolynomialRegressionChannel, inputs: {length: 600, degree: 4}, outputMap: {regression: 'trendPrChannel600_4'}},
//     {study: studies.PolynomialRegressionChannel, inputs: {length: 650, degree: 2}, outputMap: {regression: 'trendPrChannel650_2'}},
//     {study: studies.PolynomialRegressionChannel, inputs: {length: 650, degree: 3}, outputMap: {regression: 'trendPrChannel650_3'}},
//     {study: studies.PolynomialRegressionChannel, inputs: {length: 650, degree: 4}, outputMap: {regression: 'trendPrChannel650_4'}}
// ];

// var configurationOptions = {
//     ema200: [true, false],
//     ema100: [true, false],
//     ema50: [true, false],
//     ema13: [true, false],
//     sma13: [true, false],
//     rsi: [
//         null,
//         {rsi: 'rsi14', overbought: 70, oversold: 30},
//         {rsi: 'rsi7', overbought: 77, oversold: 23},
//         {rsi: 'rsi7', overbought: 80, oversold: 20},
//         {rsi: 'rsi5', overbought: 80, oversold: 20},
//         {rsi: 'rsi2', overbought: 95, oversold: 5}
//     ],
//     prChannel: [
//         null,
//         {upper: 'prChannelUpper100_2_1618', lower: 'prChannelLower100_2_1618'},
//         {upper: 'prChannelUpper100_3_1618', lower: 'prChannelLower100_3_1618'},
//         {upper: 'prChannelUpper100_4_1618', lower: 'prChannelLower100_4_1618'},
//         {upper: 'prChannelUpper100_2_17', lower: 'prChannelLower100_2_17'},
//         {upper: 'prChannelUpper100_3_17', lower: 'prChannelLower100_3_17'},
//         {upper: 'prChannelUpper100_4_17', lower: 'prChannelLower100_4_17'},
//         {upper: 'prChannelUpper100_2_19', lower: 'prChannelLower100_2_19'},
//         {upper: 'prChannelUpper100_3_19', lower: 'prChannelLower100_3_19'},
//         {upper: 'prChannelUpper100_4_19', lower: 'prChannelLower100_4_19'},
//         {upper: 'prChannelUpper100_2_195', lower: 'prChannelLower100_2_195'},
//         {upper: 'prChannelUpper100_3_195', lower: 'prChannelLower100_3_195'},
//         {upper: 'prChannelUpper100_4_195', lower: 'prChannelLower100_4_195'},
//         {upper: 'prChannelUpper100_2_20', lower: 'prChannelLower100_2_20'},
//         {upper: 'prChannelUpper100_3_20', lower: 'prChannelLower100_3_20'},
//         {upper: 'prChannelUpper100_4_20', lower: 'prChannelLower100_4_20'},
//         {upper: 'prChannelUpper100_2_21', lower: 'prChannelLower100_2_21'},
//         {upper: 'prChannelUpper100_3_21', lower: 'prChannelLower100_3_21'},
//         {upper: 'prChannelUpper100_4_21', lower: 'prChannelLower100_4_21'},
//         {upper: 'prChannelUpper200_2_1618', lower: 'prChannelLower200_2_1618'},
//         {upper: 'prChannelUpper200_3_1618', lower: 'prChannelLower200_3_1618'},
//         {upper: 'prChannelUpper200_4_1618', lower: 'prChannelLower200_4_1618'},
//         {upper: 'prChannelUpper200_2_17', lower: 'prChannelLower200_2_17'},
//         {upper: 'prChannelUpper200_3_17', lower: 'prChannelLower200_3_17'},
//         {upper: 'prChannelUpper200_4_17', lower: 'prChannelLower200_4_17'},
//         {upper: 'prChannelUpper200_2_19', lower: 'prChannelLower200_2_19'},
//         {upper: 'prChannelUpper200_3_19', lower: 'prChannelLower200_3_19'},
//         {upper: 'prChannelUpper200_4_19', lower: 'prChannelLower200_4_19'},
//         {upper: 'prChannelUpper200_2_195', lower: 'prChannelLower200_2_195'},
//         {upper: 'prChannelUpper200_3_195', lower: 'prChannelLower200_3_195'},
//         {upper: 'prChannelUpper200_4_195', lower: 'prChannelLower200_4_195'},
//         {upper: 'prChannelUpper200_2_20', lower: 'prChannelLower200_2_20'},
//         {upper: 'prChannelUpper200_3_20', lower: 'prChannelLower200_3_20'},
//         {upper: 'prChannelUpper200_4_20', lower: 'prChannelLower200_4_20'},
//         {upper: 'prChannelUpper200_2_21', lower: 'prChannelLower200_2_21'},
//         {upper: 'prChannelUpper200_3_21', lower: 'prChannelLower200_3_21'},
//         {upper: 'prChannelUpper200_4_21', lower: 'prChannelLower200_4_21'},
//         {upper: 'prChannelUpper250_2_1618', lower: 'prChannelLower250_2_1618'},
//         {upper: 'prChannelUpper250_3_1618', lower: 'prChannelLower250_3_1618'},
//         {upper: 'prChannelUpper250_4_1618', lower: 'prChannelLower250_4_1618'},
//         {upper: 'prChannelUpper250_2_17', lower: 'prChannelLower250_2_17'},
//         {upper: 'prChannelUpper250_3_17', lower: 'prChannelLower250_3_17'},
//         {upper: 'prChannelUpper250_4_17', lower: 'prChannelLower250_4_17'},
//         {upper: 'prChannelUpper250_2_19', lower: 'prChannelLower250_2_19'},
//         {upper: 'prChannelUpper250_3_19', lower: 'prChannelLower250_3_19'},
//         {upper: 'prChannelUpper250_4_19', lower: 'prChannelLower250_4_19'},
//         {upper: 'prChannelUpper250_2_195', lower: 'prChannelLower250_2_195'},
//         {upper: 'prChannelUpper250_3_195', lower: 'prChannelLower250_3_195'},
//         {upper: 'prChannelUpper250_4_195', lower: 'prChannelLower250_4_195'},
//         {upper: 'prChannelUpper250_2_20', lower: 'prChannelLower250_2_20'},
//         {upper: 'prChannelUpper250_3_20', lower: 'prChannelLower250_3_20'},
//         {upper: 'prChannelUpper250_4_20', lower: 'prChannelLower250_4_20'},
//         {upper: 'prChannelUpper250_2_21', lower: 'prChannelLower250_2_21'},
//         {upper: 'prChannelUpper250_3_21', lower: 'prChannelLower250_3_21'},
//         {upper: 'prChannelUpper250_4_21', lower: 'prChannelLower250_4_21'},
//         {upper: 'prChannelUpper300_2_1618', lower: 'prChannelLower300_2_1618'},
//         {upper: 'prChannelUpper300_3_1618', lower: 'prChannelLower300_3_1618'},
//         {upper: 'prChannelUpper300_4_1618', lower: 'prChannelLower300_4_1618'},
//         {upper: 'prChannelUpper300_2_17', lower: 'prChannelLower300_2_17'},
//         {upper: 'prChannelUpper300_3_17', lower: 'prChannelLower300_3_17'},
//         {upper: 'prChannelUpper300_4_17', lower: 'prChannelLower300_4_17'},
//         {upper: 'prChannelUpper300_2_19', lower: 'prChannelLower300_2_19'},
//         {upper: 'prChannelUpper300_3_19', lower: 'prChannelLower300_3_19'},
//         {upper: 'prChannelUpper300_4_19', lower: 'prChannelLower300_4_19'},
//         {upper: 'prChannelUpper300_2_195', lower: 'prChannelLower300_2_195'},
//         {upper: 'prChannelUpper300_3_195', lower: 'prChannelLower300_3_195'},
//         {upper: 'prChannelUpper300_4_195', lower: 'prChannelLower300_4_195'},
//         {upper: 'prChannelUpper300_2_20', lower: 'prChannelLower300_2_20'},
//         {upper: 'prChannelUpper300_3_20', lower: 'prChannelLower300_3_20'},
//         {upper: 'prChannelUpper300_4_20', lower: 'prChannelLower300_4_20'},
//         {upper: 'prChannelUpper300_2_21', lower: 'prChannelLower300_2_21'},
//         {upper: 'prChannelUpper300_3_21', lower: 'prChannelLower300_3_21'},
//         {upper: 'prChannelUpper300_4_21', lower: 'prChannelLower300_4_21'}
//     ],
//     trendPrChannel: [
//         null,
//         {regression: 'trendPrChannel200_2'},
//         {regression: 'trendPrChannel200_3'},
//         {regression: 'trendPrChannel200_4'},
//         {regression: 'trendPrChannel300_2'},
//         {regression: 'trendPrChannel300_3'},
//         {regression: 'trendPrChannel300_4'},
//         {regression: 'trendPrChannel400_2'},
//         {regression: 'trendPrChannel400_3'},
//         {regression: 'trendPrChannel400_4'},
//         {regression: 'trendPrChannel450_2'},
//         {regression: 'trendPrChannel450_3'},
//         {regression: 'trendPrChannel450_4'},
//         {regression: 'trendPrChannel500_2'},
//         {regression: 'trendPrChannel500_3'},
//         {regression: 'trendPrChannel500_4'},
//         {regression: 'trendPrChannel550_2'},
//         {regression: 'trendPrChannel550_3'},
//         {regression: 'trendPrChannel550_4'},
//         {regression: 'trendPrChannel600_2'},
//         {regression: 'trendPrChannel600_3'},
//         {regression: 'trendPrChannel600_4'},
//         {regression: 'trendPrChannel650_2'},
//         {regression: 'trendPrChannel650_3'},
//         {regression: 'trendPrChannel650_4'}
//     ]
// };

var studyDefinitions = [
    {study: studies.Ema, inputs: {length: 200}, outputMap: {ema: 'ema200'}},
    {study: studies.Ema, inputs: {length: 100}, outputMap: {ema: 'ema100'}},
    {study: studies.Ema, inputs: {length: 50}, outputMap: {ema: 'ema50'}},
    {study: studies.Sma, inputs: {length: 13}, outputMap: {ema: 'sma13'}},
    {study: studies.Rsi, inputs: {length: 7}, outputMap: {rsi: 'rsi7'}},
    {study: studies.Rsi, inputs: {length: 5}, outputMap: {rsi: 'rsi5'}},
    {study: studies.PolynomialRegressionChannel, inputs: {length: 200, degree: 2, deviations: 1.9}, outputMap: {regression: 'prChannel200_2_19', upper: 'prChannelUpper200_2_19', lower: 'prChannelLower200_2_19'}},
    {study: studies.PolynomialRegressionChannel, inputs: {length: 200, degree: 3, deviations: 1.9}, outputMap: {regression: 'prChannel200_3_19', upper: 'prChannelUpper200_3_19', lower: 'prChannelLower200_3_19'}},
    {study: studies.PolynomialRegressionChannel, inputs: {length: 250, degree: 2, deviations: 1.9}, outputMap: {regression: 'prChannel250_2_19', upper: 'prChannelUpper250_2_19', lower: 'prChannelLower250_2_19'}},
    {study: studies.PolynomialRegressionChannel, inputs: {length: 250, degree: 3, deviations: 1.9}, outputMap: {regression: 'prChannel250_3_19', upper: 'prChannelUpper250_3_19', lower: 'prChannelLower250_3_19'}},
    {study: studies.PolynomialRegressionChannel, inputs: {length: 200, degree: 2, deviations: 1.95}, outputMap: {regression: 'prChannel200_2_195', upper: 'prChannelUpper200_2_195', lower: 'prChannelLower200_2_195'}},
    {study: studies.PolynomialRegressionChannel, inputs: {length: 200, degree: 3, deviations: 1.95}, outputMap: {regression: 'prChannel200_3_195', upper: 'prChannelUpper200_3_195', lower: 'prChannelLower200_3_195'}},
    {study: studies.PolynomialRegressionChannel, inputs: {length: 250, degree: 2, deviations: 1.95}, outputMap: {regression: 'prChannel250_2_195', upper: 'prChannelUpper250_2_195', lower: 'prChannelLower250_2_195'}},
    {study: studies.PolynomialRegressionChannel, inputs: {length: 250, degree: 3, deviations: 1.95}, outputMap: {regression: 'prChannel250_3_195', upper: 'prChannelUpper250_3_195', lower: 'prChannelLower250_3_195'}},
    {study: studies.PolynomialRegressionChannel, inputs: {length: 200, degree: 2, deviations: 2.0}, outputMap: {regression: 'prChannel200_2_20', upper: 'prChannelUpper200_2_20', lower: 'prChannelLower200_2_20'}},
    {study: studies.PolynomialRegressionChannel, inputs: {length: 200, degree: 3, deviations: 2.0}, outputMap: {regression: 'prChannel200_3_20', upper: 'prChannelUpper200_3_20', lower: 'prChannelLower200_3_20'}},
    {study: studies.PolynomialRegressionChannel, inputs: {length: 250, degree: 2, deviations: 2.0}, outputMap: {regression: 'prChannel250_2_20', upper: 'prChannelUpper250_2_20', lower: 'prChannelLower250_2_20'}},
    {study: studies.PolynomialRegressionChannel, inputs: {length: 250, degree: 3, deviations: 2.0}, outputMap: {regression: 'prChannel250_3_20', upper: 'prChannelUpper250_3_20', lower: 'prChannelLower250_3_20'}},
    {study: studies.PolynomialRegressionChannel, inputs: {length: 250, degree: 4, deviations: 1.95}, outputMap: {regression: 'prChannel250_4_195', upper: 'prChannelUpper250_4_195', lower: 'prChannelLower250_4_195'}},
    {study: studies.PolynomialRegressionChannel, inputs: {length: 550, degree: 3}, outputMap: {regression: 'trendPrChannel550_3'}}
    {study: studies.PolynomialRegressionChannel, inputs: {length: 600, degree: 2}, outputMap: {regression: 'trendPrChannel600_2'}}
    {study: studies.PolynomialRegressionChannel, inputs: {length: 600, degree: 3}, outputMap: {regression: 'trendPrChannel600_3'}}
    {study: studies.PolynomialRegressionChannel, inputs: {length: 600, degree: 4}, outputMap: {regression: 'trendPrChannel600_4'}}
    {study: studies.PolynomialRegressionChannel, inputs: {length: 650, degree: 3}, outputMap: {regression: 'trendPrChannel650_3'}}
];

var configurationOptions = {
    ema200: [true, false],
    ema100: [true, false],
    ema50: [true],
    ema13: [true],
    sma13: [true],
    rsi: [
        {rsi: 'rsi7', overbought: 77, oversold: 23},
        {rsi: 'rsi7', overbought: 80, oversold: 20},
        {rsi: 'rsi5', overbought: 80, oversold: 20}
    ],
    prChannel: [
        null,
        {upper: 'prChannelUpper200_2_19', lower: 'prChannelLower200_2_19'},
        {upper: 'prChannelUpper200_3_19', lower: 'prChannelLower200_3_19'},
        {upper: 'prChannelUpper250_2_19', lower: 'prChannelLower250_2_19'},
        {upper: 'prChannelUpper250_3_19', lower: 'prChannelLower250_3_19'},
        {upper: 'prChannelUpper200_2_195', lower: 'prChannelLower200_2_195'},
        {upper: 'prChannelUpper200_3_195', lower: 'prChannelLower200_3_195'},
        {upper: 'prChannelUpper250_2_195', lower: 'prChannelLower250_2_195'},
        {upper: 'prChannelUpper250_3_195', lower: 'prChannelLower250_3_195'},
        {upper: 'prChannelUpper200_2_20', lower: 'prChannelLower200_2_20'},
        {upper: 'prChannelUpper200_3_20', lower: 'prChannelLower200_3_20'},
        {upper: 'prChannelUpper250_2_20', lower: 'prChannelLower250_2_20'},
        {upper: 'prChannelUpper250_3_20', lower: 'prChannelLower250_3_20'},
        {upper: 'prChannelUpper250_4_195', lower: 'prChannelLower250_4_195'}
    ],
    trendPrChannel: [
        null,
        {regression: 'trendPrChannel550_3'},
        {regression: 'trendPrChannel600_2'},
        {regression: 'trendPrChannel600_3'},
        {regression: 'trendPrChannel600_4'},
        {regression: 'trendPrChannel650_3'}
    ]
};

function Reversals(symbol) {
    this.constructor = Reversals;
    Base.call(this, strategies.optimization.Reversals, symbol);

    // Prepare studies for use.
    this.prepareStudies(studyDefinitions);

    // Prepare all optimization configurations.
    this.configurations = this.buildConfigurations(configurationOptions);
}

// Create a copy of the Base "class" prototype for use in this "class."
Reversals.prototype = Object.create(Base.prototype);

Reversals.prototype.optimize = function(data, investment, profitability) {
    // Prepare all data in advance for use.
    data = this.prepareStudyData(data);

    Base.prototype.optimize.call(this, this.configurations, data, investment, profitability);
};

module.exports = Reversals;
