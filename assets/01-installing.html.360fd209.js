import{r as o,o as i,c as r,a as n,b as a,w as p,F as c,d as s,e as t}from"./app.7c899e58.js";import{_ as u}from"./plugin-vue_export-helper.21dcd24c.js";const d={},h=n("h1",{id:"installation",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#installation","aria-hidden":"true"},"#"),s(" Installation")],-1),m=n("h2",{id:"prerequisites",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#prerequisites","aria-hidden":"true"},"#"),s(" Prerequisites")],-1),b=s("Make sure you have installed the latest version of "),k={href:"https://github.com/neovim/neovim/releases/latest",target:"_blank",rel:"noopener noreferrer"},g=n("code",null,"Neovim v0.7.0+",-1),_=s("."),v=t("<li>Have <code>git</code>, <code>make</code>, <code>pip</code>, <code>npm</code>, <code>node</code> and <code>cargo</code> installed on your system.</li>",1),f={href:"https://docs.npmjs.com/resolving-eacces-permissions-errors-when-installing-packages-globally",target:"_blank",rel:"noopener noreferrer"},w=s("Resolve "),x=n("code",null,"EACCES",-1),y=s(" permissions when installing packages globally"),q=s(" to avoid error when installing packages with npm."),L=t(`<h1 id="install" tabindex="-1"><a class="header-anchor" href="#install" aria-hidden="true">#</a> Install</h1><p>There are a few ways to install LunarVim.</p><h2 id="stable" tabindex="-1"><a class="header-anchor" href="#stable" aria-hidden="true">#</a> Stable</h2><p>No alarm or surprise:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">bash</span> <span class="token operator">&lt;</span><span class="token punctuation">(</span><span class="token function">curl</span> -s https://raw.githubusercontent.com/lunarvim/lunarvim/master/utils/installer/install.sh<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="rolling" tabindex="-1"><a class="header-anchor" href="#rolling" aria-hidden="true">#</a> Rolling</h2><p>All the new features with all the new bugs:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token assign-left variable">LV_BRANCH</span><span class="token operator">=</span>rolling <span class="token function">bash</span> <span class="token operator">&lt;</span><span class="token punctuation">(</span><span class="token function">curl</span> -s https://raw.githubusercontent.com/lunarvim/lunarvim/rolling/utils/installer/install.sh<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>You can use this helper script to get the latest neovim binary as well:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">bash</span> <span class="token operator">&lt;</span><span class="token punctuation">(</span><span class="token function">curl</span> -s https://raw.githubusercontent.com/LunarVim/LunarVim/rolling/utils/installer/install-neovim-from-release<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div>`,10),I=s("Make sure to check the "),N=s("troubleshooting"),R=s(" section if you encounter any problem."),A=n("h2",{id:"tips-for-users-in-mainland-china",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#tips-for-users-in-mainland-china","aria-hidden":"true"},"#"),s(" Tips for users in Mainland China")],-1),S=n("p",null,"Connection issues may cause installation failures. To avoid them when downloading content from GitHub, please use a mirror.",-1),V=s("For example, "),M={href:"https://mirror.ghproxy.com/",target:"_blank",rel:"noopener noreferrer"},W=s("GitHub Proxy Mirror"),C=s(" is a fast mirror for accessing github content. Add the following lines to "),E=n("code",null,"/etc/hosts",-1),T=s(" to accelerate your installation."),U=t(`<div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>mirror.ghproxy.com github.com
mirror.ghproxy.com raw.githubusercontent.com
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="tips-for-wsl-2-users" tabindex="-1"><a class="header-anchor" href="#tips-for-wsl-2-users" aria-hidden="true">#</a> Tips for WSL 2 users</h2><p>While using LunarVim within WSL2, there are a few things one should be aware off:</p>`,3),F=s("Avoid using LunarVm within the Windows directory, e.g. "),H=n("code",null,"/mnt/c",-1),D=s(", due to filesystem performance issues, see "),$={href:"https://github.com/microsoft/WSL/issues/4197",target:"_blank",rel:"noopener noreferrer"},O=s("WSL#4197"),Y=s("."),B=s("Some WSL2 users have experienced that sourcing the clipboard may be slow. A workaround for that is calling a clipboard manager from the Windows side. Neovim tries using "),G={href:"https://github.com/equalsraf/win32yank",target:"_blank",rel:"noopener noreferrer"},P=s("win32yank.exe"),j=s(" if it's available. so install it and set the value of "),z=n("code",null,"clipboard",-1),J=s(" explicitly:"),K=t(`<div class="language-lua ext-lua line-numbers-mode"><pre class="language-lua"><code><span class="token keyword">if</span> vim<span class="token punctuation">.</span>fn<span class="token punctuation">.</span>has <span class="token string">&quot;wsl&quot;</span> <span class="token operator">==</span> <span class="token number">1</span> <span class="token keyword">then</span>
  vim<span class="token punctuation">.</span>g<span class="token punctuation">.</span>clipboard <span class="token operator">=</span> <span class="token punctuation">{</span>
    copy <span class="token operator">=</span> <span class="token punctuation">{</span>
      <span class="token punctuation">[</span><span class="token string">&quot;+&quot;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&quot;win32yank.exe -i --crlf&quot;</span><span class="token punctuation">,</span> 
      <span class="token punctuation">[</span><span class="token string">&quot;*&quot;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&quot;win32yank.exe -i --crlf&quot;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    paste <span class="token operator">=</span> <span class="token punctuation">{</span>
      <span class="token punctuation">[</span><span class="token string">&quot;+&quot;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&quot;win32yank.exe -o --lf&quot;</span><span class="token punctuation">,</span>
      <span class="token punctuation">[</span><span class="token string">&quot;*&quot;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&quot;win32yank.exe -o --lf&quot;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span>
<span class="token keyword">end</span>

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><ol start="3"><li>Some WSL2 users have experienced that opening buffers at startup takes a lot of time. A possible solution is to add the following to your <code>/etc/wsl.conf</code> file:</li></ol><div class="language-ini ext-ini line-numbers-mode"><pre class="language-ini"><code><span class="token section"><span class="token punctuation">[</span><span class="token section-name selector">automount</span><span class="token punctuation">]</span></span>
<span class="token comment"># Set to true will automount fixed drives (C:/ or D:/) with DrvFs under the root directory set above. Set to false means drives won&#39;t be mounted automatically, but need to be mounted manually or with fstab.</span>
<span class="token key attr-name">enabled</span> <span class="token punctuation">=</span> <span class="token value attr-value">false</span>

<span class="token comment"># Sets the \`/etc/fstab\` file to be processed when a WSL distribution is launched.</span>
<span class="token key attr-name">mountFsTab</span> <span class="token punctuation">=</span> <span class="token value attr-value">false</span>

<span class="token comment"># Set whether WSL supports interop process like launching Windows apps and adding path variables. Setting these to false will block the launch of Windows processes and block adding $PATH environment variables.</span>
<span class="token section"><span class="token punctuation">[</span><span class="token section-name selector">interop</span><span class="token punctuation">]</span></span>
<span class="token key attr-name">enabled</span> <span class="token punctuation">=</span> <span class="token value attr-value">false</span>
<span class="token key attr-name">appendWindowsPath</span> <span class="token punctuation">=</span> <span class="token value attr-value">false</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div>`,3),Q=s("Reference: "),X={href:"https://docs.microsoft.com/en-us/windows/wsl/wsl-config#automount-settings",target:"_blank",rel:"noopener noreferrer"},Z=s("WSL automount settings"),nn=n("h2",{id:"tips-for-neovide-users",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#tips-for-neovide-users","aria-hidden":"true"},"#"),s(" Tips for Neovide users")],-1),sn=s("In order to use lunarvim with "),an={href:"https://github.com/neovide/neovide",target:"_blank",rel:"noopener noreferrer"},en=s("Neovide"),tn=s(" you need to add the following line to your "),on=n("code",null,"config.lua",-1),ln=t(`<div class="language-lua ext-lua line-numbers-mode"><pre class="language-lua"><code>vim<span class="token punctuation">.</span>o<span class="token punctuation">.</span>guifont <span class="token operator">=</span> <span class="token string">&quot;Your font name&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>Where <code>Your Font Name</code> is the literal name of the font you want to use. For example <code>&quot;Inconsolata Nerd Font&quot;</code>. You will also need to export the right environment variables and call neovide with the apropriate parameters. An easy way to achieve this is to create a little executable script like, for example <code>~/.local/bin/lvim-gui</code></p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token shebang important">#!/bin/sh</span>
<span class="token comment"># ~/.local/bin/lvim-gui</span>
<span class="token builtin class-name">export</span> <span class="token assign-left variable">LUNARVIM_RUNTIME_DIR</span><span class="token operator">=</span><span class="token string">&quot;\${LUNARVIM_RUNTIME_DIR:-&quot;</span><span class="token environment constant">$HOME</span>/.local/share/lunarvim<span class="token string">&quot;}&quot;</span>
<span class="token builtin class-name">export</span> <span class="token assign-left variable">LUNARVIM_CONFIG_DIR</span><span class="token operator">=</span><span class="token string">&quot;\${LUNARVIM_CONFIG_DIR:-&quot;</span><span class="token environment constant">$HOME</span>/.config/lvim<span class="token string">&quot;}&quot;</span>
<span class="token builtin class-name">export</span> <span class="token assign-left variable">LUNARVIM_CACHE_DIR</span><span class="token operator">=</span><span class="token string">&quot;\${LUNARVIM_CACHE_DIR:-&quot;</span><span class="token environment constant">$HOME</span>/.cache/lvim<span class="token string">&quot;}&quot;</span>

<span class="token builtin class-name">exec</span> neovide -- -u <span class="token string">&quot;<span class="token variable">$LUNARVIM_RUNTIME_DIR</span>/lvim/init.lua&quot;</span> <span class="token string">&quot;<span class="token variable">$@</span>&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>Then give it the proper execution permissions</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">chmod</span> +x ~/.local/bin/lvim-gui
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>And you can launch from now on like this:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>lvim-gui
<span class="token comment"># or with params</span>
lvim-gui some-file
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="uninstall" tabindex="-1"><a class="header-anchor" href="#uninstall" aria-hidden="true">#</a> Uninstall</h2><p>You can remove LunarVim (including the configuration files) using the bundled <code>uninstall</code> script</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">bash</span> ~/.local/share/lunarvim/lvim/utils/installer/uninstall.sh
<span class="token comment"># or</span>
<span class="token function">bash</span> <span class="token operator">&lt;</span><span class="token punctuation">(</span><span class="token function">curl</span> -s https://raw.githubusercontent.com/lunarvim/lunarvim/master/utils/installer/uninstall.sh<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div>`,10);function rn(pn,cn){const e=o("ExternalLinkIcon"),l=o("RouterLink");return i(),r(c,null,[h,m,n("ul",null,[n("li",null,[b,n("a",k,[g,a(e)]),_]),v,n("li",null,[n("a",f,[w,x,y,a(e)]),q])]),L,n("p",null,[I,a(l,{to:"/troubleshooting/"},{default:p(()=>[N]),_:1}),R]),A,S,n("p",null,[V,n("a",M,[W,a(e)]),C,E,T]),U,n("ol",null,[n("li",null,[F,H,D,n("a",$,[O,a(e)]),Y]),n("li",null,[B,n("a",G,[P,a(e)]),j,z,J])]),K,n("p",null,[Q,n("a",X,[Z,a(e)])]),nn,n("p",null,[sn,n("a",an,[en,a(e)]),tn,on]),ln],64)}var hn=u(d,[["render",rn]]);export{hn as default};
