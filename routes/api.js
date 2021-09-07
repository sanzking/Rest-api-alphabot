__path = process.cwd()
//var favicon = require('serve-favicon');
var express = require('express');
var db = require(__path + '/database/db');
try {
var zahirr = db.get("zahirr");
} catch (e) {
	console.log('')
}

var nunyieun = "sanzking"
var ytdl = require('ytdl-core');
var ytpl = require('ytpl');
var secure = require('ssl-express-www');
var cors = require('cors');
//var zrapi = require("zrapi");
//var dotenv = require("dotenv").config()
var scrapeYt = require("scrape-yt");
var fetch = require('node-fetch');
var cheerio = require('cheerio');
var request = require('request');
var TikTokScraper = require('tiktok-scraper');
var router  = express.Router();

var { color, bgcolor } = require(__path + '/lib/color.js');
var { fetchJson } = require(__path + '/lib/fetcher.js')
var options = require(__path + '/lib/options.js');
var {
	Vokal,
	
	
	Base,
	Searchnabi,
    Gempa
} = require('./../lib');
var cookie = "HSID=A7EDzLn3kae2B1Njb;SSID=AheuwUjMojTWvA5GN;APISID=cgfXh13rQbb4zbLP/AlvlPJ2xBJBsykmS_;SAPISID=m82rJG4AC9nxQ5uG/A1FotfA_gi9pvo91C;__Secure-3PAPISID=m82rJG4AC9nxQ5uG/A1FotfA_gi9pvo91C;VISITOR_INFO1_LIVE=RgZLnZtCoPU;LOGIN_INFO=AFmmF2swRQIhAOXIXsKVou2azuz-kTsCKpbM9szRExAMUD-OwHYiuB6eAiAyPm4Ag3O9rbma7umBK-AG1zoGqyJinh4ia03csp5Nkw:QUQ3MjNmeXJ0UHFRS3dzaTNGRmlWR2FfMDRxa2NRYTFiN3lfTEdOVTc4QUlwbUI4S2dlVngxSG10N3ZqcHZwTHBKano5SkN2dDlPSkhRMUtReE42TkhYeUVWS3kyUE1jY2I1QzA1MDZBaktwd1llWU9lOWE4NWhoZV92aDkxeE9vMTNlcG1uMU9rYjhOaDZWdno2ZzN3TXl5TVNhSjNBRnJaMExrQXpoa2xzRVUteFNWZDI5S0Fn;PREF=app=desktop&f4=4000000&al=id;SID=2wezCMTUkWN3YS1VmS_DXaEU84J0pZIQdemM8Zry-uzWm8y1njBpLTOpxSfN-EaYCRSiDg.;YSC=HCowA1fmvzo;__Secure-3PSID=2wezCMTUkWN3YS1VmS_DXaEU84J0pZIQdemM8Zry-uzWm8y1dajgWzlBh9TgKapGOwuXfA.;SIDCC=AJi4QfFK0ri9fSfMjMQ4tOJNp6vOb9emETXB_nf2S05mvr2jBlmeEvlSsQSzPMuJl_V0wcbL1r8;__Secure-3PSIDCC=AJi4QfGeWHx-c4uTpU1rXCciO1p0s2fJWU07KrkZhWyD1Tqi8LyR-kHuBwHY9mViVYu1fRh2PA";


loghandler = {
    notparam: {
        status: false,
        nunyieun: `${nunyieun}`,
        kode: 406,
        pesan: 'masukan parameter apikey',
        getApikey: 'apikey kamu tidak valid :('
    },
    notkey: {
        status: false,
        nunyieun: `${nunyieun}`,
        kode: 406,
        pesan: 'masukan parameter key'
    },
    noturl: {
        status: false,
        nunyieun: `${nunyieun}`,
        kode: 406,
        pesan: 'masukan parameter url'
    },
    notkata: {
        status: false,
        nunyieun: `${nunyieun}`,
        kode: 406,
        pesan: 'masukan parameter kata'
    },
    nottext: {
        status: false,
        nunyieun: `${nunyieun}`,
        kode: 406,
        pesan: 'masukan parameter text'
    },
    nottext2: {
        status: false,
        nunyieun: `${nunyieun}`,
        kode: 406,
        pesan: 'masukan parameter text2'
    },
    notnabi: {
        status: false,
        nunyieun: `${nunyieun}`,
        kode: 406,
        pesan: 'masukan parameter nabi'
    },
    nottext3: {
        status: false,
        nunyieun: `${nunyieun}`,
        kode: 406,
        pesan: 'masukan parameter text3'
    },
    nottheme: {
        status: false,
        nunyieun: `${nunyieun}`,
        kode: 406,
        pesan: 'masukan parameter theme'
    },
    notusername: {
        status: false,
        nunyieun: `${nunyieun}`,
        kode: 406,
        pesan: 'masukan parameter username'
    },
    notvalue: {
        status: false,
        nunyieun: `${nunyieun}`,
        kode: 406,
        pesan: 'masukan parameter value'
    },
    notheme: {
    	status: false,
        nunyieun: `${nunyieun}`,
        kode: 406,
        pesan: 'theme tidak tersedia silahkan masukkan texmaker/list atau baca documentasi'
     },
    invalidKey: {
        status: false,
        nunyieun: `${nunyieun}`,
        kode: 406,
        pesan: 'apikey kamu tidak valid :('
    },
    invalidlink: {
        status: false,
        nunyieun: `${nunyieun}`,
        pesan: 'error, mungkin link anda tidak valid.'
    },
    invalidkata: {
        status: false,
        nunyieun: `${nunyieun}`,
        pesan: 'error, mungkin kata tidak ada dalam api.'
    },
    notAddApiKey: {
        status: false,
        nunyieun: `${nunyieun}`,
        kode: 406,
        pesan: 'masukan parameter status, apikeyInput, email, nomorhp, name, age, country, exp'
    },
    error: {
        status: false,
        nunyieun: `${nunyieun}`,
        pesan: 'maaf, sedang gangguan :('
    }
}

const listkey = ["sanzking", "sanzking"];
//router.use(favicon(__path + "/views/logo.ico"));

var len = 15
        var arr = '123456789abcdefghijklmnopqrstuvwxyz'
        var random = '';

        for (var i = len; i > 0; i--) {
            random += arr[Math.floor(Math.random() * arr.length)];
        }

        var lenn = 5
        var randomlagi = '';

        for (var i = lenn; i > 0; i--) {
            randomlagi += arr[Math.floor(Math.random() * arr.length)];
        }

        var randomTextNumber = random+randomlagi+'---------ZahirGanteng'+'ZHIRRR--GANS';
        
router.get('/cekapikey', async (req, res, next) => {
	var apikeyInput = req.query.apikey
	if(!apikeyInput) return res.json(loghandler.notparam)
	a = await cekApiKey(apikeyInput)
	if (a) {
	json = JSON.stringify({
		status: true,
		nunyieun: nunyieun,
		hasil: {
            status:a.status,
			id: a._id,
			apikey: a.apikey,
			more_info: {
				email: a.email,
				nomor_hp: a.nomor_hp,
				name: a.name,
				age: a.age,
				country: a.country,
				exp:a.exp,
			},
		},
		pesan: `jangan lupa follow ${nunyieun}`
	})
} else {
	json = JSON.stringify({
		status: false
	})
}
res.send(JSON.parse(json))
})

router.get('/addapikey', (req, res, next) => {
    var apikey = req.query.apikey,
        status = req.query.status,
        apikeyInput  = req.query.apikeyInput,
        email = req.query.email,
        nomorhp = req.query.nomorhp
        name = req.query.name,
        age = req.query.age,
        country = req.query.country;
        exp = req.query.exp;

    if (!apikey) return res.json(loghandler.notparam)
    if (!(status && apikeyInput && email && nomorhp && name && age && country && exp)) return res.json(loghandler.notAddApiKey)
    if (apikey != 'sanzking') return res.json(loghandler.invalidKey)

    try {
        zahirr.insert({
        	status: status,
            apikey: apikeyInput,
            email: email,
            nomor_hp: nomorhp,
            name: name,
            age: age,
            country: country,
            exp: exp
        })
        .then(() => {
              res.json({
                  status: true,
                  nunyieun: `${nunyieun}`,
                  hasil: 'berhasil menambah data, status : ' + status + ', apikey : ' + apikeyInput + ', email : ' + email + ', nomor_hp : ' + nomorhp + ', name :  ' + name + ', age : ' + age + ', country : ' + country + ', exp : ' + exp
              })
        })
    } catch (e) {
        console.log(e)
        res.json(loghandler.error)
    }
})

router.get('/remove', (req, res, next) => {
    var apikey = req.query.apikey,
        status = req.query.status,
        apikeyInput  = req.query.apikeyInput,
        email = req.query.email,
        nomorhp = req.query.nomorhp
        name = req.query.name,
        age = req.query.age,
        country = req.query.country;
        exp = req.query.exp;

    if (!apikey) return res.json(loghandler.notparam)
    if (!(status && apikeyInput && email && nomorhp && name && age && country && exp)) return res.json(loghandler.notAddApiKey)
    if (apikey != 'sanzking') return res.json(loghandler.invalidKey)

    try {
        zahirr.remove({
            status: status,
            apikey: apikeyInput,
            email: email,
            nomor_hp: nomorhp,
            name: name,
            age: age,
            country: country,
            exp: exp
        })
        .then(() => {
             res.json({
                  status: true,
                  nunyieun: `${nunyieun}`,
                  hasil: 'berhasil menghapus data, status : ' + status + ', apikey : ' + apikeyInput + ', email : ' + email + ', nomor_hp : ' + nomorhp + ', name :  ' + name + ', age : ' + age + ', country : ' + country + ', exp : ' + exp
              })
        })
    } catch (e) {
        console.log(e)
        res.json(loghandler.error)
    }
})
/*
=====> GACHA CECAN <=====
*/
router.get('/china', async (req, res, next) => {
  var apikeyInput = req.query.apikey;
  if(!apikeyInput) return res.json(loghandler.notparam)
  if(listkey.includes(apikeyInput)) {
    const china = JSON.parse(fs.readFileSync(__path +'/cecan/china.json'));
    const China = china[Math.floor(Math.random() * china.length)];
    let hasil = China.url;
    data = await fetch(hasil).then(v => v.buffer())
    await fs.writeFileSync(__path +'/tmp/gambar.jpg', data)
    res.sendFile(__path +'/tmp/gambar.jpg')
  } else {
    res.json(loghandler.invalidKey)
  }
})
router.get('/cewe/vietnam', async (req, res, next) => {
        var apikeyInput = req.query.apikey
	if(!apikeyInput) return res.json(loghandler.notparam)	
	if (apikeyInput != 'sanzking')  return res.json(loghandler.invalidKey)
       fetch(enkodeURI(`https://raw.githubusercontent.com/sanzking/Asupan/main/cecan/vietnam.json`))
        .then(response => response.json())
        .then(data => {
        var hasil = data;
        var hasil = data[Math.floor(Math.random() * data.length)];
             res.json({
             	author: 'sanzking',
                 hasil
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})
router.get('/cewe/thailand', async (req, res, next) => {
        var apikeyInput = req.query.apikey
	if(!apikeyInput) return res.json(loghandler.notparam)	
	if (apikeyInput != 'sanzking')  return res.json(loghandler.invalidKey)
       fetch(enkodeURI(`https://raw.githubusercontent.com/sanzking/Asupan/main/cecan/thailand.json`))
        .then(response => response.json())
        .then(data => {
        var hasil = data;
        var hasil = data[Math.floor(Math.random() * data.length)];
             res.json({
             	author: 'sanzking',
                 hasil
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})
router.get('/cewe/china', async (req, res, next) => {
        var apikeyInput = req.query.apikey
	if(!apikeyInput) return res.json(loghandler.notparam)	
	if (apikeyInput != 'sanzking')  return res.json(loghandler.invalidKey)
       fetch(enkodeURI(`https://raw.githubusercontent.com/sanzking/Asupan/main/cecan/china.json`))
        .then(response => response.json())
        .then(data => {
        var hasil = data;
        var hasil = data[Math.floor(Math.random() * data.length)];
             res.json({
             	author: 'sanzking',
                 hasil
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})
router.get('/cewe/indonesia', async (req, res, next) => {
        var apikeyInput = req.query.apikey
	if(!apikeyInput) return res.json(loghandler.notparam)	
	if (apikeyInput != 'sanzking')  return res.json(loghandler.invalidKey)
       fetch(enkodeURI(`https://raw.githubusercontent.com/sanzking/Asupan/main/cecan/indonesia.json`))
        .then(response => response.json())
        .then(data => {
        var hasil = data;
        var hasil = data[Math.floor(Math.random() * data.length)];
             res.json({
             	author: 'sanzking',
                 hasil
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})
router.get('/cewe/korea', async (req, res, next) => {
        var apikeyInput = req.query.apikey
	if(!apikeyInput) return res.json(loghandler.notparam)	
	if (apikeyInput != 'sanzking')  return res.json(loghandler.invalidKey)
       fetch(enkodeURI(`https://raw.githubusercontent.com/sanzking/Asupan/main/cecan/korea.json`))
        .then(response => response.json())
        .then(data => {
        var hasil = data;
        var hasil = data[Math.floor(Math.random() * data.length)];
             res.json({
             	author: 'sanzking',
                 hasil
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})
router.get('/cewe/japan', async (req, res, next) => {
        var apikeyInput = req.query.apikey
	if(!apikeyInput) return res.json(loghandler.notparam)	
	if (apikeyInput != 'sanzking')  return res.json(loghandler.invalidKey)
       fetch(enkodeURI(`https://raw.githubusercontent.com/sanzking/Asupan/main/cecan/japan.json`))
        .then(response => response.json())
        .then(data => {
        var hasil = data;
        var hasil = data[Math.floor(Math.random() * data.length)];
             res.json({
             	author: 'sanzking',
                 hasil
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})
router.get('/cewe/malaysia', async (req, res, next) => {
        var apikeyInput = req.query.apikey
	if(!apikeyInput) return res.json(loghandler.notparam)	
	if (apikeyInput != 'sanzking')  return res.json(loghandler.invalidKey)
       fetch(enkodeURI(`https://raw.githubusercontent.com/sanzking/Asupan/main/cecan/malaysia.json`))
        .then(response => response.json())
        .then(data => {
        var hasil = data;
        var hasil = data[Math.floor(Math.random() * data.length)];
             res.json({
             	author: 'sanzking',
                 hasil
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})
//Asupan
router.get('/asupan/cecan', async (req, res, next) => {
        var apikeyInput = req.query.apikey
	if(!apikeyInput) return res.json(loghandler.notparam)	
	if (apikeyInput != 'sanzking')  return res.json(loghandler.invalidKey)
       fetch(enkodeURI(`https://raw.githubusercontent.com/binjaicity/warga62/master/cecan.json`))
        .then(response => response.json())
        .then(data => {
        var hasil = data;
        var hasil = data[Math.floor(Math.random() * data.length)];
             res.json({
             	author: 'sanzking',
                 hasil
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})

router.get('/asupan/hijaber', async (req, res, next) => {
        var apikeyInput = req.query.apikey
	if(!apikeyInput) return res.json(loghandler.notparam)
	if (apikeyInput != 'sanzking')  return res.json(loghandler.invalidKey)
       fetch(enkodeURI(`https://raw.githubusercontent.com/binjaicity/warga62/master/hijaber.json`))
        .then(response => response.json())
        .then(data => {
        var hasil = data;
        var hasil = data[Math.floor(Math.random() * data.length)];
             res.json({
             	author: 'sanzking',
                 hasil
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})
router.get('/asupan', async (req, res, next) => {
        var apikeyInput = req.query.apikey
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if (apikeyInput != 'sanzking')  return res.json(loghandler.invalidKey)

       fetch(enkodeURI(`https://raw.githubusercontent.com/binjaicity/warga62/master/asupan.js`))
        .then(response => response.json())
        .then(data => {
        var hasil = data;
        var hasil = data[Math.floor(Math.random() * data.length)];
             res.json({
             	author: 'sanzking',
                 hasil
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})

router.get('/asupan/rikagusriani', async (req, res, next) => {
        var apikeyInput = req.query.apikey
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if (apikeyInput != 'sanzking')  return res.json(loghandler.invalidKey)

       fetch(enkodeURI(`https://raw.githubusercontent.com/binjaicity/warga62/master/asupan/rikagusriani.json`))
        .then(response => response.json())
        .then(data => {
        var hasil = data;
        var hasil = data[Math.floor(Math.random() * data.length)];
             res.json({
             	author: 'sanzking',
                 hasil
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})

router.get('/asupan/santuy', async (req, res, next) => {
        var apikeyInput = req.query.apikey
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if (apikeyInput != 'sanzking')  return res.json(loghandler.invalidKey)

       fetch(enkodeURI(`https://raw.githubusercontent.com/binjaicity/warga62/master/santuy.json`))
        .then(response => response.json())
        .then(data => {
        var hasil = data;
        var hasil = data[Math.floor(Math.random() * data.length)];
             res.json({
             	author: 'sanzking',
                 hasil
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})

router.get('/asupan/ukty', async (req, res, next) => {
        var apikeyInput = req.query.apikey
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if (apikeyInput != 'sanzking')  return res.json(loghandler.invalidKey)

       fetch(enkodeURI(`https://raw.githubusercontent.com/binjaicity/warga62/master/ukhty.json`))
        .then(response => response.json())
        .then(data => {
        var hasil = data;
        var hasil = data[Math.floor(Math.random() * data.length)];
             res.json({
             	author: 'sanzking',
                 hasil
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})

router.get('/asupan/bocil', async (req, res, next) => {
        var apikeyInput = req.query.apikey
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if (apikeyInput != 'sanzking')  return res.json(loghandler.invalidKey)

       fetch(enkodeURI(`https://raw.githubusercontent.com/binjaicity/warga62/master/bocil.json`))
        .then(response => response.json())
        .then(data => {
        var hasil = data;
        var hasil = data[Math.floor(Math.random() * data.length)];
             res.json({
             	author: 'sanzking',
                 hasil
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})

router.get('/asupan/ghea', async (req, res, next) => {
        var apikeyInput = req.query.apikey
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if (apikeyInput != 'sanzking')  return res.json(loghandler.invalidKey)

       fetch(enkodeURI(`https://raw.githubusercontent.com/binjaicity/warga62/master/geayubi.json`))
        .then(response => response.json())
        .then(data => {
        var hasil = data;
        var hasil = data[Math.floor(Math.random() * data.length)];
             res.json({
             	author: 'sanzking',
                 hasil
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})
//End Asupan

//NSFW
router.get('/nsfw/ass', async (req, res, next) => {
        var apikeyInput = req.query.apikey
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if (apikeyInput != 'sanzking')  return res.json(loghandler.invalidKey)

       fetch(enkodeURI(`https://raw.githubusercontent.com/jepribarus/JB-Api/main/nsfw/ass.json`))
        .then(response => response.json())
        .then(data => {
        var hasil = data;
        var hasil = data[Math.floor(Math.random() * data.length)];
             res.json({
             	nunyieun : `${nunyieun}`,
                 hasil
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})

router.get('/nsfw/ahegao', async (req, res, next) => {
        var apikeyInput = req.query.apikey
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if (apikeyInput != 'sanzking')  return res.json(loghandler.invalidKey)

       fetch(enkodeURI(`https://raw.githubusercontent.com/jepribarus/JB-Api/main/nsfw/ahegao.json`))
        .then(response => response.json())
        .then(data => {
        var hasil = data;
        var hasil = data[Math.floor(Math.random() * data.length)];
             res.json({
             	nunyieun : `${nunyieun}`,
                 hasil
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})

router.get('/nsfw/bdsm', async (req, res, next) => {
        var apikeyInput = req.query.apikey
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if (apikeyInput != 'sanzking')  return res.json(loghandler.invalidKey)

       fetch(enkodeURI(`https://raw.githubusercontent.com/jepribarus/JB-Api/main/nsfw/bdsm.json`))
        .then(response => response.json())
        .then(data => {
        var hasil = data;
        var hasil = data[Math.floor(Math.random() * data.length)];
             res.json({
             	nunyieun : `${nunyieun}`,
                 hasil
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})

router.get('/nsfw/blowjob', async (req, res, next) => {
        var apikeyInput = req.query.apikey
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if (apikeyInput != 'sanzking')  return res.json(loghandler.invalidKey)

       fetch(enkodeURI(`https://raw.githubusercontent.com/jepribarus/JB-Api/main/nsfw/blowjob.json`))
        .then(response => response.json())
        .then(data => {
        var hasil = data;
        var hasil = data[Math.floor(Math.random() * data.length)];
             res.json({
             	nunyieun : `${nunyieun}`,
                 hasil
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})

router.get('/nsfw/cuckold', async (req, res, next) => {
        var apikeyInput = req.query.apikey
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if (apikeyInput != 'sanzking')  return res.json(loghandler.invalidKey)

       fetch(enkodeURI(`https://raw.githubusercontent.com/jepribarus/JB-Api/main/nsfw/cuckold.json`))
        .then(response => response.json())
        .then(data => {
        var hasil = data;
        var hasil = data[Math.floor(Math.random() * data.length)];
             res.json({
             	nunyieun : `${nunyieun}`,
                 hasil
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})

router.get('/nsfw/cum', async (req, res, next) => {
        var apikeyInput = req.query.apikey
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if (apikeyInput != 'sanzking')  return res.json(loghandler.invalidKey)

       fetch(enkodeURI(`https://raw.githubusercontent.com/jepribarus/JB-Api/main/nsfw/cum.json`))
        .then(response => response.json())
        .then(data => {
        var hasil = data;
        var hasil = data[Math.floor(Math.random() * data.length)];
             res.json({
             	nunyieun : `${nunyieun}`,
                 hasil
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})

router.get('/nsfw/ero', async (req, res, next) => {
        var apikeyInput = req.query.apikey
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if (apikeyInput != 'sanzking')  return res.json(loghandler.invalidKey)

       fetch(enkodeURI(`https://raw.githubusercontent.com/jepribarus/JB-Api/main/nsfw/ero.json`))
        .then(response => response.json())
        .then(data => {
        var hasil = data;
        var hasil = data[Math.floor(Math.random() * data.length)];
             res.json({
             	nunyieun : `${nunyieun}`,
                 hasil
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})

router.get('/nsfw/femdom', async (req, res, next) => {
        var apikeyInput = req.query.apikey
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if (apikeyInput != 'sanzking')  return res.json(loghandler.invalidKey)

       fetch(enkodeURI(`https://raw.githubusercontent.com/jepribarus/JB-Api/main/nsfw/femdom.json`))
        .then(response => response.json())
        .then(data => {
        var hasil = data;
        var hasil = data[Math.floor(Math.random() * data.length)];
             res.json({
             	nunyieun : `${nunyieun}`,
                 hasil
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})

router.get('/nsfw/foot', async (req, res, next) => {
        var apikeyInput = req.query.apikey
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if (apikeyInput != 'sanzking')  return res.json(loghandler.invalidKey)

       fetch(enkodeURI(`https://raw.githubusercontent.com/jepribarus/JB-Api/main/nsfw/foot.json`))
        .then(response => response.json())
        .then(data => {
        var hasil = data;
        var hasil = data[Math.floor(Math.random() * data.length)];
             res.json({
             	nunyieun : `${nunyieun}`,
                 hasil
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})

router.get('/nsfw/gangbang', async (req, res, next) => {
        var apikeyInput = req.query.apikey
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if (apikeyInput != 'sanzking')  return res.json(loghandler.invalidKey)

       fetch(enkodeURI(`https://raw.githubusercontent.com/jepribarus/JB-Api/main/nsfw/gangbang.json`))
        .then(response => response.json())
        .then(data => {
        var hasil = data;
        var hasil = data[Math.floor(Math.random() * data.length)];
             res.json({
             	nunyieun : `${nunyieun}`,
                 hasil
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})

router.get('/nsfw/glasses', async (req, res, next) => {
        var apikeyInput = req.query.apikey
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if (apikeyInput != 'sanzking')  return res.json(loghandler.invalidKey)

       fetch(enkodeURI(`https://raw.githubusercontent.com/jepribarus/JB-Api/main/nsfw/glasses.json`))
        .then(response => response.json())
        .then(data => {
        var hasil = data;
        var hasil = data[Math.floor(Math.random() * data.length)];
             res.json({
             	nunyieun : `${nunyieun}`,
                 hasil
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})

router.get('/nsfw/hentai', async (req, res, next) => {
        var apikeyInput = req.query.apikey
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if (apikeyInput != 'sanzking')  return res.json(loghandler.invalidKey)

       fetch(enkodeURI(`https://raw.githubusercontent.com/jepribarus/JB-Api/main/nsfw/hentai.json`))
        .then(response => response.json())
        .then(data => {
        var hasil = data;
        var hasil = data[Math.floor(Math.random() * data.length)];
             res.json({
             	nunyieun : `${nunyieun}`,
                 hasil
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})

router.get('/nsfw/hentaigif', async (req, res, next) => {
        var apikeyInput = req.query.apikey
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if (apikeyInput != 'sanzking')  return res.json(loghandler.invalidKey)

       fetch(enkodeURI(`https://raw.githubusercontent.com/jepribarus/JB-Api/main/nsfw/hnt_gifs.json`))
        .then(response => response.json())
        .then(data => {
        var hasil = data;
        var hasil = data[Math.floor(Math.random() * data.length)];
             res.json({
             	nunyieun : `${nunyieun}`,
                 hasil
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})

router.get('/nsfw/jahy', async (req, res, next) => {
        var apikeyInput = req.query.apikey
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if (apikeyInput != 'sanzking')  return res.json(loghandler.invalidKey)

       fetch(enkodeURI(`https://raw.githubusercontent.com/jepribarus/JB-Api/main/nsfw/jahy.json`))
        .then(response => response.json())
        .then(data => {
        var hasil = data;
        var hasil = data[Math.floor(Math.random() * data.length)];
             res.json({
             	nunyieun : `${nunyieun}`,
                 hasil
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})

router.get('/nsfw/masturbation', async (req, res, next) => {
        var apikeyInput = req.query.apikey
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if (apikeyInput != 'sanzking')  return res.json(loghandler.invalidKey)

       fetch(enkodeURI(`https://raw.githubusercontent.com/jepribarus/JB-Api/main/nsfw/masturbation.json`))
        .then(response => response.json())
        .then(data => {
        var hasil = data;
        var hasil = data[Math.floor(Math.random() * data.length)];
             res.json({
             	nunyieun : `${nunyieun}`,
                 hasil
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})

router.get('/nsfw/nsfwNeko', async (req, res, next) => {
        var apikeyInput = req.query.apikey
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if (apikeyInput != 'sanzking')  return res.json(loghandler.invalidKey)

       fetch(enkodeURI(`https://raw.githubusercontent.com/jepribarus/JB-Api/main/nsfw/nsfwNeko.json`))
        .then(response => response.json())
        .then(data => {
        var hasil = data;
        var hasil = data[Math.floor(Math.random() * data.length)];
             res.json({
             	nunyieun : `${nunyieun}`,
                 hasil
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})

router.get('/nsfw/orgy', async (req, res, next) => {
        var apikeyInput = req.query.apikey
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if (apikeyInput != 'sanzking')  return res.json(loghandler.invalidKey)

       fetch(enkodeURI(`https://raw.githubusercontent.com/jepribarus/JB-Api/main/nsfw/orgy.json`))
        .then(response => response.json())
        .then(data => {
        var hasil = data;
        var hasil = data[Math.floor(Math.random() * data.length)];
             res.json({
             	nunyieun : `${nunyieun}`,
                 hasil
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})

router.get('/nsfw/panties', async (req, res, next) => {
        var apikeyInput = req.query.apikey
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if (apikeyInput != 'sanzking')  return res.json(loghandler.invalidKey)

       fetch(enkodeURI(`https://raw.githubusercontent.com/jepribarus/JB-Api/main/nsfw/panties.json`))
        .then(response => response.json())
        .then(data => {
        var hasil = data;
        var hasil = data[Math.floor(Math.random() * data.length)];
             res.json({
             	nunyieun : `${nunyieun}`,
                 hasil
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})

router.get('/nsfw/pussy', async (req, res, next) => {
        var apikeyInput = req.query.apikey
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if (apikeyInput != 'sanzking')  return res.json(loghandler.invalidKey)

       fetch(enkodeURI(`https://raw.githubusercontent.com/jepribarus/JB-Api/main/nsfw/pussy.json`))
        .then(response => response.json())
        .then(data => {
        var hasil = data;
        var hasil = data[Math.floor(Math.random() * data.length)];
             res.json({
             	nunyieun : `${nunyieun}`,
                 hasil
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})

router.get('/nsfw/thighs', async (req, res, next) => {
        var apikeyInput = req.query.apikey
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if (apikeyInput != 'sanzking')  return res.json(loghandler.invalidKey)

       fetch(enkodeURI(`https://raw.githubusercontent.com/jepribarus/JB-Api/main/nsfw/thighs.json`))
        .then(response => response.json())
        .then(data => {
        var hasil = data;
        var hasil = data[Math.floor(Math.random() * data.length)];
             res.json({
             	nunyieun : `${nunyieun}`,
                 hasil
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})

router.get('/nsfw/yuri', async (req, res, next) => {
        var apikeyInput = req.query.apikey
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if (apikeyInput != 'sanzking')  return res.json(loghandler.invalidKey)

       fetch(enkodeURI(`https://raw.githubusercontent.com/jepribarus/JB-Api/main/nsfw/yuri.json`))
        .then(response => response.json())
        .then(data => {
        var hasil = data;
        var hasil = data[Math.floor(Math.random() * data.length)];
             res.json({
             	nunyieun : `${nunyieun}`,
                 hasil
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})
///NSFW END
router.get('/tiktod', async (req, res, next) => {
    var apikeyInput = req.query.apikey,
        url = req.query.url


	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != 'sanzking') return res.json(loghandler.invalidKey)
     if (!url) return res.json(loghandler.noturl)

     TikTokScraper.getVideoMeta(url, options)
         .then(vid => {
             console.log(vid)
             res.json({
                 status: true,
                 nunyieun: `${nunyieun}`,
                 videoNoWm: vid
             })
         })
         .catch(e => {
             res.json(loghandler.invalidlink)
         })
})

router.get('/tiktod/stalk', async (req, res, next) => {
    var apikeyInput = req.query.apikey,
        username = req.query.username

	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != 'sanzking') return res.json(loghandler.invalidKey)
    if (!username) return res.json(loghandler.notusername)


    TikTokScraper.getUserProfileInfo(username)
        .then(user => {
            res.json({
                status : true,
                nunyieun : `${nunyieun}`,
                hasil : user
            })
        })
        .catch(e => {
             res.json({
                 status : false,
                 nunyieun : `${nunyieun}`,
                 pesan : "error, mungkin username anda tidak valid"
             })
         })
})

router.get('/randomquote', async (req, res, next) => {
        var apikeyInput = req.query.apikey
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != 'sanzking') return res.json(loghandler.invalidKey)

       fetch(enkodeURI(`https://python-api-zhirrr.herokuapp.com/api/randomquotes`))
        .then(response => response.json())
        .then(data => {
        var hasil = data;
             res.json({
                 nunyieun : `${nunyieun}`,
                 hasil
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})


router.get('/infonpm', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
            query = req.query.query
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != 'sanzking') return res.json(loghandler.invalidKey)
    if (!query) return res.json({ status : false, nunyieun : `${nunyieun}`, pesan : "masukan parameter query"})

       fetch(enkodeURI(`https://registry.npmjs.org/${query}`))
        .then(response => response.json())
        .then(data => {
        var hasil = data;
             res.json({
                 status : true,
                 nunyieun : `${nunyieun}`,
                 hasil,
                 pesan : `jangan lupa follow ${nunyieun}`
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})


router.get('/short/tiny', async (req, res, next) => {
    var apikeyInput = req.query.apikey,
        url = req.query.url

	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != 'sanzking') return res.json(loghandler.invalidKey)
     if (!url) return res.json(loghandler.noturl)

     request(`https://tinyurl.com/api-create.php?url=${url}`, function (error, response, body) {
         try {
             res.json({
                 status : true,
                 nunyieun : `${nunyieun}`,
                 hasil : {
                     link : `${body}`,
                 },
                 pesan : `jangan lupa follow ${nunyieun}`
             })
         } catch (e) {
             console.log('Error :', color(e,'red'))
             res.json(loghandler.invalidlink)
         }
     })
})

router.get('/base', async (req, res, next) => {
	var type = req.query.type,
		enkode = req.query.enkode,
		dekode = req.query.dekode,
		apikeyInput = req.query.apikey;
		if (!apikeyInput) return res.json(loghandler.notparam)
		if (apikeyInput != 'sanzking') return res.json(loghandler.invalidKey)
		if (!type) return res.json({status: false, nunyieun, kode: 404, pesan: 'masukan parameter type, type yang tersedia : base64 , base32'})
		if (type == 'base64' && enkode){
				Base("b64enc", enkode)
				.then(hasil => {
					res.json({
						status:true,
						nunyieun: `${nunyieun}`,
						hasil
					})
				})
			} else if (type == 'base64' && dekode){
				Base("b64dec", dekode)
				.then(hasil => {
					res.json({
						status: true,
						nunyieun: `${nunyieun}`,
						hasil
					})
				})
			} else if (type == 'base32' && enkode){
				Base('b32enc', enkode)
				.then(hasil => {
					res.json({
						status:true,
						nunyieun: `${nunyieun}`,
						hasil
					})
				})
			} else if (type == 'base32' && dekode){
				Base('b32dec', dekode)
				.then(hasil => {
					res.json({
						status:true,
						nunyieun: `${nunyieun}`,
						hasil
					})
				})
			} else if(!(enkode || dekode)){
				res.json({
					status:false,
					nunyieun: `${nunyieun}`,
					pesan: "tambahkan parameter enkode/dekode"
				})
			} else {
				res.json(loghandler.error)
			}
})

router.get('/nulis', async (req, res, next) => {
	var apikeyInput = req.query.apikey,
            text = req.query.text
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != 'sanzking') return res.json(loghandler.invalidKey)
    if (!text) return res.json({ status : false, nunyieun : `${nunyieun}`, pesan : "masukan parameter text"})

       fetch(enkodeURI(`http://salism3.pythonanywhere.com/write/?text=${text}`))
        .then(response => response.json())
        .then(data => {
        var hasil = data;
             res.json({
                 hasil
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})

router.get('/textmaker', async (req, res, next) => {
        var theme = req.query.theme,
             text = req.query.text,
             text2 = req.query.text2,
             text3 = req.query.text3,
             apikeyInput = req.query.apikey;
        
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != 'sanzking') return res.json(loghandler.invalidKey)
        if (!theme) return res.json(loghandler.nottheme)
        if (theme != 'glitch' && theme != 'google-suggestion') return res.json(loghandler.notheme)
        if (!text) return res.json(loghandler.nottext)

        if (theme == 'glitch') {
        	if (!text2) return res.json(loghandler.nottext2)
            try {
            request.post({
                url: "https://photooxy.com/logo-and-text-effects/make-tik-tok-text-effect-375.html",
                headers: {
                    'Content-Type': 'application/x-www-form-urlenkoded'
                },
                body: `text_1=${text}&text_2=${text2}&login=OK`,
                }, (e,r,b) => {
                    if (!e) {
                        $ = cheerio.load(b)
                        $(".thumbnail").find("img").each(function() {
                            h = $(this).attr("src")
                            var hasil = "https://photooxy.com/"+h
                            fetch(enkodeURI(`https://api.imgbb.com/1/upload?expiration=120&key=93f5c8966cfaf3ca19051ee9f85c14f3&image=${hasil}&name=${randomTextNumber}`))
                                .then(response => response.json())
                                .then(data => {
                                    var urlnya = data.data.url,
                                        delete_url = data.data.delete_url;
                                        res.json({
                                            status : true,
                                            nunyieun : `${nunyieun}`,
                                            pesan : `jangan lupa follow ${nunyieun}`,
                                            hasil:{
                                                url:urlnya,
                                                delete_url: delete_url,
                                                info: 'url akan hilang setelah 2 menit'
                                            }
                                        })
                                })
                        })
                    }
                })
                } catch (e) {
                	console.log(e);
                res.json(loghandler.error)
                }
        } else if (theme == 'google-suggestion') {
        	if (!text2) return res.json(loghandler.nottext2)
        if (!text3) return res.json(loghandler.nottext3)
            request.post({
                url: "https://photooxy.com/other-design/make-google-suggestion-photos-238.html",
                headers: {
                    'Content-Type': 'application/x-www-form-urlenkoded'
                },
                body: `text_1=${text}&text_2=${text2}&text_3=${text3}&login=OK`,
                }, (e,r,b) => {
                    if (!e) {
                        $ = cheerio.load(b)
                        $(".thumbnail").find("img").each(function() {
                            h = $(this).attr("src")
                            var hasil = "https://photooxy.com/"+h
                            fetch(enkodeURI(`https://api.imgbb.com/1/upload?expiration=120&key=761ea2d5575581057a799d14e9c78e28&image=${hasil}&name=${randomTextNumber}`))
                                .then(response => response.json())
                                .then(data => {
                                    var urlnya = data.data.url,
                                        delete_url = data.data.delete_url;
                                        res.json({
                                            status : true,
                                            nunyieun : `${nunyieun}`,
                                            pesan : `jangan lupa follow ${nunyieun}`,
                                            hasil:{
                                                url:urlnya,
                                                delete_url: delete_url,
                                                info: 'url akan hilang setelah 2 menit'
                                            }
                                        })
                                })
                        })
                    }
                }) 
        } else {
            res.json(loghandler.error)
        }
})

router.get('/textmaker/game', async (req, res, next) => {
        var theme = req.query.theme,
             text = req.query.text,
             text2 = req.query.text2,
             text3 = req.query.text3,
             apikeyInput = req.query.apikey;
        
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != 'sanzking') return res.json(loghandler.invalidKey)
        if (!theme) return res.json(loghandler.nottheme)
        if (theme != 'pubg' && theme != 'battlefield') return res.json(loghandler.notheme)
        if (!text) return res.json(loghandler.nottext)

        if (theme == 'pubg') {
        	if (!text2) return res.json(loghandler.nottext2)
            try {
            request.post({
                url: "https://photooxy.com/battlegrounds/make-wallpaper-battlegrounds-logo-text-146.html",
                headers: {
                    'Content-Type': 'application/x-www-form-urlenkoded'
                },
                body: `text_1=${text}&text_2=${text2}&login=OK`,
                }, (e,r,b) => {
                    if (!e) {
                        $ = cheerio.load(b)
                        $(".thumbnail").find("img").each(function() {
                            h = $(this).attr("src")
                            var hasil = "https://photooxy.com/"+h
                            fetch(enkodeURI(`https://api.imgbb.com/1/upload?expiration=120&key=761ea2d5575581057a799d14e9c78e28&image=${hasil}&name=${randomTextNumber}`))
                                .then(response => response.json())
                                .then(data => {
                                    var urlnya = data.data.url,
                                        delete_url = data.data.delete_url;
                                        res.json({
                                            status : true,
                                            nunyieun : `${nunyieun}`,
                                            pesan : `jangan lupa follow ${nunyieun}`,
                                            hasil:{
                                                url:urlnya,
                                                delete_url: delete_url,
                                                info: 'url akan hilang setelah 2 menit'
                                            }
                                        })
                                })
                        })
                    }
                })
                } catch (e) {
                	console.log(e);
                res.json(loghandler.error)
                }
        } else if (theme == 'battlefield') {
        	if (!text2) return res.json(loghandler.nottext2)
            request.post({
                url: "https://photooxy.com/fps-game-effect/create-battlefield-4-rising-effect-152.html",
                headers: {
                    'Content-Type': 'application/x-www-form-urlenkoded'
                },
                body: `text_1=${text}&text_2=${text2}&login=OK`,
                }, (e,r,b) => {
                    if (!e) {
                        $ = cheerio.load(b)
                        $(".thumbnail").find("img").each(function() {
                            h = $(this).attr("src")
                            var hasil = "https://photooxy.com/"+h
                            fetch(enkodeURI(`https://api.imgbb.com/1/upload?expiration=120&key=761ea2d5575581057a799d14e9c78e28&image=${hasil}&name=${randomTextNumber}`))
                                .then(response => response.json())
                                .then(data => {
                                    var urlnya = data.data.url,
                                        delete_url = data.data.delete_url;
                                        res.json({
                                            status : true,
                                            nunyieun : `${nunyieun}`,
                                            pesan : `jangan lupa follow ${nunyieun}`,
                                            hasil:{
                                                url:urlnya,
                                                delete_url: delete_url,
                                                info: 'url akan hilang setelah 2 menit'
                                            }
                                        })
                                })
                        })
                    }
                }) 
        } else {
            res.json(loghandler.error)
        }
})

router.get('/textmaker/senja', async (req, res, next) => {
        var theme = req.query.theme,
             text = req.query.text,
             text2 = req.query.text2,
             text3 = req.query.text3,
             apikeyInput = req.query.apikey;
        
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != 'sanzking') return res.json(loghandler.invalidKey)
        if (!theme) return res.json(loghandler.nottheme)
        if (theme != 'coffee-cup' && theme != 'coffee-cup2') return res.json(loghandler.notheme)
        if (!text) return res.json(loghandler.nottext)

        if (theme == 'coffee-cup') {
            try {
            request.post({
                url: "https://photooxy.com/logo-and-text-effects/put-any-text-in-to-coffee-cup-371.html",
                headers: {
                    'Content-Type': 'application/x-www-form-urlenkoded'
                },
                body: `text_1=${text}&login=OK`,
                }, (e,r,b) => {
                    if (!e) {
                        $ = cheerio.load(b)
                        $(".thumbnail").find("img").each(function() {
                            h = $(this).attr("src")
                            var hasil = "https://photooxy.com/"+h
                            fetch(enkodeURI(`https://api.imgbb.com/1/upload?expiration=120&key=761ea2d5575581057a799d14e9c78e28&image=${hasil}&name=${randomTextNumber}`))
                                .then(response => response.json())
                                .then(data => {
                                    var urlnya = data.data.url,
                                        delete_url = data.data.delete_url;
                                        res.json({
                                            status : true,
                                            nunyieun : `${nunyieun}`,
                                            pesan : `jangan lupa follow ${nunyieun}`,
                                            hasil:{
                                                url:urlnya,
                                                delete_url: delete_url,
                                                info: 'url akan hilang setelah 2 menit'
                                            }
                                        })
                                })
                        })
                    }
                })
                } catch (e) {
                	console.log(e);
                res.json(loghandler.error)
                }
        } else if (theme == 'coffee-cup2') {
            request.post({
                url: "https://photooxy.com/logo-and-text-effects/put-your-text-on-a-coffee-cup--174.html",
                headers: {
                    'Content-Type': 'application/x-www-form-urlenkoded'
                },
                body: `text_1=${text}&login=OK`,
                }, (e,r,b) => {
                    if (!e) {
                        $ = cheerio.load(b)
                        $(".thumbnail").find("img").each(function() {
                            h = $(this).attr("src")
                            var hasil = "https://photooxy.com/"+h
                            fetch(enkodeURI(`https://api.imgbb.com/1/upload?expiration=120&key=761ea2d5575581057a799d14e9c78e28&image=${hasil}&name=${randomTextNumber}`))
                                .then(response => response.json())
                                .then(data => {
                                    var urlnya = data.data.url,
                                        delete_url = data.data.delete_url;
                                        res.json({
                                            status : true,
                                            nunyieun : `${nunyieun}`,
                                            pesan : `jangan lupa follow ${nunyieun}`,
                                            hasil:{
                                                url:urlnya,
                                                delete_url: delete_url,
                                                info: 'url akan hilang setelah 2 menit'
                                            }
                                        })
                                })
                        })
                    }
                }) 
        } else {
            res.json(loghandler.error)
        }
})

router.get('/kisahnabi', async (req, res, next) => {
	var nabi = req.query.nabi,
		apikeyInput = req.query.apikey;

		if (!apikeyInput) return res.json(loghandler.notparam)
		if (apikeyInput != 'sanzking') return res.json(loghandler.invalidKey)
		Searchnabi(nabi)
		.then(hasil => {
			res.json({
				nunyieun: nunyieun,
				hasil
			})
		})
		.catch(e => {
			console.log('Error :', color(e, 'red'))
			res.json(loghandler.error)
		})
})

router.get('/infogempa', async (req, res, next) => {
	        var apikeyInput = req.query.apikey

		if (!apikeyInput) return res.json(loghandler.notparam)
		if (apikeyInput != 'sanzking') return res.json(loghandler.invalidKey)
		Gempa()
		.then(hasil => {
			res.json({
				nunyieun: nunyieun,
				hasil
			})
		})
		.catch(e => {
			console.log('Error :', color(e, 'red'))
			res.json(loghandler.error)
		})
})

router.get('/hadits', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
            kitab = req.query.kitab,
            nomor = req.query.nomor
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != 'sanzking') return res.json(loghandler.invalidKey)
    if (!kitab) return res.json({ status : false, nunyieun : `${nunyieun}`, pesan : "masukan parameter kitab"})
    if (!nomor) return res.json({ status : false, nunyieun : `${nunyieun}`, pesan : "masukan parameter nomor"})

       fetch(enkodeURI(`https://hadits-api-zhirrr.vercel.app/books/${kitab}/${nomor}`))
        .then(response => response.json())
        .then(data => {
        var hasil = data;
             res.json({
                 hasil
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})


router.get('/quran', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
            surah = req.query.surah,
            ayat = req.query.ayat
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != 'sanzking') return res.json(loghandler.invalidKey)
    if (!surah) return res.json({ status : false, nunyieun : `${nunyieun}`, pesan : "masukan parameter surah"})
    if (!ayat) return res.json({ status : false, nunyieun : `${nunyieun}`, pesan : "masukan parameter ayat"})

       fetch(enkodeURI(`https://alquran-apiii.vercel.app/surah/${surah}/${ayat}`))
        .then(response => response.json())
        .then(data => {
        var hasil = data;
             res.json({
                 hasil
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})


router.get('/fbdown', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
            url = req.query.url
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != 'sanzking') return res.json(loghandler.invalidKey)
    if (!url) return res.json({ status : false, nunyieun : `${nunyieun}`, pesan : "masukan parameter url"})

       fetch(enkodeURI(`https://fb-api-zhirrr.vercel.app/?url=${url}`))
        .then(response => response.json())
        .then(data => {
        var hasil = data;
             res.json({
                 hasil
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})


router.get('/textmaker/metallic', async (req, res, next) => {
        var theme = req.query.theme,
             text = req.query.text,
             text2 = req.query.text2,
             text3 = req.query.text3,
             apikeyInput = req.query.apikey;
        
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != 'sanzking') return res.json(loghandler.invalidKey)
        if (!theme) return res.json(loghandler.nottheme)
        if (theme != 'neon' && theme != 'glow') return res.json(loghandler.notheme)
        if (!text) return res.json(loghandler.nottext)

        if (theme == 'neon') {
            try {
            request.post({
                url: "https://photooxy.com/logo-and-text-effects/illuminated-metallic-effect-177.html",
                headers: {
                    'Content-Type': 'application/x-www-form-urlenkoded'
                },
                body: `text_1=${text}&login=OK`,
                }, (e,r,b) => {
                    if (!e) {
                        $ = cheerio.load(b)
                        $(".thumbnail").find("img").each(function() {
                            h = $(this).attr("src")
                            var hasil = "https://photooxy.com/"+h
                            fetch(enkodeURI(`https://api.imgbb.com/1/upload?expiration=120&key=761ea2d5575581057a799d14e9c78e28&image=${hasil}&name=${randomTextNumber}`))
                                .then(response => response.json())
                                .then(data => {
                                    var urlnya = data.data.url,
                                        delete_url = data.data.delete_url;
                                        res.json({
                                            status : true,
                                            nunyieun : `${nunyieun}`,
                                            pesan : `jangan lupa follow ${nunyieun}`,
                                            hasil:{
                                                url:urlnya,
                                                delete_url: delete_url,
                                                info: 'url akan hilang setelah 2 menit'
                                            }
                                        })
                                })
                        })
                    }
                })
                } catch (e) {
                	console.log(e);
                res.json(loghandler.error)
                }
        } else if (theme == 'glow') {
            request.post({
                url: "https://photooxy.com/other-design/create-metallic-text-glow-online-188.html",
                headers: {
                    'Content-Type': 'application/x-www-form-urlenkoded'
                },
                body: `text_1=${text}&login=OK`,
                }, (e,r,b) => {
                    if (!e) {
                        $ = cheerio.load(b)
                        $(".thumbnail").find("img").each(function() {
                            h = $(this).attr("src")
                            var hasil = "https://photooxy.com/"+h
                            fetch(enkodeURI(`https://api.imgbb.com/1/upload?expiration=120&key=761ea2d5575581057a799d14e9c78e28&image=${hasil}&name=${randomTextNumber}`))
                                .then(response => response.json())
                                .then(data => {
                                    var urlnya = data.data.url,
                                        delete_url = data.data.delete_url;
                                        res.json({
                                            status : true,
                                            nunyieun : `${nunyieun}`,
                                            pesan : `jangan lupa follow ${nunyieun}`,
                                            hasil:{
                                                url:urlnya,
                                                delete_url: delete_url,
                                                info: 'url akan hilang setelah 2 menit'
                                            }
                                        })
                                })
                        })
                    }
                }) 
        } else {
            res.json(loghandler.error)
        }
})

router.get('/textmaker/alam', async (req, res, next) => {
        var theme = req.query.theme,
             text = req.query.text,
             text2 = req.query.text2,
             text3 = req.query.text3,
             apikeyInput = req.query.apikey;
        
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != 'sanzking') return res.json(loghandler.invalidKey)
        if (!theme) return res.json(loghandler.nottheme)
        if (theme != 'summer' && theme != 'flower') return res.json(loghandler.notheme)
        if (!text) return res.json(loghandler.nottext)

        if (theme == 'summer') {
            try {
            request.post({
                url: "https://photooxy.com/logo-and-text-effects/3d-summer-text-effect-367.html",
                headers: {
                    'Content-Type': 'application/x-www-form-urlenkoded'
                },
                body: `text_1=${text}&login=OK`,
                }, (e,r,b) => {
                    if (!e) {
                        $ = cheerio.load(b)
                        $(".thumbnail").find("img").each(function() {
                            h = $(this).attr("src")
                            var hasil = "https://photooxy.com/"+h
                            fetch(enkodeURI(`https://api.imgbb.com/1/upload?expiration=120&key=761ea2d5575581057a799d14e9c78e28&image=${hasil}&name=${randomTextNumber}`))
                                .then(response => response.json())
                                .then(data => {
                                    var urlnya = data.data.url,
                                        delete_url = data.data.delete_url;
                                        res.json({
                                            status : true,
                                            nunyieun : `${nunyieun}`,
                                            pesan : `jangan lupa follow ${nunyieun}`,
                                            hasil:{
                                                url:urlnya,
                                                delete_url: delete_url,
                                                info: 'url akan hilang setelah 2 menit'
                                            }
                                        })
                                })
                        })
                    }
                })
                } catch (e) {
                	console.log(e);
                res.json(loghandler.error)
                }
        } else if (theme == 'flower') {
            request.post({
                url: "https://photooxy.com/art-effects/flower-typography-text-effect-164.html",
                headers: {
                    'Content-Type': 'application/x-www-form-urlenkoded'
                },
                body: `text_1=${text}&login=OK`,
                }, (e,r,b) => {
                    if (!e) {
                        $ = cheerio.load(b)
                        $(".thumbnail").find("img").each(function() {
                            h = $(this).attr("src")
                            var hasil = "https://photooxy.com/"+h
                            fetch(enkodeURI(`https://api.imgbb.com/1/upload?expiration=120&key=761ea2d5575581057a799d14e9c78e28&image=${hasil}&name=${randomTextNumber}`))
                                .then(response => response.json())
                                .then(data => {
                                    var urlnya = data.data.url,
                                        delete_url = data.data.delete_url;
                                        res.json({
                                            status : true,
                                            nunyieun : `${nunyieun}`,
                                            pesan : `jangan lupa follow ${nunyieun}`,
                                            hasil:{
                                                url:urlnya,
                                                delete_url: delete_url,
                                                info: 'url akan hilang setelah 2 menit'
                                            }
                                        })
                                })
                        })
                    }
                }) 
        } else {
            res.json(loghandler.error)
        }
})

router.get('/muslim/tahlil', async (req, res, next) => {
        var apikeyInput = req.query.apikey
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != 'sanzking') return res.json(loghandler.invalidKey)

       fetch(enkodeURI(`https://raw.githubusercontent.com/Zhirrr/My-SQL-hasils/main/data/dataTahlil.json`))
        .then(response => response.json())
        .then(data => {
        var hasil = data;
             res.json({
                 hasil
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})


router.get('/muslim/wirid', async (req, res, next) => {
        var apikeyInput = req.query.apikey
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != 'sanzking') return res.json(loghandler.invalidKey)

       fetch(enkodeURI(`https://raw.githubusercontent.com/Zhirrr/My-SQL-hasils/main/data/dataWirid.json`))
        .then(response => response.json())
        .then(data => {
        var hasil = data;
             res.json({
                 hasil
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})


router.get('/muslim/ayatkursi', async (req, res, next) => {
        var apikeyInput = req.query.apikey
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != 'sanzking') return res.json(loghandler.invalidKey)

       fetch(enkodeURI(`https://raw.githubusercontent.com/Zhirrr/My-SQL-hasils/main/data/dataAyatKursi.json`))
        .then(response => response.json())
        .then(data => {
        var hasil = data;
             res.json({
                 hasil
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})


router.get('/muslim/doaharian', async (req, res, next) => {
        var apikeyInput = req.query.apikey
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != 'sanzking') return res.json(loghandler.invalidKey)

       fetch(enkodeURI(`https://raw.githubusercontent.com/Zhirrr/My-SQL-hasils/main/data/dataDoaHarian.json`))
        .then(response => response.json())
        .then(data => {
        var hasil = data;
             res.json({
                 hasil
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})


router.get('/muslim/bacaanshalat', async (req, res, next) => {
        var apikeyInput = req.query.apikey
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != 'sanzking') return res.json(loghandler.invalidKey)

       fetch(enkodeURI(`https://raw.githubusercontent.com/Zhirrr/My-SQL-hasils/main/data/dataBacaanShalat.json`))
        .then(response => response.json())
        .then(data => {
        var hasil = data;
             res.json({
                 hasil
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})


router.get('/muslim/niatshalat', async (req, res, next) => {
        var apikeyInput = req.query.apikey
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != 'sanzking') return res.json(loghandler.invalidKey)

       fetch(enkodeURI(`https://raw.githubusercontent.com/Zhirrr/My-SQL-hasils/main/data/dataNiatShalat.json`))
        .then(response => response.json())
        .then(data => {
        var hasil = data;
             res.json({
                 hasil
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})


router.get('/muslim/kisahnabi', async (req, res, next) => {
        var apikeyInput = req.query.apikey
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != 'sanzking') return res.json(loghandler.invalidKey)

       fetch(enkodeURI(`https://raw.githubusercontent.com/Zhirrr/My-SQL-hasils/main/data/dataKisahNabi.json`))
        .then(response => response.json())
        .then(data => {
        var hasil = data;
             res.json({
                 hasil
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})


router.get('/muslim/asmaulhusna', async (req, res, next) => {
        var apikeyInput = req.query.apikey
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != 'sanzking') return res.json(loghandler.invalidKey)

       fetch(enkodeURI(`https://raw.githubusercontent.com/Zhirrr/My-SQL-hasils/main/data/dataAsmaulHusna.json`))
        .then(response => response.json())
        .then(data => {
        var hasil = data;
             res.json({
                 hasil
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})


router.get('/muslim/niatshubuh', async (req, res, next) => {
        var apikeyInput = req.query.apikey
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != 'sanzking') return res.json(loghandler.invalidKey)

       fetch(enkodeURI(`https://raw.githubusercontent.com/Zhirrr/My-SQL-hasils/main/data/NiatShubuh.json`))
        .then(response => response.json())
        .then(data => {
        var hasil = data;
             res.json({
                 hasil
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})


router.get('/muslim/niatdzuhur', async (req, res, next) => {
        var apikeyInput = req.query.apikey
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != 'sanzking') return res.json(loghandler.invalidKey)

       fetch(enkodeURI(`https://raw.githubusercontent.com/Zhirrr/My-SQL-hasils/main/data/NiatDzuhur.json`))
        .then(response => response.json())
        .then(data => {
        var hasil = data;
             res.json({
                 hasil
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})


router.get('/muslim/niatmaghrib', async (req, res, next) => {
        var apikeyInput = req.query.apikey
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != 'sanzking') return res.json(loghandler.invalidKey)

       fetch(enkodeURI(`https://raw.githubusercontent.com/Zhirrr/My-SQL-hasils/main/data/NiatMaghrib.json`))
        .then(response => response.json())
        .then(data => {
        var hasil = data;
             res.json({
                 hasil
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})


router.get('/muslim/niatisya', async (req, res, next) => {
        var apikeyInput = req.query.apikey
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != 'sanzking') return res.json(loghandler.invalidKey)

       fetch(enkodeURI(`https://raw.githubusercontent.com/Zhirrr/My-SQL-hasils/main/data/NiatIsya.json`))
        .then(response => response.json())
        .then(data => {
        var hasil = data;
             res.json({
                 hasil
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})


router.get('/muslim/niatashar', async (req, res, next) => {
        var apikeyInput = req.query.apikey
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != 'sanzking') return res.json(loghandler.invalidKey)

       fetch(enkodeURI(`https://raw.githubusercontent.com/Zhirrr/My-SQL-hasils/main/data/NiatAshar.json`))
        .then(response => response.json())
        .then(data => {
        var hasil = data;
             res.json({
                 hasil
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})


router.get('/wallpaper/cyberspace', async (req, res, next) => {
        var apikeyInput = req.query.apikey
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != 'sanzking') return res.json(loghandler.invalidKey)

       fetch(enkodeURI(`https://raw.githubusercontent.com/Zhirrr/My-SQL-hasils/main/CyberSpace.json`))
        .then(response => response.json())
        .then(data => {
        var hasil = data;
             res.json({
                 hasil
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})


router.get('/wallpaper/teknologi', async (req, res, next) => {
        var apikeyInput = req.query.apikey
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != 'sanzking') return res.json(loghandler.invalidKey)

       fetch(enkodeURI(`https://raw.githubusercontent.com/Zhirrr/My-SQL-hasils/main/Technology.json`))
        .then(response => response.json())
        .then(data => {
        var hasil = data;
             res.json({
                 hasil
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})


router.get('/wallpaper/muslim', async (req, res, next) => {
        var apikeyInput = req.query.apikey
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != 'sanzking') return res.json(loghandler.invalidKey)

       fetch(enkodeURI(`https://raw.githubusercontent.com/Zhirrr/My-SQL-hasils/main/Islamic.json`))
        .then(response => response.json())
        .then(data => {
        var hasil = data;
             res.json({
                 hasil
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})


router.get('/wallpaper/programming', async (req, res, next) => {
        var apikeyInput = req.query.apikey
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != 'sanzking') return res.json(loghandler.invalidKey)

       fetch(enkodeURI(`https://raw.githubusercontent.com/Zhirrr/My-SQL-hasils/main/Programming.json`))
        .then(response => response.json())
        .then(data => {
        var hasil = data;
             res.json({
                 hasil
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})


router.get('/wallpaper/pegunungan', async (req, res, next) => {
        var apikeyInput = req.query.apikey
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != 'sanzking') return res.json(loghandler.invalidKey)

       fetch(enkodeURI(`https://raw.githubusercontent.com/Zhirrr/My-SQL-hasils/main/Mountain.json`))
        .then(response => response.json())
        .then(data => {
        var hasil = data;
             res.json({
                 hasil
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})


router.get('/wikipedia', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
            search = req.query.search
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != 'sanzking') return res.json(loghandler.invalidKey)
        if(!search) return res.json({ status : false, nunyieun : `${nunyieun}`, pesan : "masukan parameter search"})

       fetch(enkodeURI(`https://docs-api-zahirrr.herokuapp.com/api/wiki?keyword=${search}`))
        .then(response => response.json())
        .then(data => {
        var hasil = data;
             res.json({
                 hasil
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})

router.get('/randomquote/muslim', async (req, res, next) => {
        var apikeyInput = req.query.apikey
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != 'sanzking') return res.json(loghandler.invalidKey)

       fetch(enkodeURI(`https://docs-api-zahirrr.herokuapp.com/api/quote?type=agamis`))
        .then(response => response.json())
        .then(data => {
        var hasil = data;
             res.json({
                 hasil
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})


router.get('/drakorasia', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
            search = req.query.search
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != 'sanzking') return res.json(loghandler.invalidKey)
        if(!search) return res.json({ status : false, nunyieun : `${nunyieun}`, pesan : "masukan parameter search"})

       fetch(enkodeURI(`http://docs-api-zahirrr.herokuapp.com/api/drakorasia?search=${search}`))
        .then(response => response.json())
        .then(data => {
        var hasil = data;
             res.json({
                 hasil
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})


router.get('/jadwalshalat', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
            kota = req.query.kota
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != 'sanzking') return res.json(loghandler.invalidKey)
        if(!kota) return res.json({ status : false, nunyieun : `${nunyieun}`, pesan : "masukan parameter kota"})

       fetch(enkodeURI(`https://raw.githubusercontent.com/Zhirrr/Zhirrr-Database/main/adzan/${kota}/2021/03.json`))
        .then(response => response.json())
        .then(data => {
        var hasil = data;
             res.json({
                 hasil
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})


router.get('/fakedata', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
            country = req.query.country
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != 'sanzking') return res.json(loghandler.invalidKey)
        if(!country) return res.json({ status : false, nunyieun : `${nunyieun}`, pesan : "masukan parameter country"})

       fetch(enkodeURI(`https://fakename-api-zhirrr.vercel.app/api/fakename?country=${country}`))
        .then(response => response.json())
        .then(data => {
        var hasil = data;
             res.json({
                 hasil
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})


router.get('/hilih', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
            kata = req.query.kata
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != 'sanzking') return res.json(loghandler.invalidKey)
        if(!kata) return res.json({ status : false, nunyieun : `${nunyieun}`, pesan : "masukan parameter kata"})

       fetch(enkodeURI(`https://hilih-api-zhirrr.vercel.app/api/hilih?kata=${kata}`))
        .then(response => response.json())
        .then(data => {
        var hasil = data;
             res.json({
                 hasil
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})


router.get('/liriklagu', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
            lagu = req.query.lagu
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != 'sanzking') return res.json(loghandler.invalidKey)
        if(!lagu) return res.json({ status : false, nunyieun : `${nunyieun}`, pesan : "masukan parameter kata"})

       fetch(enkodeURI(`https://python-api-zhirrr.herokuapp.com/api/lirik?search=${lagu}`))
        .then(response => response.json())
        .then(data => {
        var hasil = data;
             res.json({
                 hasil
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})


router.get('/chordlagu', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
            lagu = req.query.lagu
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != 'sanzking') return res.json(loghandler.invalidKey)
        if(!lagu) return res.json({ status : false, nunyieun : `${nunyieun}`, pesan : "masukan parameter kata"})

       fetch(enkodeURI(`https://python-api-zhirrr.herokuapp.com/api/chord?q=${lagu}`))
        .then(response => response.json())
        .then(data => {
        var hasil = data;
             res.json({
                 hasil
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})


router.get('/random/asmaulhusna', async (req, res, next) => {
        var apikeyInput = req.query.apikey
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != 'sanzking') return res.json(loghandler.invalidKey)

       fetch(enkodeURI(`https://python-api-zhirrr.herokuapp.com/api/random/asmaulhusna`))
        .then(response => response.json())
        .then(data => {
        var hasil = data;
             res.json({
                 hasil
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})


router.get('/kbbi', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
            kata = req.query.kata
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != 'sanzking') return res.json(loghandler.invalidKey)
        if(!kata) return res.json({ status : false, nunyieun : `${nunyieun}`, pesan : "masukan parameter kata"})

       fetch(enkodeURI(`https://kbbi-api-zhirrr.vercel.app/api/kbbi?text=${kata}`))
        .then(response => response.json())
        .then(data => {
        var hasil = data;
             res.json({
                 hasil
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})


router.get('/covidindo', async (req, res, next) => {
        var apikeyInput = req.query.apikey
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != 'sanzking') return res.json(loghandler.invalidKey)

       fetch(enkodeURI(`https://covid19-api-zhirrr.vercel.app/api/covid-indonesia`))
        .then(response => response.json())
        .then(data => {
        var hasil = data;
             res.json({
                 hasil
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})


router.get('/covidworld', async (req, res, next) => {
        var apikeyInput = req.query.apikey
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != 'sanzking') return res.json(loghandler.invalidKey)

       fetch(enkodeURI(`https://covid19-api-zhirrr.vercel.app/api/world`))
        .then(response => response.json())
        .then(data => {
        var hasil = data;
             res.json({
                 hasil
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})


router.get('/kodepos', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
	    kota = req.query.kota
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != 'sanzking') return res.json(loghandler.invalidKey)
	if(!kota) return res.json({ status : false, nunyieun : `${nunyieun}`, pesan : "masukan parameter kota"})

       fetch(enkodeURI(`https://kodepos-api-zhirrr.vercel.app/?q=${kota}`))
        .then(response => response.json())
        .then(data => {
        var hasil = data;
             res.json({
                 hasil
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})


router.get('/infocuaca', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
	    provinsi = req.query.provinsi
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != 'sanzking') return res.json(loghandler.invalidKey)
	if(!provinsi) return res.json({ status : false, nunyieun : `${nunyieun}`, pesan : "masukan parameter provinsi"})
       fetch(enkodeURI(`https://bmkg-api-zahirr.herokuapp.com/api/cuaca/${provinsi}`))
        .then(response => response.json())
        .then(data => {
        var hasil = data;
             res.json({
                 hasil
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})


router.get('/infocuaca/bandara', async (req, res, next) => {
        var apikeyInput = req.query.apikey
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != 'sanzking') return res.json(loghandler.invalidKey)
       fetch(enkodeURI(`https://bmkg-api-zahirr.herokuapp.com/api/cuaca/bandara`))
        .then(response => response.json())
        .then(data => {
        var hasil = data;
             res.json({
                 hasil
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})


router.get('/infocuaca/dunia', async (req, res, next) => {
        var apikeyInput = req.query.apikey
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != 'sanzking') return res.json(loghandler.invalidKey)
       fetch(enkodeURI(`https://bmkg-api-zahirr.herokuapp.com/api/cuaca/dunia`))
        .then(response => response.json())
        .then(data => {
        var hasil = data;
             res.json({
                 hasil
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})


router.get('/infotsunami', async (req, res, next) => {
        var apikeyInput = req.query.apikey
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != 'sanzking') return res.json(loghandler.invalidKey)
       fetch(enkodeURI(`https://bmkg-api-zahirr.herokuapp.com/api/tsunami`))
        .then(response => response.json())
        .then(data => {
        var hasil = data;
             res.json({
                 hasil
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})


router.get('/random/meme', async (req, res, next) => {
        var apikeyInput = req.query.apikey
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != 'sanzking') return res.json(loghandler.invalidKey)

       fetch(enkodeURI(`https://docs-api-zahirrr.herokuapp.com/api/meme`))
        .then(response => response.json())
        .then(data => {
        var hasil = data;
             res.json({
                 hasil
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})


router.get('/quotes/kanye', async (req, res, next) => {
        var apikeyInput = req.query.apikey
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != 'sanzking') return res.json(loghandler.invalidKey)

       fetch(enkodeURI(`https://docs-api-zahirrr.herokuapp.com/api/quote?type=kanye`))
        .then(response => response.json())
        .then(data => {
        var hasil = data;
             res.json({
                 hasil
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})


router.get('/translate', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
	    kata = req.query.kata
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != 'sanzking') return res.json(loghandler.invalidKey)
	if(!kata) return res.json({ status : false, nunyieun : `${nunyieun}`, pesan : "masukan parameter kata"})
       fetch(enkodeURI(`https://docs-api-zahirrr.herokuapp.com/api/translate?text=${kata}`))
        .then(response => response.json())
        .then(data => {
        var hasil = data;
             res.json({
                 hasil
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})


router.get('/anime/kusonime', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
	    search = req.query.search
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != 'sanzking') return res.json(loghandler.invalidKey)
	if(!search) return res.json({ status : false, nunyieun : `${nunyieun}`, pesan : "masukan parameter search"})
       fetch(enkodeURI(`https://docs-api-zahirrr.herokuapp.com/api/kusonime?search=${search}`))
        .then(response => response.json())
        .then(data => {
        var hasil = data;
             res.json({
                 hasil
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})


router.get('/gabut', async (req, res, next) => {
        var apikeyInput = req.query.apikey
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != 'sanzking') return res.json(loghandler.invalidKey)

       fetch(enkodeURI(`https://docs-api-zahirrr.herokuapp.com/api/bosan`))
        .then(response => response.json())
        .then(data => {
        var hasil = data;
             res.json({
                 hasil
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})


router.get('/manga', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
	    search = req.query.search
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != 'sanzking') return res.json(loghandler.invalidKey)
	if(!search) return res.json({ status : false, nunyieun : `${nunyieun}`, pesan : "masukan parameter search"})
       fetch(enkodeURI(`https://docs-api-zahirrr.herokuapp.com/api/manga?keyword=${search}`))
        .then(response => response.json())
        .then(data => {
        var hasil = data;
             res.json({
                 hasil
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})


router.get('/random/wallpaper', async (req, res, next) => {
        var apikeyInput = req.query.apikey
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != 'sanzking') return res.json(loghandler.invalidKey)

       fetch(enkodeURI(`https://docs-api-zahirrr.herokuapp.com/api/random/wallpaper?genre=acak`))
        .then(response => response.json())
        .then(data => {
        var hasil = data;
             res.json({
                 hasil
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})


router.get('/kuis/caklontong', async (req, res, next) => {
        var apikeyInput = req.query.apikey
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != 'sanzking') return res.json(loghandler.invalidKey)

       fetch(enkodeURI(`https://docs-api-zahirrr.herokuapp.com/api/quote?type=caklontong`))
        .then(response => response.json())
        .then(data => {
        var hasil = data;
             res.json({
                 hasil
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})


router.get('/kuis/tebakgambar', async (req, res, next) => {
        var apikeyInput = req.query.apikey
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != 'sanzking') return res.json(loghandler.invalidKey)

       fetch(enkodeURI(`https://docs-api-zahirrr.herokuapp.com/api/quote?type=tebakgambar`))
        .then(response => response.json())
        .then(data => {
        var hasil = data;
             res.json({
                 hasil
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})


router.get('/news/cnn', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
            type = req.query.type
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != 'sanzking') return res.json(loghandler.invalidKey)
    if (!type) return res.json({ status : false, nunyieun : `${nunyieun}`, pesan : "masukan parameter type"})

       fetch(enkodeURI(`https://news-api-zhirrr.vercel.app/v1/cnn-news/${type}`))
        .then(response => response.json())
        .then(data => {
        var hasil = data;
             res.json({
             	author: 'sanzking',
                 hasil
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})


router.get('/news/cnbc', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
            type = req.query.type
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != 'sanzking') return res.json(loghandler.invalidKey)
    if (!type) return res.json({ status : false, nunyieun : `${nunyieun}`, pesan : "masukan parameter type"})

       fetch(enkodeURI(`https://news-api-zhirrr.vercel.app/v1/cnbc-news/${type}`))
        .then(response => response.json())
        .then(data => {
        var hasil = data;
             res.json({
             	author: 'sanzking',
                 hasil
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})


router.get('/news/republika', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
            type = req.query.type
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != 'sanzking') return res.json(loghandler.invalidKey)
    if (!type) return res.json({ status : false, nunyieun : `${nunyieun}`, pesan : "masukan parameter type"})

       fetch(enkodeURI(`https://news-api-zhirrr.vercel.app/v1/republika-news/${type}`))
        .then(response => response.json())
        .then(data => {
        var hasil = data;
             res.json({
             	author: 'sanzking',
                 hasil
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})


router.get('/news/tempo', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
            type = req.query.type
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != 'sanzking') return res.json(loghandler.invalidKey)
    if (!type) return res.json({ status : false, nunyieun : `${nunyieun}`, pesan : "masukan parameter type"})

       fetch(enkodeURI(`https://news-api-zhirrr.vercel.app/v1/tempo-news/${type}`))
        .then(response => response.json())
        .then(data => {
        var hasil = data;
             res.json({
             	author: 'sanzking',
                 hasil
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})


router.get('/news/antara', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
            type = req.query.type
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != 'sanzking') return res.json(loghandler.invalidKey)
    if (!type) return res.json({ status : false, nunyieun : `${nunyieun}`, pesan : "masukan parameter type"})

       fetch(enkodeURI(`https://news-api-zhirrr.vercel.app/v1/antara-news/${type}`))
        .then(response => response.json())
        .then(data => {
        var hasil = data;
             res.json({
             	author: 'sanzking',
                 hasil
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})


router.get('/news/kumparan', async (req, res, next) => {
        var apikeyInput = req.query.apikey
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != 'sanzking') return res.json(loghandler.invalidKey)

       fetch(enkodeURI(`https://news-api-zhirrr.vercel.app/v1/kumparan-news`))
        .then(response => response.json())
        .then(data => {
        var hasil = data;
             res.json({
             	author: 'sanzking',
                 hasil
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})


router.get('/filmapik/search', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
            film = req.query.film
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != 'sanzking') return res.json(loghandler.invalidKey)
    if (!film) return res.json({ status : false, nunyieun : `${nunyieun}`, pesan : "masukan parameter film"})

       fetch(enkodeURI(`https://filmapik-api-zahirr.herokuapp.com/search?q=${film}`))
        .then(response => response.json())
        .then(data => {
        var hasil = data;
             res.json({
             	author: 'sanzking',
                 hasil
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})


router.get('/filmapik/kategori', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
            film = req.query.film
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != 'sanzking') return res.json(loghandler.invalidKey)
    if (!film) return res.json({ status : false, nunyieun : `${nunyieun}`, pesan : "masukan parameter film"})

       fetch(enkodeURI(`https://filmapik-api-zahirr.herokuapp.com/category?search=${film}`))
        .then(response => response.json())
        .then(data => {
        var hasil = data;
             res.json({
             	author: 'sanzking',
                 hasil
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})


router.get('/filmapik/play', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
            id = req.query.id
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != 'sanzking') return res.json(loghandler.invalidKey)
    if (!id) return res.json({ status : false, nunyieun : `${nunyieun}`, pesan : "masukan parameter id"})

       fetch(enkodeURI(`https://filmapik-api-zahirr.herokuapp.com/play?id=${id}`))
        .then(response => response.json())
        .then(data => {
        var hasil = data;
             res.json({
             	author: 'sanzking',
                 hasil
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})


router.get('/filmapik/terbaru', async (req, res, next) => {
        var apikeyInput = req.query.apikey
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != 'sanzking') return res.json(loghandler.invalidKey)

       fetch(enkodeURI(`https://filmapik-api-zahirr.herokuapp.com/latest`))
        .then(response => response.json())
        .then(data => {
        var hasil = data;
             res.json({
             	author: 'sanzking',
                 hasil
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})


router.get('/lk21/search', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
            film = req.query.film
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != 'sanzking') return res.json(loghandler.invalidKey)
    if (!film) return res.json({ status : false, nunyieun : `${nunyieun}`, pesan : "masukan parameter film"})

       fetch(enkodeURI(`https://lk21-api-zahirr.herokuapp.com/search?query=${film}`))
        .then(response => response.json())
        .then(data => {
        var hasil = data;
             res.json({
             	author: 'sanzking',
                 hasil
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})


router.get('/lk21/terbaru', async (req, res, next) => {
        var apikeyInput = req.query.apikey
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != 'sanzking') return res.json(loghandler.invalidKey)

       fetch(enkodeURI(`https://lk21-api-zahirr.herokuapp.com/newupload`))
        .then(response => response.json())
        .then(data => {
        var hasil = data;
             res.json({
             	author: 'sanzking',
                 hasil
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})


router.get('/lk21/comingsoon', async (req, res, next) => {
        var apikeyInput = req.query.apikey
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != 'sanzking') return res.json(loghandler.invalidKey)

       fetch(enkodeURI(`https://lk21-api-zahirr.herokuapp.com/comingsoon`))
        .then(response => response.json())
        .then(data => {
        var hasil = data;
             res.json({
             	author: 'sanzking',
                 hasil
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})


router.get('/lk21/tvseries', async (req, res, next) => {
        var apikeyInput = req.query.apikey
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != 'sanzking') return res.json(loghandler.invalidKey)

       fetch(enkodeURI(`https://lk21-api-zahirr.herokuapp.com/tv`))
        .then(response => response.json())
        .then(data => {
        var hasil = data;
             res.json({
             	author: 'sanzking',
                 hasil
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})


router.get('/lk21/year', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
            tahun = req.query.tahun
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != 'sanzking') return res.json(loghandler.invalidKey)
    if (!tahun) return res.json({ status : false, nunyieun : `${nunyieun}`, pesan : "masukan parameter tahun"})

       fetch(enkodeURI(`https://lk21-api-zahirr.herokuapp.com/year?year=${tahun}`))
        .then(response => response.json())
        .then(data => {
        var hasil = data;
             res.json({
             	author: 'sanzking',
                 hasil
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})


router.get('/lk21/country', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
            negara = req.query.negara
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != 'sanzking') return res.json(loghandler.invalidKey)
    if (!negara) return res.json({ status : false, nunyieun : `${nunyieun}`, pesan : "masukan parameter negara"})

       fetch(enkodeURI(`https://lk21-api-zahirr.herokuapp.com/country?country=${negara}`))
        .then(response => response.json())
        .then(data => {
        var hasil = data;
             res.json({
             	author: 'sanzking',
                 hasil
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})


router.get('/lk21/genre', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
            tipe = req.query.tipe
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != 'sanzking') return res.json(loghandler.invalidKey)
    if (!tipe) return res.json({ status : false, nunyieun : `${nunyieun}`, pesan : "masukan parameter tipe"})

       fetch(enkodeURI(`https://lk21-api-zahirr.herokuapp.com/genre?genre=${tipe}`))
        .then(response => response.json())
        .then(data => {
        var hasil = data;
             res.json({
             	author: 'sanzking',
                 hasil
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})


router.get('/textmaker/random', async (req, res, next) => {
        var theme = req.query.theme,
             text = req.query.text,
             text2 = req.query.text2,
             text3 = req.query.text3,
             apikeyInput = req.query.apikey;
        
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != 'sanzking') return res.json(loghandler.invalidKey)
        if (!theme) return res.json(loghandler.nottheme)
        if (theme != 'text-burn' && theme != 'art-quote') return res.json(loghandler.notheme)
        if (!text) return res.json(loghandler.nottext)

        if (theme == 'text-burn') {
            try {
            request.post({
                url: "https://photooxy.com/logo-and-text-effects/write-text-on-burn-paper-388.html",
                headers: {
                    'Content-Type': 'application/x-www-form-urlenkoded'
                },
                body: `text_1=${text}&login=OK`,
                }, (e,r,b) => {
                    if (!e) {
                        $ = cheerio.load(b)
                        $(".thumbnail").find("img").each(function() {
                            h = $(this).attr("src")
                            var hasil = "https://photooxy.com/"+h
                            fetch(enkodeURI(`https://api.imgbb.com/1/upload?expiration=120&key=761ea2d5575581057a799d14e9c78e28&image=${hasil}&name=${randomTextNumber}`))
                                .then(response => response.json())
                                .then(data => {
                                    var urlnya = data.data.url,
                                        delete_url = data.data.delete_url;
                                        res.json({
                                            status : true,
                                            nunyieun : `${nunyieun}`,
                                            pesan : `jangan lupa follow ${nunyieun}`,
                                            hasil:{
                                                url:urlnya,
                                                delete_url: delete_url,
                                                info: 'url akan hilang setelah 2 menit'
                                            }
                                        })
                                })
                        })
                    }
                })
                } catch (e) {
                	console.log(e);
                res.json(loghandler.error)
                }
        } else if (theme == 'art-quote') {
            request.post({
                url: "https://photooxy.com/logo-and-text-effects/write-art-quote-on-wood-heart-370.html",
                headers: {
                    'Content-Type': 'application/x-www-form-urlenkoded'
                },
                body: `text_1=${text}&login=OK`,
                }, (e,r,b) => {
                    if (!e) {
                        $ = cheerio.load(b)
                        $(".thumbnail").find("img").each(function() {
                            h = $(this).attr("src")
                            var hasil = "https://photooxy.com/"+h
                            fetch(enkodeURI(`https://api.imgbb.com/1/upload?expiration=120&key=761ea2d5575581057a799d14e9c78e28&image=${hasil}&name=${randomTextNumber}`))
                                .then(response => response.json())
                                .then(data => {
                                    var urlnya = data.data.url,
                                        delete_url = data.data.delete_url;
                                        res.json({
                                            status : true,
                                            nunyieun : `${nunyieun}`,
                                            pesan : `jangan lupa follow ${nunyieun}`,
                                            hasil:{
                                                url:urlnya,
                                                delete_url: delete_url,
                                                info: 'url akan hilang setelah 2 menit'
                                            }
                                        })
                                })
                        })
                    }
                }) 
        } else {
            res.json(loghandler.error)
        }
})

router.get('/textmaker/roses', async (req, res, next) => {
        var theme = req.query.theme,
             text = req.query.text,
             text2 = req.query.text2,
             text3 = req.query.text3,
             apikeyInput = req.query.apikey;
        
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != 'sanzking') return res.json(loghandler.invalidKey)
        if (!theme) return res.json(loghandler.nottheme)
        if (theme != 'wooden-boarch' && theme != 'golden') return res.json(loghandler.notheme)
        if (!text) return res.json(loghandler.nottext)

        if (theme == 'wooden-boarch') {
            try {
            request.post({
                url: "https://photooxy.com/logo-and-text-effects/writing-on-wooden-boards-368.html",
                headers: {
                    'Content-Type': 'application/x-www-form-urlenkoded'
                },
                body: `text_1=${text}&login=OK`,
                }, (e,r,b) => {
                    if (!e) {
                        $ = cheerio.load(b)
                        $(".thumbnail").find("img").each(function() {
                            h = $(this).attr("src")
                            var hasil = "https://photooxy.com/"+h
                            fetch(enkodeURI(`https://api.imgbb.com/1/upload?expiration=120&key=761ea2d5575581057a799d14e9c78e28&image=${hasil}&name=${randomTextNumber}`))
                                .then(response => response.json())
                                .then(data => {
                                    var urlnya = data.data.url,
                                        delete_url = data.data.delete_url;
                                        res.json({
                                            status : true,
                                            nunyieun : `${nunyieun}`,
                                            pesan : `jangan lupa follow ${nunyieun}`,
                                            hasil:{
                                                url:urlnya,
                                                delete_url: delete_url,
                                                info: 'url akan hilang setelah 2 menit'
                                            }
                                        })
                                })
                        })
                    }
                })
                } catch (e) {
                	console.log(e);
                res.json(loghandler.error)
                }
        } else if (theme == 'golden') {
            request.post({
                url: "https://photooxy.com/logo-and-text-effects/yellow-roses-text-360.html",
                headers: {
                    'Content-Type': 'application/x-www-form-urlenkoded'
                },
                body: `text_1=${text}&login=OK`,
                }, (e,r,b) => {
                    if (!e) {
                        $ = cheerio.load(b)
                        $(".thumbnail").find("img").each(function() {
                            h = $(this).attr("src")
                            var hasil = "https://photooxy.com/"+h
                            fetch(enkodeURI(`https://api.imgbb.com/1/upload?expiration=120&key=761ea2d5575581057a799d14e9c78e28&image=${hasil}&name=${randomTextNumber}`))
                                .then(response => response.json())
                                .then(data => {
                                    var urlnya = data.data.url,
                                        delete_url = data.data.delete_url;
                                        res.json({
                                            status : true,
                                            nunyieun : `${nunyieun}`,
                                            pesan : `jangan lupa follow ${nunyieun}`,
                                            hasil:{
                                                url:urlnya,
                                                delete_url: delete_url,
                                                info: 'url akan hilang setelah 2 menit'
                                            }
                                        })
                                })
                        })
                    }
                }) 
        } else {
            res.json(loghandler.error)
        }
})

router.get('/yutub/video', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
            url = req.query.url
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != 'sanzking') return res.json(loghandler.invalidKey)
    if (!url) return res.json({ status : false, nunyieun : `${nunyieun}`, pesan : "masukan parameter url"})

       fetch(enkodeURI(`https://python-api-zhirrr.herokuapp.com/api/ytv?url=${url}`))
        .then(response => response.json())
        .then(data => {
        var hasil = data;
             res.json({
             	author: 'sanzking',
                 hasil
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})


router.get('/yutub/audio', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
            url = req.query.url
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != 'sanzking') return res.json(loghandler.invalidKey)
    if (!url) return res.json({ status : false, nunyieun : `${nunyieun}`, pesan : "masukan parameter url"})

       fetch(enkodeURI(`https://python-api-zhirrr.herokuapp.com/api/yta?url=${url}`))
        .then(response => response.json())
        .then(data => {
        var hasil = data;
             res.json({
             	author: 'sanzking',
                 hasil
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})


router.get('/ig/stalk', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
            username = req.query.username
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != 'sanzking') return res.json(loghandler.invalidKey)
    if (!username) return res.json({ status : false, nunyieun : `${nunyieun}`, pesan : "masukan parameter username"})

       fetch(enkodeURI(`https://python-api-zhirrr.herokuapp.com/api/stalk?username=${username}`))
        .then(response => response.json())
        .then(data => {
        var hasil = data;
             res.json({
             	author: 'sanzking',
                 hasil
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})


router.get('/maker', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
            text = req.query.text
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != 'sanzking') return res.json(loghandler.invalidKey)
    if (!text) return res.json({ status : false, nunyieun : `${nunyieun}`, pesan : "masukan parameter text"})

       fetch(enkodeURI(`https://textmaker-api-zahirr.herokuapp.com/api/textmaker?text=${text}`))
        .then(response => response.json())
        .then(data => {
        var hasil = data;
             res.json({
             	author: 'sanzking',
                 hasil
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})


router.get('/maker2', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
            text = req.query.text
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != 'sanzking') return res.json(loghandler.invalidKey)
    if (!text) return res.json({ status : false, nunyieun : `${nunyieun}`, pesan : "masukan parameter text"})

       fetch(enkodeURI(`https://textmaker-api-zahirr.herokuapp.com/api/textmaker2?text=${text}`))
        .then(response => response.json())
        .then(data => {
        var hasil = data;
             res.json({
             	author: 'sanzking',
                 hasil
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})
router.get('/github/stalk', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
            username = req.query.username
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != 'sanzking') return res.json(loghandler.invalidKey)
    if (!username) return res.json({ status : false, nunyieun : `${nunyieun}`, pesan : "masukan parameter username"})

       fetch(enkodeURI(`https://github-api-zhirrr.vercel.app/api/detailuser?q=${username}`))
        .then(response => response.json())
        .then(data => {
        var hasil = data;
             res.json({
             	author: 'sanzking',
                 hasil
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})
router.get('/repository/stalk', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
            username = req.query.username
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != 'sanzking') return res.json(loghandler.invalidKey)
    if (!username) return res.json({ status : false, nunyieun : `${nunyieun}`, pesan : "masukan nama repository yang ingin kamu cari"})

       fetch(enkodeURI(`https://github-api-zhirrr.vercel.app/api/searchrepo?q=${username}`))
        .then(response => response.json())
        .then(data => {
        var hasil = data;
             res.json({
             	author: 'sanzking',
                 hasil
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})


router.get('/maker3', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
            text = req.query.text
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != 'sanzking') return res.json(loghandler.invalidKey)
    if (!text) return res.json({ status : false, nunyieun : `${nunyieun}`, pesan : "masukan parameter text"})

       fetch(enkodeURI(`https://textmaker-api-zahirr.herokuapp.com/api/textmaker3?text=${text}`))
        .then(response => response.json())
        .then(data => {
        var hasil = data;
             res.json({
             	author: 'sanzking',
                 hasil
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})


router.get('/maker4', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
            text = req.query.text
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != 'sanzking') return res.json(loghandler.invalidKey)
    if (!text) return res.json({ status : false, nunyieun : `${nunyieun}`, pesan : "masukan parameter text"})

       fetch(enkodeURI(`https://textmaker-api-zahirr.herokuapp.com/api/textmaker4?text=${text}`))
        .then(response => response.json())
        .then(data => {
        var hasil = data;
             res.json({
             	author: 'sanzking',
                 hasil
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})


router.get('/maker3d', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
            text = req.query.text
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != 'sanzking') return res.json(loghandler.invalidKey)
    if (!text) return res.json({ status : false, nunyieun : `${nunyieun}`, pesan : "masukan parameter text"})

       fetch(enkodeURI(`https://textmaker-api-zahirr.herokuapp.com/api/text3d?text=${text}`))
        .then(response => response.json())
        .then(data => {
        var hasil = data;
             res.json({
             	author: 'sanzking',
                 hasil
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})


router.get('/maker3d/no2', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
            text = req.query.text
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != 'sanzking') return res.json(loghandler.invalidKey)
    if (!text) return res.json({ status : false, nunyieun : `${nunyieun}`, pesan : "masukan parameter text"})

       fetch(enkodeURI(`https://textmaker-api-zahirr.herokuapp.com/api/text3d-2?text=${text}`))
        .then(response => response.json())
        .then(data => {
        var hasil = data;
             res.json({
             	author: 'sanzking',
                 hasil
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})


router.get('/maker3d/no3', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
            text = req.query.text
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != 'sanzking') return res.json(loghandler.invalidKey)
    if (!text) return res.json({ status : false, nunyieun : `${nunyieun}`, pesan : "masukan parameter text"})

       fetch(enkodeURI(`https://textmaker-api-zahirr.herokuapp.com/api/text3d-3?text=${text}`))
        .then(response => response.json())
        .then(data => {
        var hasil = data;
             res.json({
             	author: 'sanzking',
                 hasil
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})


router.get('/maker3d/no4', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
            text = req.query.text
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != 'sanzking') return res.json(loghandler.invalidKey)
    if (!text) return res.json({ status : false, nunyieun : `${nunyieun}`, pesan : "masukan parameter text"})

       fetch(enkodeURI(`https://textmaker-api-zahirr.herokuapp.com/api/text3d-4?text=${text}`))
        .then(response => response.json())
        .then(data => {
        var hasil = data;
             res.json({
             	author: 'sanzking',
                 hasil
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})


router.get('/yutub/search', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
            video = req.query.video
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != 'sanzking') return res.json(loghandler.invalidKey)
    if (!video) return res.json({ status : false, nunyieun : `${nunyieun}`, pesan : "masukan parameter video"})

       fetch(enkodeURI(`https://yutub-api-zaahirr.herokuapp.com/search?q=${video}`))
        .then(response => response.json())
        .then(data => {
        var hasil = data;
             res.json({
             	author: 'sanzking',
                 hasil
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})


router.get('/maker/special/transformer', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
            text = req.query.text
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != 'sanzking') return res.json(loghandler.invalidKey)
    if (!text) return res.json({ status : false, nunyieun : `${nunyieun}`, pesan : "masukan parameter text"})

       fetch(enkodeURI(`https://textmaker-api-zahirr.herokuapp.com/api/special/transformer?text=${text}`))
        .then(response => response.json())
        .then(data => {
        var hasil = data;
             res.json({
             	author: 'sanzking',
                 hasil
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})


router.get('/maker/special/epep', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
            text = req.query.text
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != 'sanzking') return res.json(loghandler.invalidKey)
    if (!text) return res.json({ status : false, nunyieun : `${nunyieun}`, pesan : "masukan parameter text"})

       fetch(enkodeURI(`https://textmaker-api-zahirr.herokuapp.com/api/special/sertifikatepep?text=${text}`))
        .then(response => response.json())
        .then(data => {
        var hasil = data;
             res.json({
             	author: 'sanzking',
                 hasil
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})


module.exports = router
