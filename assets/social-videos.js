/* Official social profile embeds for R Music Records.
   TikTok creator embeds show up to 10 recent public videos.
   Instagram profile embeds are subject to Meta's public-account/embed settings.
   YouTube Shorts opens the channel's Shorts archive; no guessed channel ID is used. */
(()=>{
 const grid=document.querySelector("[data-social-video-grid]");
 if(!grid)return;
 const addScript=(src,id)=>{if(document.getElementById(id))return;const s=document.createElement("script");s.id=id;s.async=true;s.src=src;document.body.appendChild(s);};
 const card=(title,platform,href,body)=>{
  const el=document.createElement("article");el.className="social-video-card";
  const head=document.createElement("div");head.className="social-video-card-copy";
  const h=document.createElement("h3");h.textContent=title;
  const p=document.createElement("p");p.textContent=platform;
  head.append(h,p);el.append(head);if(body)el.append(body);
  const link=document.createElement("a");link.className="social-video-open";link.href=href;link.target="_blank";link.rel="noopener noreferrer";link.textContent="Открыть все публикации ↗";el.append(link);
  grid.append(el);
 };
 const insta=document.createElement("blockquote");
 insta.className="instagram-media";
 insta.setAttribute("data-instgrm-permalink","https://www.instagram.com/r_music_records/");
 insta.setAttribute("data-instgrm-version","14");
 insta.style.cssText="background:#fff;border:0;border-radius:12px;margin:0 auto;max-width:540px;width:100%;min-width:0;";
 const instaWrap=document.createElement("div");instaWrap.style.padding="12px";instaWrap.append(insta);
 card("Instagram Reels","Профиль и доступные публикации","https://www.instagram.com/r_music_records/",instaWrap);
 addScript("https://www.instagram.com/embed.js","rmm-instagram-embed");
 const tiktok=document.createElement("blockquote");
 tiktok.className="tiktok-embed";
 tiktok.setAttribute("cite","https://www.tiktok.com/@r_music_records");
 tiktok.setAttribute("data-unique-id","r_music_records");
 tiktok.setAttribute("data-embed-type","creator");
 tiktok.style.cssText="max-width:720px;min-width:288px;width:100%;margin:0 auto;";
 const tsec=document.createElement("section");
 const ta=document.createElement("a");ta.href="https://www.tiktok.com/@r_music_records";ta.target="_blank";ta.rel="noopener noreferrer";ta.textContent="@r_music_records";
 tsec.append(ta);tiktok.append(tsec);
 const tWrap=document.createElement("div");tWrap.append(tiktok);
 card("TikTok","До 10 последних публичных видео в официальном профиле-встраивании","https://www.tiktok.com/@r_music_records",tWrap);
 addScript("https://www.tiktok.com/embed.js","rmm-tiktok-embed");
 const y=document.createElement("div");y.className="social-video-placeholder";
 const ys=document.createElement("strong");ys.textContent="YouTube Shorts";
 const yp=document.createElement("span");yp.textContent="Архив коротких видео на канале";
 y.append(ys,yp);
 card("YouTube Shorts","Все доступные Shorts канала","https://www.youtube.com/@r_music_records/shorts",y);
})();
