import{e as a}from"./app.7c899e58.js";import{_ as n}from"./plugin-vue_export-helper.21dcd24c.js";const s={},e=a(`<h1 id="swift" tabindex="-1"><a class="header-anchor" href="#swift" aria-hidden="true">#</a> Swift</h1><h2 id="install-syntax-highlighting" tabindex="-1"><a class="header-anchor" href="#install-syntax-highlighting" aria-hidden="true">#</a> Install Syntax Highlighting</h2><div class="language-vim ext-vim line-numbers-mode"><pre class="language-vim"><code><span class="token punctuation">:</span>TSInstall swift
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="install-language-server" tabindex="-1"><a class="header-anchor" href="#install-language-server" aria-hidden="true">#</a> Install Language Server</h2><div class="language-vim ext-vim line-numbers-mode"><pre class="language-vim"><code><span class="token punctuation">:</span>LspInstall sourcekit
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="configure-lunarvim" tabindex="-1"><a class="header-anchor" href="#configure-lunarvim" aria-hidden="true">#</a> Configure Lunarvim</h2><p>The <code>sourcekit</code> language server is disabled (overridden) by default because of the conflict with <code>clangd</code></p><h3 id="lsp-configuration" tabindex="-1"><a class="header-anchor" href="#lsp-configuration" aria-hidden="true">#</a> Lsp Configuration</h3><p>Create a file called <code>~/.config/lvim/ftplugin/swift.lua</code>:</p><div class="language-lua ext-lua line-numbers-mode"><pre class="language-lua"><code><span class="token keyword">local</span> opts <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;lvim.lsp.manager&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">setup</span><span class="token punctuation">(</span><span class="token string">&quot;sourcekit&quot;</span><span class="token punctuation">,</span> opts<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>The default settings for the <code>sourcekit</code> lsp is:</p><div class="language-lua ext-lua line-numbers-mode"><pre class="language-lua"><code>default_config <span class="token operator">=</span> <span class="token punctuation">{</span>
    cmd <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token string">&quot;sourcekit-lsp&quot;</span> <span class="token punctuation">}</span>
    filetypes <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token string">&quot;swift&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;c&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;cpp&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;objective-c&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;objective-cpp&quot;</span> <span class="token punctuation">}</span>
    root_dir <span class="token operator">=</span> <span class="token function">root_pattern</span><span class="token punctuation">(</span><span class="token string">&quot;Package.swift&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;.git&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h2 id="supported-formatters" tabindex="-1"><a class="header-anchor" href="#supported-formatters" aria-hidden="true">#</a> Supported formatters</h2><div class="language-lua ext-lua line-numbers-mode"><pre class="language-lua"><code>swift <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token string">&quot;swiftformat&quot;</span> <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div>`,14);function t(p,o){return e}var l=n(s,[["render",t]]);export{l as default};
