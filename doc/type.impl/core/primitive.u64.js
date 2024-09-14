(function() {var type_impls = {
"libc":[],
"phf_shared":[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-FmtConst-for-u64\" class=\"impl\"><a class=\"src rightside\" href=\"src/phf_shared/lib.rs.html#153\">source</a><a href=\"#impl-FmtConst-for-u64\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"phf_shared/trait.FmtConst.html\" title=\"trait phf_shared::FmtConst\">FmtConst</a> for <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.80.0/core/primitive.u64.html\">u64</a></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.fmt_const\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/phf_shared/lib.rs.html#153\">source</a><a href=\"#method.fmt_const\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"phf_shared/trait.FmtConst.html#tymethod.fmt_const\" class=\"fn\">fmt_const</a>(&amp;self, f: &amp;mut <a class=\"struct\" href=\"https://doc.rust-lang.org/1.80.0/core/fmt/struct.Formatter.html\" title=\"struct core::fmt::Formatter\">Formatter</a>&lt;'_&gt;) -&gt; <a class=\"type\" href=\"https://doc.rust-lang.org/1.80.0/core/fmt/type.Result.html\" title=\"type core::fmt::Result\">Result</a></h4></section></summary><div class='docblock'>Print a <code>const</code> expression representing this value.</div></details></div></details>","FmtConst","phf_shared::HashKey"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-PhfBorrow%3Cu64%3E-for-u64\" class=\"impl\"><a class=\"src rightside\" href=\"src/phf_shared/lib.rs.html#172-189\">source</a><a href=\"#impl-PhfBorrow%3Cu64%3E-for-u64\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"phf_shared/trait.PhfBorrow.html\" title=\"trait phf_shared::PhfBorrow\">PhfBorrow</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.80.0/core/primitive.u64.html\">u64</a>&gt; for <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.80.0/core/primitive.u64.html\">u64</a></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.borrow\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/phf_shared/lib.rs.html#172-189\">source</a><a href=\"#method.borrow\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"phf_shared/trait.PhfBorrow.html#tymethod.borrow\" class=\"fn\">borrow</a>(&amp;self) -&gt; &amp;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.80.0/core/primitive.u64.html\">u64</a></h4></section></summary><div class='docblock'>Convert a reference to <code>self</code> to a reference to the borrowed type.</div></details></div></details>","PhfBorrow<u64>","phf_shared::HashKey"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-PhfHash-for-u64\" class=\"impl\"><a class=\"src rightside\" href=\"src/phf_shared/lib.rs.html#357\">source</a><a href=\"#impl-PhfHash-for-u64\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"phf_shared/trait.PhfHash.html\" title=\"trait phf_shared::PhfHash\">PhfHash</a> for <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.80.0/core/primitive.u64.html\">u64</a></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.phf_hash\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/phf_shared/lib.rs.html#357\">source</a><a href=\"#method.phf_hash\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"phf_shared/trait.PhfHash.html#tymethod.phf_hash\" class=\"fn\">phf_hash</a>&lt;H: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.80.0/core/hash/trait.Hasher.html\" title=\"trait core::hash::Hasher\">Hasher</a>&gt;(&amp;self, state: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.80.0/core/primitive.reference.html\">&amp;mut H</a>)</h4></section></summary><div class='docblock'>Feeds the value into the state given, updating the hasher as necessary.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.phf_hash_slice\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/phf_shared/lib.rs.html#72-79\">source</a><a href=\"#method.phf_hash_slice\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"phf_shared/trait.PhfHash.html#method.phf_hash_slice\" class=\"fn\">phf_hash_slice</a>&lt;H: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.80.0/core/hash/trait.Hasher.html\" title=\"trait core::hash::Hasher\">Hasher</a>&gt;(data: &amp;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.80.0/core/primitive.slice.html\">[Self]</a>, state: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.80.0/core/primitive.reference.html\">&amp;mut H</a>)<div class=\"where\">where\n    Self: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.80.0/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>,</div></h4></section></summary><div class='docblock'>Feeds a slice of this type into the state provided.</div></details></div></details>","PhfHash","phf_shared::HashKey"]]
};if (window.register_type_impls) {window.register_type_impls(type_impls);} else {window.pending_type_impls = type_impls;}})()