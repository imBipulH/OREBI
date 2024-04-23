function emailTemplate(token){
return `<div style="padding:10px;font-family:'Dm Sans',sans-serif"><img alt=Orebi-Logo src=https://i.ibb.co/KDb06tb/Orebi-Logo.png style=width:100px><h3 style=font-size:24px;line-height:8px>OREBI E-Commerce</h3><p>Please verify your email address.</p><a href="http://localhost:3005/api/v1/authentication/emailvarification/${token}" style="background-color:#000;color:#fff;padding:10px 20px;display:inline-block;border-radius:3px;cursor:pointer">Click for verification</a></div>`
}
module.exports = emailTemplate;