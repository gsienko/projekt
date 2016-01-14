/*! Invoice Template Generator @author: Invoicebus @email: info@invoicebus.com @web: https://invoicebus.com @version: 1.0.0 @updated: 2015-12-03 16:12:44 @license: MIT */
!function () {
    document.getElementsByTagName("html")[0].style.position = "absolute", document.getElementsByTagName("html")[0].style.top = "-100000px", document.body.style.position = "absolute", document.body.style.top = "-100000px";
    var a, b, c, d = function () {
        for (var a = document.getElementsByTagName("script"), b = 0; b < a.length; b++) {
            var c = a[b].src, d = c.indexOf("generator" + h + ".js");
            if (d > -1)return c.substring(0, d)
        }
    }, e = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7", f = "?utm_source=generator&utm_medium=template&utm_campaign=invoicebus_templates", g = "https://invoicebus.com/saveinvoice/", h = ".min", i = d(), j = i + "jquery.min.js", k = i + "bootstrap.min.js", l = function () {
        var a = document.createElement("div");
        return a.innerHTML = "Oops sorry, the template cannot be rendered. Mind checking your internet connection?", a.setAttribute("style", 'position:fixed; top:0px; left:0px; background:#f75520; color:white; text-align:center; width:100%; padding:10px 0; font:normal 14px/1.4em "Open Sans", Arial, Sans-serif; border-bottom:3px solid #fff; box-shadow:0px 0px 10px 2px #aaa;'), document.body.appendChild(a), !1
    }, m = 100, n = 0, o = 5e3, p = function (a) {
        var b = document.createElement("script");
        b.async = !0, b.type = "text/javascript", b.src = a, document.body.appendChild(b)
    }, q = function (a) {
        return n > o ? l() : (window.jQuery ? (p(k), r(a)) : setTimeout(function () {
            q(a)
        }, m), void(n += m))
    }, r = function (a) {
        return n > o ? l() : (jQuery.fn.tooltip ? a(jQuery) : setTimeout(function () {
            r(a)
        }, m), void(n += m))
    }, s = function () {
        $(function () {
            w(), ib_loadBootstrapDatepicker(), ib_loadBootstrapTypeahead(), vb(), H(), lb(), J(), nb(), wb(), W(), U(), V(), E(), B(), Bb(), t()
        })
    }, t = function () {
        var a = setInterval(function () {
            for (var b = 0; b < document.styleSheets.length; b++)if (-1 != document.styleSheets[b].href.indexOf("generator" + h + ".css")) {
                $("html").removeAttr("style"), $("body").removeAttr("style"), clearInterval(a), window.status = "finished";
                break
            }
        }, 10)
    }, u = ["a", "b", "body", "br", "div", "em", "footer", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hr", "html", "i", "img", "label", "li", "link", "meta", "ol", "p", "pre", "section", "span", "strong", "style", "sub", "sup", "table", "tbody", "td", "tfoot", "th", "thead", "title", "tr", "ul"], v = ["cellpadding", "cellspacing", "charset", "class", "colspan", "content", "data-hide-on-quote", "data-iterate", "data-logo", "dir", "height", "href", "http-equiv", "id", "lang", "name", "rel", "rowspan", "src", "style", "title", "type", "width"], w = function () {
        $(document).find(":not(" + u.join(",") + ")").remove(), $("*").each(function () {
            for (var a = 0; a < this.attributes.length; a++)-1 == v.indexOf(this.attributes[a].name) && this.removeAttribute(this.attributes[a].name)
        }), $(document).find("a").each(function () {
            0 === $(this).attr("href").indexOf("javascript") && $(this).removeAttr("href")
        })
    }, x = function () {
        var a = navigator.userAgent;
        return a.indexOf("MSIE ") > -1 || a.indexOf("Trident/") > -1 || a.indexOf("Edge/") > -1
    }, y = function () {
        var a = navigator.userAgent;
        return a.indexOf("Safari/") > -1 && !(a.indexOf("Chrome/") > -1 || a.indexOf("OPR/") > -1)
    }, z = function (a) {
        return a ? a.replace(/<div>/gi, "<br />").replace(/<\/div>/gi, "").replace(/<\/p>(\r*|\n*)<p>/gi, "<br />").replace(/<(p|\/p)>/gi, "").replace(/<br\s*(\/|\s*)>/gi, "\n") : a
    }, A = function (a) {
        return a ? $("<div />").html(a).text() : a
    }, B = function () {
        setTimeout(function () {
            $(document).tooltip({selector: '[data-tooltip="tooltip"]', html: !0, container: "body"})
        }, 200)
    }, C = !1, D = function () {
        var a = $('[contenteditable="true"], [data-ibcl-id="issue_date"], [data-ibcl-id="due_date"]');
        C ? (a.addClass("ib_editable_outline ib_stop_animate"), $(".ib_highlight_editable").addClass("active active_hover")) : (a.removeClass("ib_editable_outline"), $(".ib_highlight_editable").removeClass("active active_hover"))
    }, E = function () {
        $("head").prepend('<link rel="stylesheet" href="' + i + "generator" + h + '.css" media="all" />'), $(document.body).before($('<ib-span class="ib_invoice_commands_wrap"><ib-span class="ib_invoice_commands"><ib-span id="ib-print-btn" class="ib_default_button" data-tooltip="tooltip" data-placement="bottom" title="This command is also used to save<br/>the invoice as PDF. See FAQ for more info."><i class="fa fa-print"></i> Print Invoice</ib-span><ib-span class="ib_default_button ib_highlight_editable" data-tooltip="tooltip" data-placement="bottom" title="Highlight editable fields"><i class="fa fa-edit"></i> Highlight Fields</ib-span><ib-span id="ib-save-data-btn" class="ib_default_button" data-toggle="modal" data-target="#ib_saveCurrentStateModal" data-tooltip="tooltip" data-placement="bottom" title="Save current invoice data such as<br/>company address, logo, etc., for future re-use"><i class="fa fa-bolt"></i> Save Current State</ib-span><iframe id="ib_download_data_frame" class="ib_force_hide"></iframe><ib-span class="ib_default_button ib_save_online" data-tooltip="tooltip" data-placement="bottom" title="You\'ll be taken to Invoicebus website<br>to save this invoice online"><i class="fa fa-cloud-upload"></i> Save Invoice Online</ib-span><ib-span class="ib_save_info" data-tooltip="tooltip" data-placement="right" title="You\'ll need Invoicebus account to save this invoice"><i class="fa fa-question-circle"></i></ib-span><ib-span class="ib_gray_link ib_how_to_link ib_pull_right" data-toggle="modal" data-target="#ib_howToModal">About</ib-span><ib-span class="ib_top_separator ib_pull_right">â</ib-span><ib-span class="ib_gray_link ib_how_to_link ib_pull_right" onclick="window.open(\'https://groups.google.com/d/forum/html-invoice-generator\', \'_blank\')">FAQ / Ask a question!</ib-span></ib-span></ib-span>')).after($("<ib-span class=\"ib_invoicebus_love\">Crafted with &#x2764; by<br><ib-span onclick=\"window.open('https://invoicebus.com/team/', '_blank')\">The Invoicebus Mechanics</ib-span></ib-span>"));
        var b = '<ib-div id="ib_saveCurrentStateModal" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="howToModal" aria-hidden="true"><ib-div class="modal-dialog"><ib-div class="modal-content"><ib-div class="modal-header"><ib-span type="button" class="close" data-dismiss="modal"><ib-span aria-hidden="true">&times;</ib-span></ib-span><ib-div class="modal-title" id="howToModal">Save current state</ib-div></ib-div><ib-div class="modal-body"><ib-div class="ib_how_to_container"><ib-div class="ib_modal_container">   <ib-div class="ib_p">     This action will save the current state of the template to a local file called <ib-span class="ib_code">data.txt</ib-span>. The data from this file will be used to pre-populate the template fields in the future. This comes handy when you want to save your default details such as company address, logo, currency, notes, etc., so you don\'t need to re-enter them every time.   </ib-div>    <ib-div class="ib_p">     After clicking the button below, you\'ll be prompted to save the file.   </ib-div>    <ib-div class="ib_p ib_b">     Make sure to name this file <ib-span class="ib_code">data.txt</ib-span> and save it in the template directory. If the file already exists, overwrite it.   </ib-div>    <ib-div class="ib_p ib_notice">     <ib-span class="ib_b">Note:</ib-span> Saving the state of the template is not intended to store an actual instance of the invoice for record keeping. For this, you should either <ib-span class="ib_a" onclick="window.open(\'https://groups.google.com/forum/#!topic/html-invoice-generator/H8s1yUCXnj4\', \'_blank\')">save the invoice to PDF</ib-span> (by using the Print option) or <ib-span class="ib_a" onclick="window.open(\'https://groups.google.com/forum/#!topic/html-invoice-generator/EfafX6izKxc\', \'_blank\')">save it online</ib-span>.   </ib-div>    <a href="javascript:void(0);" download="data.txt" class="ib_default_button ib_success_button ib_large_button" id="ib-save-current-data"><ib-span class="fa fa-bolt"></ib-span> Save data.txt</a>   <ib-div id="ib-safari-save-as" class="ib_hide ib_safari_note">Right click the button and choose <ib-span class="ib_b">&quot;Download Linked File As...&quot;</ib-span></ib-div> </ib-div> </ib-div></ib-div></ib-div></ib-div></ib-div>';
        $(document.body).after($(b)), $("#ib-print-btn").click(function () {
            C = !1, D(), window.print()
        }), $("#ib-save-data-btn").click(function () {
            if (y()) {
                var a = Ab();
                $("#ib-save-current-data").attr("href", "data:text/plain;charset=UTF-8," + encodeURIComponent(a)), $("#ib-safari-save-as").removeClass("ib_hide")
            }
        }), $("#ib-save-current-data").click(function () {
            var a = Ab();
            if (x()) {
                var b = ib_download_data_frame.document || ib_download_data_frame.contentDocument || ib_download_data_frame.contentWindow.document;
                b.open("text/html", "replace"), b.write("<pre>" + a.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;") + "</pre>"), b.close(), ib_download_data_frame.focus(), b.execCommand("SaveAs", !0, "data.txt")
            } else $(this).attr("href", "data:text/plain;charset=UTF-8," + encodeURIComponent(a))
        }), $(".ib_highlight_editable").click(function () {
            C = !C, D()
        }), $(document).scroll(function () {
            0 === document.body.scrollTop && 0 === document.documentElement.scrollTop ? $(".ib_invoice_commands_wrap").removeClass("ib_commands_shadow") : $(".ib_invoice_commands_wrap").hasClass("ib_commands_shadow") || $(".ib_invoice_commands_wrap").addClass("ib_commands_shadow")
        }), $(document.body).after($("<ib-span class=\"ib_invoicebus_fineprint\">Manage your invoices super easy at <ib-span onclick=\"window.open('https://invoicebus.com', '_blank')\">invoicebus.com</ib-span></ib-span>")), JSON.parse(a.invoicebus_fineprint) || $(".ib_invoicebus_fineprint").css("visibility", "hidden"), $(".ib_save_online").click(zb), $('[data-iterate="item"]:last').after($('<ib-span class="ib_bottom_row_commands"><ib-span class="ib_blue_link ib_add_new_row_link">Add new row</ib-span><ib-span class="ib_blue_link ib_show_hide_columns_link">Configure Columns</ib-span></ib-span>')), $(".ib_add_new_row_link").click(function (a) {
            jb(this, a)
        }), $(".ib_show_hide_columns_link").after($('<ib-span class="ib_show_hide_columns"><ib-span><input type="checkbox" value="item_row_number" /><ib-span>Row number</ib-span></ib-span><ib-span><input type="checkbox" value="item_description" /><ib-span>Description</ib-span></ib-span><ib-span><input type="checkbox" value="item_quantity" /><ib-span>Quantity</ib-span></ib-span><ib-span><input type="checkbox" value="item_price" /><ib-span>Price</ib-span></ib-span><ib-span><input type="checkbox" value="item_discount" /><ib-span>Discount</ib-span></ib-span><ib-span><input type="checkbox" value="item_tax" /><ib-span>Tax</ib-span></ib-span><ib-span><input type="checkbox" value="item_line_total" /><ib-span>Line total</ib-span></ib-span></ib-span>')), $(".ib_show_hide_columns_link, .ib_show_hide_columns").hover(function () {
            $(".ib_show_hide_columns").css("display", "block")
        }, function () {
            $(".ib_show_hide_columns").hide()
        }), $(".ib_show_hide_columns > ib-span > ib-span").click(function () {
            var a = $(this).parent().find("input:checkbox");
            a.prop("checked", !a.is(":checked")), a.change()
        }), $(".ib_show_hide_columns > ib-span > input:checkbox").change(function () {
            var a = $(this).val();
            "item_row_number" == a ? $('[data-ibcl-id="' + a + '_label"], [data-ibcl-id="' + a + '"]').toggleClass("ib_hide_column", !$(this).is(":checked")) : ($('[data-ibcl-id="' + a + '_label"], [data-ibcl-id="' + a + '"]').toggle($(this).is(":checked")), $('[data-ibcl-id="' + a + '_label"]').hasClass("ibcl_ie_contenteditable") && $('[data-ibcl-id="' + a + '_label"]').parent().toggle($(this).is(":checked")), $('[data-ibcl-id="' + a + '"]').hasClass("ibcl_ie_contenteditable") && $('[data-ibcl-id="' + a + '"]').parent().toggle($(this).is(":checked")), db())
        });
        for (var c = 0; c < a.default_columns.length; c++)$('input[type="checkbox"][value="' + a.default_columns[c] + '"]').prop("checked", !0);
        $(".ib_show_hide_columns > ib-span > input:checkbox").change();
        var d = '<ib-div id="ib_howToModal" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="howToModal" aria-hidden="true"><ib-div class="modal-dialog"><ib-div class="modal-content"><ib-div class="modal-header"><ib-span type="button" class="close" data-dismiss="modal"><ib-span aria-hidden="true">&times;</ib-span></ib-span><ib-div class="modal-title" id="howToModal">About</ib-div></ib-div><ib-div class="modal-body"><ib-div class="ib_how_to_container"><ib-div class="ib_modal_container">   <ib-div class="ib_p">     If you\'re one-man performer and everything you do for your business you do it by yourself â welcome to the club! You\'re well familiar with the pain of writing invoices. Word? Excel? Complicated accounting software? Forget about it and hello you new joy!   </ib-div>    <ib-div class="ib_h3">What can I do with this template?</ib-div>   <ib-div class="ib_p">     <ib-div class="ib_ul">       <ib-div class="ib_li">         &#9679; &nbsp; Write professional looking invoices in a matter of seconds.         <ib-div class="ib_ul">           <ib-div class="ib_li">             &#9675; &nbsp; Use any language or currency.           </ib-div>           <ib-div class="ib_li">             &#9675; &nbsp; Add your own logo with simple drag and drop.           </ib-div>           <ib-div class="ib_li">             &#9675; &nbsp; Easily add, remove, and reorder item rows.           </ib-div>           <ib-div class="ib_li">             &#9675; &nbsp; Add taxes and discounts.           </ib-div>           <ib-div class="ib_li">             &#9675; &nbsp; Configure item column visibility.           </ib-div>           <ib-div class="ib_li">             &#9675; &nbsp; Auto calculate subtotals, totals, taxes and discounts.           </ib-div>           <ib-div class="ib_li">             &#9675; &nbsp; Save your default company data for future re-use.           </ib-div>         </ib-div>       </ib-div>       <ib-div class="ib_li">         &#9679; &nbsp; Restyle it by using simple HTML &amp; CSS techniques.       </ib-div>       <ib-div class="ib_li">         &#9679; &nbsp; Directly print it out.       </ib-div>       <ib-div class="ib_li">         &#9679; &nbsp; Save it to PDF or save it online.       </ib-div>     </ib-div>   </ib-div>    <ib-div class="ib_h3">How can I save my default company data for future re-use?</ib-div>   <ib-div class="ib_p">     Click <ib-span class="ib_b">&quot;Save Current State&quot;</ib-span> button and follow the on-screen instructions.   </ib-div>    <ib-div class="ib_h3">How to save the invoice?</ib-div>   <ib-div class="ib_p">     There are two ways to save the invoice:     <ib-div class="ib_ul">       <ib-div class="ib_li">         - &nbsp; Save it to PDF using PDF printer.       </ib-div>       <ib-div class="ib_li">         - &nbsp; Save it online to our online invoicing system Invoicebus.       </ib-div>     </ib-div>   </ib-div>    <ib-div class="ib_p">     Saving the invoice to PDF can be done by using something called PDF Print Driver. This is also known as printing to PDF because the output from the browser is sent to a file instead to a printer. This functionality is built-in in some browsers (like Google Chrome), while in others (like Firefox or Internet Explorer) you have to install PDF printer manually. A good and free PDF printer is <ib-span class="ib_a" onclick="window.open(\'http://www.bullzip.com\', \'_blank\')">Bullzip</ib-span>. If you already have your PDF printer installed, <ib-span class="ib_b">click &quot;Print Invoice&quot;, set the destination printer to &quot;Save as PDF&quot; and click Save</ib-span>.   </ib-div>    <ib-div class="ib_p">     In order to save the invoice online you\'ll need to create an Invoicebus account first. You can do this by clicking &quot;Save Invoice Online&quot; button. Then you\'ll be taken to a secure page where you can complete your registration and save the invoice. Please note that an online invoice is much more powerful than a static PDF invoice. For example, an online invoice can be edited on-the-fly, sent by email, tracked, and paid directly by Credit card, PayPal or Bitcoin. Here\'s an <ib-span class="ib_a" onclick="window.open(\'https://invoicebus.com/demoinvoice/\', \'_blank\')">example</ib-span>.   </ib-div>    <ib-div class="ib_h3">How to restyle the template?</ib-div>   <ib-div class="ib_p">     The template is made with simplicity in mind so can be easily customized with your own branding and colors. However, basic knowledge in HTML and CSS is required.    </ib-div>    <ib-div class="ib_p">     For smaller modifications (like changing colors, fonts or element sizes) you only need to modify the <ib-span class="ib_code">template.css</ib-span> file. If you want to make bigger structural changes of the layout (deleting or rearranging elements), you\'ll need to modify the <ib-span class="ib_code">template.html</ib-span> file. We\'ve made a <ib-span class="ib_a" onclick="window.open(\'https://invoicebus.com/how-to-create-invoice-template/\', \'_blank\')">guide</ib-span> with best practices on how to create your own template, so feel free to use it as a reference point.   </ib-div>    <ib-div class="ib_p">     <ib-span class="ib_b">Note:</ib-span> The template is completely separate from its logic, so you don\'t need to mess up with any programming or JavaScript code.   </ib-div>    <ib-div class="ib_h3">Do I have to be connected to internet to use it?</ib-div>   <ib-div class="ib_p">     Yes, but isn\'t necessary. In the background the template links to remote JavaScript file (<ib-span class="ib_code">generator.min.js</ib-span>) located on our server from which it pulls all the logic. If for some reason you don\'t have internet access on your computer, you can <ib-span class="ib_a" onclick="window.open(\'http://cdn.invoicebus.com/generator/generator.zip\', \'_blank\')">download</ib-span> the script locally, and modify the <ib-span class="ib_code">template.html</ib-span> file to point to the local version of the script.   </ib-div>    <ib-div class="ib_p">     We generally encourage you to continue using the remote script because any recent updates immediately reflect into the template you\'re using.   </ib-div>    <ib-div class="ib_h3">What about the fonts used?</ib-div>   <ib-div class="ib_p">     The template uses Google Fonts as they are free and open to everyone. If you want to use the template offline (without being connected to internet) you\'ll have to download and install the fonts on your local computer (<ib-span class="ib_a" onclick="window.open(\'http://www.fonts.com/web-fonts/google\', \'_blank\')">SkyFonts</ib-span> is a simple tool that helps you do this easily).   </ib-div>     <ib-div class="ib_h3">Can I use the JavaScript source code?</ib-div>   <ib-div class="ib_p">     Absolutely! In fact, we would be proud if you decide to use it (<ib-span class="ib_a" onclick="window.open(\'https://github.com/Invoicebus/html-invoice-generator\', \'_blank\')">fork us on GitHub</ib-span>). Whether you choose to use it in commercial or non-commercial project, feel free to give us a shout as we are eager to hear all possibilities how this tool can be used. Sometimes, we may even give you a hand ;)   </ib-div>    <ib-div class="ib_h3">Support our work</ib-div>   <ib-div class="ib_p">     Maintaining this script takes a lot of time and effort to keep it bug free and up to date. All we\'re asking is a little favor â discrete fine print of our invoicing service at the bottom of the printed document. It would mean the world to us if you leave it there. Thanks!   </ib-div>    <ib-div class="ib_p">     It\'s fine even if you decide to avoid giving us credit, so we made this choice easier to you. In the <ib-span class="ib_code">data.txt</ib-span> file we included property called <ib-span class="ib_code">invoicebus_fineprint</ib-span> which can be set to <ib-span class="ib_code">true</ib-span> (to show the fine print) or <ib-span class="ib_code">false</ib-span> (to hide the fine print).   </ib-div>    <ib-div class="ib_h3">Found a bug?</ib-div>   <ib-div class="ib_p">     If you encounter any issue or found a bug, please report it at our <ib-span class="ib_a" onclick="window.open(\'https://github.com/Invoicebus/html-invoice-generator/issues\', \'_blank\')">GitHub repo</ib-span>. Please do not submit general questions here, instead use the support forum (see below).   </ib-div>    <ib-div class="ib_h3">Suggestions, questions, criticism?</ib-div>   <ib-div class="ib_p">     Is there anything we can do to improve this template and make it better for you? Good things / bad things? Feel free to find the appropriate topic at our <ib-span class="ib_a" onclick="window.open(\'https://groups.google.com/d/forum/html-invoice-generator\', \'_blank\')">support forum</ib-span> and hit us up â we read and respond to every post.   </ib-div> </ib-div> </ib-div></ib-div><ib-div class="modal-footer"><ib-span class="ib_default_button" data-dismiss="modal">OK, got it</ib-span></ib-div></ib-div></ib-div></ib-div>';
        $(document.body).after($(d))
    }, F = function () {
        for (var a = document.getElementsByTagName("script"), b = 0; b < a.length; b++) {
            var c = a[b].src;
            if (c.indexOf("generator" + h + ".js?") > -1)return c.substring(c.indexOf("?") + 1)
        }
    }, G = 0, H = function () {
        a = {
            "{company_logo}": "",
            "{company_name}": {default_text: "Dino Store", tooltip: "Enter your company name"},
            "{company_address}": {default_text: "227 Cobblestone Road", tooltip: "Enter company's address"},
            "{company_city_zip_state}": {
                default_text: "30000 Bedrock, Cobblestone County",
                tooltip: "Enter company's zip, city and country"
            },
            "{company_phone_fax}": {default_text: "+555 7 789-1234", tooltip: "Enter company's contact phones"},
            "{company_email_web}": {
                default_text: "http://dinostore.bed | hello@dinostore.bed",
                tooltip: "Enter company's web and email address"
            },
            "{payment_info1}": {default_text: "Payment details:", tooltip: "Enter your payment details"},
            "{payment_info2}": {default_text: "ACC:123006705", tooltip: "Enter other payment details"},
            "{payment_info3}": {default_text: "IBAN:US100000060345", tooltip: "Enter other payment details"},
            "{payment_info4}": {default_text: "SWIFT:BOA447", tooltip: "Enter other payment details"},
            "{payment_info5}": {default_text: "", tooltip: "Enter other payment details"},
            "{issue_date_label}": {default_text: "Issue Date:", tooltip: "Enter issue date label"},
            "{issue_date}": {default_text: "", tooltip: "Select invoice issue date"},
            "{net_term_label}": {default_text: "Net:", tooltip: "Enter net days label"},
            "{net_term}": {default_text: 21, tooltip: "Enter invoice net days"},
            "{due_date_label}": {default_text: "Due Date:", tooltip: "Enter invoice due date label"},
            "{due_date}": {default_text: "", tooltip: "Select invoice due date"},
            "{currency_label}": {default_text: "Currency:", tooltip: "Enter invoice currency label"},
            "{currency}": {default_text: "USD", tooltip: "Enter invoice currency"},
            "{po_number_label}": {default_text: "P.O. #", tooltip: "Enter P.O. label"},
            "{po_number}": {default_text: "1/3-147", tooltip: "Enter P.O. Number"},
            "{bill_to_label}": {default_text: "Bill to:", tooltip: "Enter bill to label"},
            "{client_name}": {default_text: "Slate Rock and Gravel Company", tooltip: "Enter client name"},
            "{client_address}": {default_text: "222 Rocky Way", tooltip: "Enter client address"},
            "{client_city_zip_state}": {
                default_text: "30000 Bedrock, Cobblestone County",
                tooltip: "Enter client city, zip, country"
            },
            "{client_phone_fax}": {default_text: "+555 7 123-5555", tooltip: "Enter client pnone & fax"},
            "{client_email}": {default_text: "fred@slaterockgravel.bed", tooltip: "Enter client email"},
            "{client_other}": {default_text: "Attn: Fred Flintstone", tooltip: "Enter other client info"},
            "{invoice_title}": {default_text: "INVOICE", tooltip: "Enter invoice title"},
            "{invoice_number}": {default_text: "#1", tooltip: "Enter invoice number"},
            "{item_row_number_label}": {default_text: "", tooltip: ""},
            "{item_description_label}": {default_text: "Item", tooltip: "Enter item header"},
            "{item_quantity_label}": {default_text: "Quantity", tooltip: "Enter quantity header"},
            "{item_price_label}": {default_text: "Price", tooltip: "Enter price header"},
            "{item_discount_label}": {default_text: "Discount", tooltip: "Enter discount header"},
            "{item_tax_label}": {default_text: "Tax", tooltip: "Enter tax header"},
            "{item_line_total_label}": {default_text: "Linetotal", tooltip: "Enter line total header"},
            "{item_row_number}": {default_text: "", tooltip: ""},
            "{item_description}": {default_text: "", tooltip: "Enter item description"},
            "{item_quantity}": {default_text: "", tooltip: "Enter quantity"},
            "{item_price}": {default_text: "", tooltip: "Enter price"},
            "{item_discount}": {default_text: "", tooltip: "Enter discount"},
            "{item_tax}": {default_text: "", tooltip: "Enter tax"},
            "{item_line_total}": {default_text: "", tooltip: ""},
            "{amount_subtotal_label}": {default_text: "Subtotal:", tooltip: "Enter subtotal label"},
            "{amount_subtotal}": {default_text: "", tooltip: ""},
            "{tax_name}": {default_text: "Tax:", tooltip: "Enter tax label"},
            "{tax_value}": {default_text: "", tooltip: ""},
            "{amount_total_label}": {default_text: "Total:", tooltip: "Enter total label"},
            "{amount_total}": {default_text: "", tooltip: ""},
            "{amount_paid_label}": {default_text: "Paid:", tooltip: "Enter amount paid label"},
            "{amount_paid}": {default_text: "", tooltip: "Enter amount paid"},
            "{amount_due_label}": {default_text: "Amount Due:", tooltip: "Enter amount due label"},
            "{amount_due}": {default_text: "", tooltip: ""},
            "{terms_label}": {default_text: "Terms & Notes", tooltip: "Enter terms and notes label"},
            "{terms}": {
                default_text: "Fred, thank you very much. We really appreciate your business.<br />Please send payments before the due date.",
                tooltip: "Enter invoice terms and notes"
            },
            date_format: "mm/dd/yyyy",
            currency_position: "left",
            number_format: "0,000.00",
            default_columns: ["item_row_number", "item_description", "item_quantity", "item_price", "item_discount", "item_tax", "item_line_total"],
            default_quantity: "1",
            default_price: "0",
            default_discount: "0",
            default_tax: "0",
            default_number_rows: 3,
            auto_calculate_dates: !0,
            load_items: !0,
            invoicebus_fineprint: !0,
            items: [{
                item_description: "Frozen Brontosaurus Ribs",
                item_quantity: "2",
                item_price: "120",
                item_discount: "",
                item_tax: "2%"
            }, {
                item_description: "Mammoth Chops",
                item_quantity: "14",
                item_price: "175",
                item_discount: "-10%",
                item_tax: "5%"
            }, {item_description: "", item_quantity: "", item_price: "", item_discount: "", item_tax: ""}]
        }, I()
    }, I = function () {
        if (!(G > o)) {
            if ("undefined" != typeof ib_invoice_data) {
                "function" == typeof ib_invoice_data && (ib_invoice_data = ib_parseData(ib_multiline.stripIndent(ib_invoice_data)));
                for (var b in ib_invoice_data)"undefined" == typeof a[b] && (a[b] = {
                    default_text: ib_invoice_data[b],
                    tooltip: "Enter " + b.replace(/{(document|client)_custom_([a-zA-Z0-9_]+)}/gi, "$1 $2").replace(/_/g, " ")
                }), "undefined" != typeof a[b].default_text ? a[b].default_text = ib_invoice_data[b] : a[b] = ib_invoice_data[b];
                rb = ib_invoice_data.currency_position, sb = ib_invoice_data.number_format, sb && (tb = sb[sb.length - 3]), qb = $(pb).map(function (b, c) {
                    return c.code == a["{currency}"].default_text ? c.symbol : void 0
                })[0]
            } else setTimeout(function () {
                I()
            }, m);
            G += m
        }
    }, J = function () {
        K(), M()
    }, K = function () {
        L("{company_name}"), L("{company_address}"), L("{company_city_zip_state}"), L("{company_phone_fax}"), L("{company_email_web}"), L("{payment_info1}"), L("{payment_info2}"), L("{payment_info3}"), L("{payment_info4}"), L("{issue_date_label}"), L("{issue_date}", !0, {"data-date": bb}), L("{net_term_label}"), L("{net_term}"), L("{due_date_label}"), L("{due_date}", !0, {"data-date": cb}), L("{currency_label}"), L("{currency}"), L("{po_number_label}"), L("{po_number}"), L("{bill_to_label}"), L("{payment_info5}"), L("{client_name}"), L("{client_address}"), L("{client_city_zip_state}"), L("{client_phone_fax}"), L("{client_email}"), L("{client_other}"), L("{invoice_title}"), L("{invoice_number}"), L("{item_row_number_label}", !0), L("{item_description_label}"), L("{item_quantity_label}"), L("{item_price_label}"), L("{item_discount_label}"), L("{item_tax_label}"), L("{item_line_total_label}"), L("{item_row_number}", !0), L("{item_description}"), L("{item_quantity}"), L("{item_price}"), L("{item_discount}"), L("{item_tax}"), L("{item_line_total}", !0), L("{amount_subtotal_label}"), L("{amount_subtotal}", !0), L("{tax_name}"), L("{tax_value}", !0), L("{amount_total_label}"), L("{amount_total}", !0), L("{amount_paid_label}"), L("{amount_paid}"), L("{amount_due_label}"), L("{amount_due}", !0), L("{terms_label}"), L("{terms}"), $("*").filter(function () {
            var a = $(this);
            return (/{document_custom_[a-zA-Z0-9_]+}/.test(a.text()) || /{client_custom_[a-zA-Z0-9_]+}/.test(a.text())) && 0 === a.children().length && 3 == a.prop("firstChild").nodeType
        }).each(function (b, c) {
            var d = $(c).text();
            "undefined" == typeof a[d] && (a[d] = {
                default_text: "",
                tooltip: "Enter " + d.replace(/{(document|client)_custom_([a-zA-Z0-9_]+)}/gi, "$1 $2").replace(/_/g, " ")
            }), L(d)
        })
    }, L = function (b, c, d) {
        for (var e = b.substring(1, b.length - 1), f = "TABLE,COL,COLGROUP,TBODY,TD,TFOOT,TH,THEAD,TR".split(","), g = $('*:contains("' + b + '")'), h = 0; h < g.length; h++)if (0 === $(g[h]).children().length && 3 == $(g[h]).prop("firstChild").nodeType) {
            var i = $(g[h]);
            if (x() && f.indexOf(i.prop("tagName")) > -1 && !c) {
                var j = $('<ib-span class="ibcl_ie_contenteditable" contenteditable="true"></ib-span>');
                i.html(j), i = j
            }
            i.attr("data-ibcl-id", e).addClass("ibcl_" + e).attr("data-tooltip", "tooltip").attr("data-placement", "top").attr("title", a[b].tooltip).html(a[b].default_text), d && i.attr(d), c || i.attr("contenteditable", "true")
        }
    }, M = function () {
        $("[data-ibcl-id]").on("keydown keyup", function () {
            var a = $(this).data("ibcl-id");
            if (-1 == ["item_row_number", "item_description", "item_quantity", "item_price", "item_tax_percentage", "item_tax", "item_discount", "item_line_total"].indexOf(a)) {
                var b = $(this).html();
                $('[data-ibcl-id="' + a + '"]').each(function (a, c) {
                    $(c).html() !== b && $(c).html(b)
                })
            }
        })
    }, N = 820, O = 820, P = 1, Q = 0, R = 0, S = 820, T = 820, U = function () {
        $('[data-logo="{company_logo}"]').attr("data-logo", "company_logo").attr("src", e)
    }, V = function () {
        var b = $('[data-logo="company_logo"]').attr("src", e);
        $(document).bind("drop dragover", function (a) {
            a.stopPropagation(), a.preventDefault(), a.originalEvent.dataTransfer.dropEffect = "none"
        }), b.after($('<ib-div class="ib_remove_logo_overlay" data-tooltip="tooltip" data-placement="top"><ib-span class="ib_remove_logo" title="Remove logo"><i class="fa fa-times-circle"></i></ib-span></ib-div>').hover(function () {
        }, function () {
            $(".ib_remove_logo_overlay").hide()
        })), b.hover(function () {
            if ("" !== b.attr("src")) {
                var a = $('[data-logo="company_logo"]').offset();
                $(".ib_remove_logo_overlay").show().offset(a).width(Q).height(R)
            }
        }, function () {
        }), setTimeout(function () {
            Q = $('[data-logo="company_logo"]').width(), R = $('[data-logo="company_logo"]').height(), P = Q / R, Q > R ? O *= 1 / P : N *= P, b.hide().before($('<ib-span class="ib_drop_zone" data-tooltip="tooltip" data-placement="top" title="Drop image or click to upload your logo (max 2MB).<br>For better print resolution use larger image,<br>as it\'s automatically scaled down."><ib-span>Drop your logo here<br /><ib-span>(' + Q + " x " + R + 'px)</ib-span><input type="file" accept="image/*" /></ib-span></ib-span>').width(Q).height(R)), $(".ib_drop_zone").bind("dragenter", g).bind("dragleave", h).bind("dragover", f).bind("drop", c), $("input:file").change(function (a) {
                a.originalEvent.dataTransfer = {files: $(this).prop("files")}, c(a)
            }), setTimeout(function () {
                a["{company_logo}"] && /^data:image\/.+;base64/.test(a["{company_logo}"]) && (b.attr("src", a["{company_logo}"]).css("display", "block").hide().show(), $(".ib_logo_base64").val($('[data-logo="company_logo"]').attr("src")), $(".ib_drop_zone").hide())
            }, 100)
        }, 100);
        var c = function (a) {
            a.stopPropagation(), a.preventDefault();
            var c = a.originalEvent.dataTransfer.files, d = c[0];
            if (d) {
                if (!d.type.match(/image.*/))return void alert("Please upload image file. Supported formats are .png, .jpg ang .gif");
                if (d.size > 2097152)return void alert("File too big, maximum size is 2MB");
                var e = new Image, f = new FileReader;
                f.onload = function (a) {
                    e.src = a.target.result
                }, e.onload = function () {
                    var a = e.width, c = e.height;
                    S = N, T = O, S >= a && a >= c && (T = 1 * a / P, S = a), T >= c && c >= a && (S = c * P, T = c), Q >= a && a >= c && (T = 1 * Q / P, S = Q), R >= c && c >= a && (S = R * P, T = R), a >= S && (c *= S / a, a = S), c >= T && (a *= T / c, c = T), 1 > a && (a = 1), 1 > c && (c = 1);
                    var d = document.createElement("canvas");
                    d.width = S, d.height = T;
                    var f = (S - a) / 2, g = d.getContext("2d");
                    g.drawImage(e, f, 0, a, c);
                    var h = d.toDataURL("image/png");
                    b.attr("src", h).css("display", "block").hide().fadeIn(), $(".ib_logo_base64").val($('[data-logo="company_logo"]').attr("src")), $(".ib_drop_zone").hide()
                }, f.readAsDataURL(d), $(".ib_drop_zone").removeClass("ib_border_hover")
            }
        }, d = function (a) {
            a.preventDefault(), a.stopPropagation(), b.attr("src", e).hide(), $(".ib_drop_zone").show(), $(".ib_remove_logo_overlay").hide(), $("input:file").val("")
        }, f = function (a) {
            a.stopPropagation(), a.preventDefault(), a.originalEvent.dataTransfer.dropEffect = "copy"
        }, g = function (a) {
            a.stopPropagation(), a.preventDefault(), $(".ib_drop_zone").addClass("ib_border_hover")
        }, h = function (a) {
            a.stopPropagation(), a.preventDefault(), $(".ib_drop_zone").removeClass("ib_border_hover")
        };
        $(".ib_remove_logo").click(d)
    }, W = function () {
        b = $('[data-iterate="item"]'), c = $('[data-iterate="tax"]').hide().clone();
        var d = 1, e = parseInt(a.default_number_rows);
        for ("undefined" != typeof ib_invoice_data && "undefined" != typeof ib_invoice_data.items && (a.items = ib_invoice_data.items), e < a.items.length && (e = a.items.length); e > d;)$(b).after($(b).clone()), d++;
        eb(), b = b.clone(), hb(), gb(), db()
    }, X = function (a, b) {
        for (var c = 0; c < a.length; c++)if (Object.keys(a[c])[0] == b)return c;
        return -1
    }, Y = function (a, b) {
        for (var c = 0; c < a.length; c++)if (tax_row = $(a[c]).find('[data-ib-value="' + b.getFormatedNumber() + '"]'), tax_row.length)return c;
        return -1
    }, Z = function (a) {
        return a ? $('[data-iterate="tax"]:visible').find('[data-ib-value="' + a.toString().getFormatedNumber() + '"]').closest('[data-iterate="tax"]').find('[data-ibcl-id="tax_name"]').text().replace(/:/gi, "") : ""
    };
    String.prototype.insertString = function (a, b) {
        return this ? [this.slice(0, b), a, this.slice(b)].join("") : ""
    }, String.prototype.getNumber = function () {
        if (this) {
            if ("." == tb)return parseFloat(this.replace(/[^0-9.-]/g, ""));
            if ("," == tb)return parseFloat(this.replace(/[^0-9,-]/g, "").replace(/,/g, "."))
        }
        return 0
    }, String.prototype.getValidNumberChars = function () {
        return this ? this.replace(/[^0-9.,-]/gi, "") : ""
    }, String.prototype.getFormatedNumber = function () {
        if (this) {
            var a, b, c = this.toString(), d = "";
            if (0 === c.indexOf("-") && (c = c.substring(1), d = "-"), "." == tb) {
                if ("0,000.00" == sb)for (b = 0, a = c.lastIndexOf(".") - 1; a >= 0; a--)2 > b ? b++ : (b = 0, c = c.insertString(",", a))
            } else if ("," == tb)if ("0.000,00" == sb)for (c = c.replace(/\./g, ","), b = 0, a = c.lastIndexOf(",") - 1; a >= 0; a--)2 > b ? b++ : (b = 0, c = c.insertString(".", a)); else"0000,00" == sb && (c = c.replace(/\./g, ","));
            return ("." == c[0] || "," == c[0]) && (c = c.substring(1)), d + c
        }
        return this
    }, Number.prototype.toFixed = function (a) {
        a || (a = 0);
        var b = (+(Math.round(+(this.toString() + "e" + a)).toString() + "e" + -a)).toString();
        -1 == b.indexOf(".") && a > 0 && (b += ".");
        for (var c = 0, d = b.indexOf(".") + 1; d <= b.length; d++)void 0 === b[d] && a > c && (b += "0"), c++;
        return b
    };
    var _, ab, bb, cb, db = function () {
        for (var b, d, e, f = $('[data-iterate="item"]'), g = 0, h = 0, i = 0, j = [], k = 0; k < f.length; k++) {
            var l = $(f[k]), m = l.find('[data-ibcl-id="item_quantity"]:visible').text().getNumber() || a.default_quantity.getNumber(), n = l.find('[data-ibcl-id="item_price"]:visible').text().getNumber() || a.default_price, o = l.find('[data-ibcl-id="item_discount"]:visible').text().getNumber() || a.default_discount.getNumber(), p = l.find('[data-ibcl-id="item_tax"]:visible').text().getNumber() || a.default_tax.getNumber();
            isNaN(l.find('[data-ibcl-id="item_discount"]').text().getNumber()) ? l.find('[data-ibcl-id="item_discount"]').removeClass("ib_item_percentage").find("br, p, div").remove() : l.find('[data-ibcl-id="item_discount"]').addClass("ib_item_percentage").find("br, p, div").remove(), isNaN(l.find('[data-ibcl-id="item_tax"]').text().getNumber()) ? l.find('[data-ibcl-id="item_tax"]').removeClass("ib_item_percentage").find("br, p, div").remove() : l.find('[data-ibcl-id="item_tax"]').addClass("ib_item_percentage").find("br, p, div").remove();
            var q = l.find('[data-ibcl-id="item_line_total"]:visible');
            b = $('[data-ibcl-id="amount_paid"]').text().getNumber(), d = $('[data-ibcl-id="amount_due"]').text().getNumber();
            var r = 0, s = 0;
            if (isNaN(m) || isNaN(n) || (r = m * n), isNaN(o) || (r -= r * (o / 100)), g += r, isNaN(p) || (s = p / 100), i = r * s, h += i, 0 !== p) {
                var t = {};
                t[p] = i;
                var u = X(j, p);
                u > -1 ? j[u][p] += i : j.push(t)
            }
            q.text(0 !== r ? r.toFixed(2).getFormatedNumber() : "")
        }
        var v, w, x = [];
        for (e = 0; e < j.length; e++)w = Object.keys(j[e])[0], v = $('[data-iterate="tax"]:visible').find('[data-ib-value="' + w.getFormatedNumber() + '"]').closest('[data-iterate="tax"]'), v.length && x.push($(v).clone());
        for ($('[data-iterate="tax"]:visible').remove(), e = 0; e < j.length; e++) {
            w = Object.keys(j[e])[0];
            var y = Y(x, w);
            if (y > -1)$('[data-iterate="tax"]:hidden').before(x[y]); else {
                v = c.clone().show();
                var z = v.find('[data-ibcl-id="tax_name"]'), A = z.text().trim(), B = A.lastIndexOf(":");
                (-1 == B || B != A.length - 1) && (B = A.length), z.text(A.substring(0, B) + " " + (e + 1) + A.substring(B, A.length)), v.find('[data-ibcl-id="tax_value"]').attr("data-ib-value", Object.keys(j[e])[0].getFormatedNumber()), $('[data-iterate="tax"]:hidden').before(v)
            }
        }
        for (e = 0; e < j.length; e++)w = Object.keys(j[e])[0], v = "left" == rb ? qb + j[e][w].toFixed(2).getFormatedNumber() : j[e][w].toFixed(2).getFormatedNumber() + qb, $('[data-iterate="tax"]').find('[data-ib-value="' + w.getFormatedNumber() + '"]').html(v);
        var C = g + h;
        isNaN(b) && (b = 0, $('[data-ibcl-id="amount_paid"]').text(b.toFixed(2).getFormatedNumber())), isNaN(d) && (d = 0), d = C - b, g = "left" == rb ? qb + g.toFixed(2).getFormatedNumber() : g.toFixed(2).getFormatedNumber() + qb, C = "left" == rb ? qb + C.toFixed(2).getFormatedNumber() : C.toFixed(2).getFormatedNumber() + qb, d = "left" == rb ? qb + d.toFixed(2).getFormatedNumber() : d.toFixed(2).getFormatedNumber() + qb, $('[data-ibcl-id="amount_subtotal"]').text(g), $('[data-ibcl-id="amount_total"]').text(C), $('[data-ibcl-id="amount_due"]').text(d), D()
    }, eb = function () {
        for (var a = $('[data-ibcl-id="item_row_number"]'), b = 0; b < a.length; b++)$(a[b]).append($('<ib-span data-row-number="item_row_number"></ib-span>'));
        fb()
    }, fb = function () {
        for (var a = $('[data-row-number="item_row_number"]'), b = 0; b < a.length; b++)$(a[b]).html(b + 1)
    }, gb = function () {
        if (JSON.parse(a.load_items)) {
            var b = $('[data-iterate="item"]');
            "undefined" != typeof ib_invoice_data && "undefined" != typeof ib_invoice_data.items && (a.items = ib_invoice_data.items);
            for (var c = 0; c < a.items.length; c++)$(b[c]).find('[data-ibcl-id="item_description"]').html(a.items[c].item_description), $(b[c]).find('[data-ibcl-id="item_quantity"]').html(a.items[c].item_quantity), $(b[c]).find('[data-ibcl-id="item_price"]').html(a.items[c].item_price), $(b[c]).find('[data-ibcl-id="item_discount"]').html(a.items[c].item_discount.replace(/%/g, "")), $(b[c]).find('[data-ibcl-id="item_tax"]').html(a.items[c].item_tax.replace(/%/g, ""))
        }
    }, hb = function () {
        var a = '<ib-span class="ib_row_commands" style="height:' + $('[data-iterate="item"]').height() + 'px;"><ib-span class="ib_commands"><ib-span class="ib_add" title="Insert row"><i class="fa fa-plus"></i></ib-span><ib-span class="ib_delete" title="Remove row"><i class="fa fa-minus"></i></ib-span><ib-span class="ib_move" title="Drag to reorder"><i class="fa fa-sort"></i></ib-span></ib-span></ib-span>';
        $(".ib_row_commands").remove();
        for (var b = $('[data-iterate="item"]'), c = 0; c < b.length; c++)$(b[c]).children(":first").css("position", "relative").prepend($(a));
        $(".ib_add").click(function (a) {
            jb(this, a)
        }), $(".ib_delete").click(function (a) {
            kb(this, a)
        }), $('[data-iterate="item"]').hover(function () {
            $(this).find(".ib_row_commands .ib_commands").css("display", "block")
        }, function () {
            $(this).find(".ib_row_commands .ib_commands").hide()
        }), new ib_TableDnD(fb, xb).init(), ib()
    }, ib = function () {
        function a(a) {
            var b = this;
            if (a.ctrlKey)return !0;
            if (a.keyCode >= 35 && a.keyCode <= 40 || a.keyCode >= 48 && a.keyCode <= 57 && !a.shiftKey || a.keyCode >= 96 && a.keyCode <= 105 || 8 == a.keyCode || 9 == a.keyCode || 46 == a.keyCode || 190 == a.keyCode || 110 == a.keyCode || 188 == a.keyCode || 116 == a.keyCode)switch ($(this).data("ibcl-id")) {
                case"amount_paid":
                    setTimeout(function () {
                        isNaN(b.textContent.getNumber()) && (b.textContent = ""), !isNaN(b.textContent.getNumber()) && b.textContent.indexOf("-") > 0 && (b.textContent = "-" + b.textContent.getNumber().toFixed(2))
                    }, 0);
                    break;
                case"net_term":
                    $('[data-ibcl-id="net_term"], [data-ibcl-id="due_date"]').removeClass("ib_stop_animate").addClass("ib_highlight_bg"), setTimeout(function () {
                        $('[data-ibcl-id="net_term"], [data-ibcl-id="due_date"]').removeClass("ib_highlight_bg")
                    }, 10)
            } else {
                switch ($(this).data("ibcl-id")) {
                    case"item_quantity":
                    case"item_price":
                    case"item_discount":
                    case"amount_paid":
                        if ((189 == a.keyCode || 109 == a.keyCode || "-" == a.key) && -1 == $(this).text().indexOf("-")) {
                            var c = window.getSelection().extentOffset + 1;
                            this.textContent = "-" + this.textContent;
                            try {
                                window.getSelection().collapse(b.firstChild, c)
                            } catch (d) {
                            }
                        }
                }
                a.preventDefault()
            }
            "." != tb || -1 == $(this).text().indexOf(".") || 190 != a.keyCode && 110 != a.keyCode || a.preventDefault(), "," == tb && -1 != $(this).text().indexOf(",") && 188 == a.keyCode && a.preventDefault(), "." == tb && 188 == a.keyCode && a.preventDefault(), "," != tb || 190 != a.keyCode && 110 != a.keyCode || a.preventDefault(), "net_term" == $(this).data("ibcl-id") && (188 == a.keyCode || 190 == a.keyCode || 110 == a.keyCode || $(this).text().length >= 3 && a.keyCode >= 48 && a.keyCode <= 57 && window.getSelection().isCollapsed) && a.preventDefault(), setTimeout(db, 0), "net_term" == $(this).data("ibcl-id") && setTimeout(ob, 0)
        }

        for (var b = $('[data-iterate="item"]'), c = 0; c < b.length; c++) {
            {
                var d = $(b[c]);
                d.find(""), d.find('[data-ibcl-id="item_price"]'), d.find(""), d.find(""), d.find("")
            }
            $('[data-ibcl-id="net_term"], [data-ibcl-id="item_quantity"], [data-ibcl-id="item_price"], [data-ibcl-id="item_discount"], [data-ibcl-id="item_tax"], [data-ibcl-id="amount_paid"], [data-ibcl-id="amount_due"]').keydown(a)
        }
    }, jb = function (a, c) {
        c.stopPropagation(), c.preventDefault(), $(a).hasClass("ib_add_new_row_link") ? $(a).closest(".ib_bottom_row_commands").before($(b).clone()) : $(a).closest('[data-iterate="item"]').before($(b).clone()), fb(), hb(), $(".ib_show_hide_columns > ib-span > input:checkbox").each(function (a) {
            $(".ib_show_hide_columns > ib-span > input:checkbox:nth(" + a + ")").change()
        }), D(), db()
    }, kb = function (a, b) {
        b.stopPropagation(), b.preventDefault(), $(a).closest('[data-iterate="item"]').remove(), fb(), db()
    }, lb = function () {
        _ = new Date, ab = new Date((new Date).setDate((new Date).getDate() + parseInt(a["{net_term}"].default_text))), bb = mb(_, a.date_format), cb = mb(ab, a.date_format), a["{issue_date}"].default_text = bb, a["{due_date}"].default_text = cb
    }, mb = function (a, b) {
        var c = b.match(/[.\/\-\s].*?/), d = b.split(/\W+/);
        if (!c || !d || 0 === d.length)throw new Error("Invalid date format.");
        b = {separator: c, parts: d};
        var e = {
            d: a.getDate(),
            m: a.getMonth() + 1,
            yy: a.getFullYear().toString().substring(2),
            yyyy: a.getFullYear()
        };
        e.dd = (e.d < 10 ? "0" : "") + e.d, e.mm = (e.m < 10 ? "0" : "") + e.m, a = [];
        for (var f = 0; f < b.parts.length; f++)a.push(e[b.parts[f]]);
        return a.join(b.separator)
    }, nb = function () {
        for (var b = "", c = ["dd/mm/yyyy", "dd-mm-yyyy", "dd.mm.yyyy", "mm/dd/yyyy", "mm-dd-yyyy", "mm.dd.yyyy", "yyyy mm dd", "yyyy-mm-dd", "yyyy.mm.dd"], d = 0; d < c.length; d++)b += '<ib-div><input type="radio" id="ib_date_format_radio' + d + '" name="ib_date_format_choice" value="' + c[d] + '"><label for="ib_date_format_radio' + d + '">' + c[d] + "</label></ib-div>";
        var e = $('<ib-div class="ib_date_format">' + b + "</ib-div>").hover(function () {
            $(this).show()
        }, function () {
            $(this).hide()
        });
        $(document.body).after(e), $('[data-ibcl-id="issue_date"]').datepicker({format: a.date_format}).data("datepicker"), $('[data-ibcl-id="due_date"]').datepicker({
            format: a.date_format,
            onRender: function (a) {
                return _.setHours(0, 0, 0, 0), a.valueOf() < _.valueOf() ? "disabled" : ""
            }
        }).data("datepicker"), $('[data-ibcl-id="issue_date"], [data-ibcl-id="due_date"]').on("changeDate", function (b) {
            if ("days" == b.viewMode) {
                $(this).text($(this).data("date"));
                var c = parseInt(a["{net_term}"].default_text) || 0;
                isNaN(parseInt($('[data-ibcl-id="net_term"]').text())) || (c = parseInt($('[data-ibcl-id="net_term"]').text())), "issue_date" == $(this).data("ibcl-id") ? (_ = new Date(b.date), JSON.parse(a.auto_calculate_dates) && (ab = new Date(b.date.setDate(_.getDate() + c)), $('[data-ibcl-id="due_date"]').datepicker("setValue", ab).text($('[data-ibcl-id="due_date"]').data("date")), $('[data-ibcl-id="issue_date"]').datepicker("setValue", _).text($('[data-ibcl-id="issue_date"]').data("date")), $('[data-ibcl-id="issue_date"], [data-ibcl-id="due_date"]').removeClass("ib_stop_animate").addClass("ib_highlight_bg"), setTimeout(function () {
                    $('[data-ibcl-id="issue_date"], [data-ibcl-id="due_date"]').removeClass("ib_highlight_bg")
                }, 10))) : "due_date" == $(this).data("ibcl-id") && (ab = new Date(b.date), JSON.parse(a.auto_calculate_dates) && (c = Math.ceil(Math.abs((ab.getTime() - _.getTime()) / 864e5)), $('[data-ibcl-id="net_term"]').text(c), $('[data-ibcl-id="net_term"], [data-ibcl-id="due_date"]').removeClass("ib_stop_animate").addClass("ib_highlight_bg"), setTimeout(function () {
                    $('[data-ibcl-id="net_term"], [data-ibcl-id="due_date"]').removeClass("ib_highlight_bg")
                }, 10))), $(this).datepicker("hide")
            }
        }).hover(function () {
            var a = $(this).offset(), b = $(this).width();
            e.show().offset({top: a.top - 5, left: a.left + b})
        }, function () {
            e.hide()
        }), e.find("input:radio").val([a.date_format]).change(function () {
            a.date_format = $(this).val(), $('[data-ibcl-id="issue_date"], [data-ibcl-id="due_date"]').datepicker("setFormat", a.date_format), $('[data-ibcl-id="issue_date"]').datepicker("setValue", _).text($('[data-ibcl-id="issue_date"]').data("date")), $('[data-ibcl-id="due_date"]').datepicker("setValue", ab).text($('[data-ibcl-id="due_date"]').data("date"))
        })
    }, ob = function () {
        var b = parseInt(a["{net_term}"].default_text) || 0;
        isNaN(parseInt($('[data-ibcl-id="net_term"]').text())) || (b = parseInt($('[data-ibcl-id="net_term"]').text())), JSON.parse(a.auto_calculate_dates) && (ab = new Date(new Date(_).setDate(_.getDate() + b)), $('[data-ibcl-id="due_date"]').datepicker("setValue", ab).text($('[data-ibcl-id="due_date"]').data("date")))
    }, pb = [], qb = "$", rb = "left", sb = "0,000.00", tb = ".", ub = "Afghan afghani,Ř,AFN,255;Albanian lek,L,ALL,255;Algerian dinar,ŘŻ.ŘŹ,DZD,255;Angolan kwanza,Kz,AOA,255;Argentine peso,$,ARS,255;Armenian dram,Ő¤Ö.,AMD,255;Aruban florin,Ć,AWG,255;Australian dollar,$,AUD,3;Azerbaijani manat,man.,AZN,255;Bahamian dollar,$,BSD,255;Bahraini dinar,.ŘŻ.Ř¨,BHD,255;Bangladeshi taka,ŕ§ł,BDT,255;Barbadian dollar,$,BBD,255;Belarusian ruble,Br,BYR,255;Belize dollar,$,BZD,255;Bermudian dollar,$,BMD,255;Bhutanese ngultrum,Nu.,BTN,255;Bolivian boliviano,Bs.,BOB,255;Bosnia and Herzegovina convertible mark,KM,BAM,255;Botswana pula,P,BWP,255;Brazilian real,R$,BRL,255;British pound,ÂŁ,GBP,5;Brunei dollar,$,BND,255;Bulgarian lev,ĐťĐ˛,BGN,255;Burundian franc,Fr,BIF,255;Cambodian riel,á,KHR,255;Canadian dollar,$,CAD,2;Cape Verdean escudo,$,CVE,255;Cayman Islands dollar,$,KYD,255;Central African CFA franc,Fr,XAF,255;CFP franc,Fr,XPF,255;Chilean peso,$,CLP,255;Chinese yuan,ÂĽ,CNY,255;Colombian peso,$,COP,255;Comorian franc,Fr,KMF,255;Congolese franc,Fr,CDF,255;Costa Rican colĂłn,âĄ,CRC,255;Croatian kuna,kn,HRK,255;Cuban convertible peso,$,CUC,255;Cuban peso,$,CUP,255;Czech koruna,KÄ,CZK,255;Danish krone,kr,DKK,255;Djiboutian franc,Fr,DJF,255;Dominican peso,$,DOP,255;East Caribbean dollar,$,XCD,255;Egyptian pound,ÂŁ,EGP,255;Eritrean nakfa,Nfk,ERN,255;Estonian kroon[B],kr,EEK,255;Ethiopian birr,Br,ETB,255;Euro,âŹ,EUR,4;Falkland Islands pound,ÂŁ,FKP,255;Fijian dollar,$,FJD,255;Gambian dalasi,D,GMD,255;Georgian lari,á,GEL,255;Ghanaian cedi,âľ,GHS,255;Gibraltar pound,ÂŁ,GIP,255;Guatemalan quetzal,Q,GTQ,255;Guinean franc,Fr,GNF,255;Guyanese dollar,$,GYD,255;Haitian gourde,G,HTG,255;Honduran lempira,L,HNL,255;Hong Kong dollar,$,HKD,255;Hungarian forint,Ft,HUF,255;Icelandic krĂłna,kr,ISK,255;Indian rupee,â¨,INR,255;Indonesian rupiah,Rp,IDR,255;Iranian rial,ďˇź,IRR,255;Iraqi dinar,Řš.ŘŻ,IQD,255;Israeli new shekel,âŞ,ILS,255;Jamaican dollar,$,JMD,255;Japanese yen,ÂĽ,JPY,255;Jordanian dinar,ŘŻ.Ř§,JOD,255;Kazakhstani tenge,â¸,KZT,255;Kenyan shilling,Sh,KES,255;Kuwaiti dinar,ŘŻ.Ů,KWD,255;Kyrgyzstani som,ĐťĐ˛,KGS,255;Lao kip,â­,LAK,255;Latvian lats,Ls,LVL,255;Lebanese pound,Ů.Ů,LBP,255;Lesotho loti,L,LSL,255;Liberian dollar,$,LRD,255;Libyan dinar,Ů.ŘŻ,LYD,255;Lithuanian litas,Lt,LTL,255;Macanese pataca,P,MOP,255;Macedonian denar,Đ´ĐľĐ˝,MKD,255;Malagasy ariary,Ar,MGA,255;Malawian kwacha,MK,MWK,255;Malaysian ringgit,RM,MYR,255;Maldivian rufiyaa,Ţ.,MVR,255;Mauritanian ouguiya,UM,MRO,255;Mauritian rupee,â¨,MUR,255;Mexican peso,$,MXN,255;Moldovan leu,L,MDL,255;Mongolian tĂśgrĂśg,âŽ,MNT,255;Moroccan dirham,ŘŻ.Ů.,MAD,255;Mozambican metical,MTn,MZN,255;Myanma kyat,K,MMK,255;Namibian dollar,$,NAD,255;Nepalese rupee,â¨,NPR,255;Netherlands Antillean guilder,Ć,ANG,255;New Taiwan dollar,$,TWD,255;New Zealand dollar,$,NZD,255;Nicaraguan cĂłrdoba,C$,NIO,255;Nigerian naira,âŚ,NGN,255;North Korean won,âŠ,KPW,255;Norwegian krone,kr,NOK,255;Omani rial,Řą.Řš.,OMR,255;Pakistani rupee,â¨,PKR,255;Panamanian balboa,B/.,PAB,255;Papua New Guinean kina,K,PGK,255;Paraguayan guaranĂ­,â˛,PYG,255;Peruvian nuevo sol,S/.,PEN,255;Philippine peso,âą,PHP,255;Polish zĹoty,zĹ,PLN,255;Qatari riyal,Řą.Ů,QAR,255;Romanian leu,L,RON,255;Russian ruble,Ń.,RUB,255;Rwandan franc,Fr,RWF,255;Saint Helena pound,ÂŁ,SHP,255;Salvadoran colĂłn,âĄ,SVC,255;Samoan tala,T,WST,255;SĂŁo TomĂŠ and PrĂ­ncipe dobra,Db,STD,255;Saudi riyal,Řą.Řł,SAR,255;Serbian dinar,din.,RSD,255;Seychellois rupee,â¨,SCR,255;Sierra Leonean leone,Le,SLL,255;Singapore dollar,$,SGD,255;Solomon Islands dollar,$,SBD,255;Somali shilling,Sh,SOS,255;South African rand,R,ZAR,255;South Korean won,âŠ,KRW,255;Sri Lankan rupee,Rs,LKR,255;Sudanese pound,ÂŁ,SDG,255;Surinamese dollar,$,SRD,255;Swazi lilangeni,L,SZL,255;Swedish krona,kr,SEK,255;Swiss franc,Fr,CHF,255;Syrian pound,ÂŁ,SYP,255;Tajikistani somoni,ĐĐ,TJS,255;Tanzanian shilling,Sh,TZS,255;Thai baht,ŕ¸ż,THB,255;Tongan paĘťanga,T$,TOP,255;Trinidad and Tobago dollar,$,TTD,255;Tunisian dinar,ŘŻ.ŘŞ,TND,255;Turkish lira,TL,TRY,255;Turkmenistani manat,m,TMT,255;Ugandan shilling,Sh,UGX,255;Ukrainian hryvnia,â´,UAH,255;United Arab Emirates dirham,ŘŻ.ŘĽ,AED,255;United States dollar,$,USD,1;Uruguayan peso,$,UYU,255;Uzbekistani som,ĐťĐ˛,UZS,255;Vanuatu vatu,Vt,VUV,255;Venezuelan bolĂ­var,Bs F,VEF,255;Vietnamese Äáťng,âŤ,VND,255;West African CFA franc,Fr,XOF,255;Yemeni rial,ďˇź,YER,255;Zambian kwacha,ZK,ZMK,255;Zimbabwean dollar,$,ZWL,255", vb = function () {
        $.each(ub.split(";"), function (a, b) {
            var c = b.split(",");
            pb.push({name: c[0], symbol: c[1], code: c[2], priority: c[3]})
        })
    }, wb = function () {
        var a = $('<ib-span class="ib_number_settings"><table><tr><td><input type="radio" id="ib_currency_left" name="ib_currency" value="left" checked /><label for="ib_currency_left" title="Show currency on left">$100</label></td><td><input type="radio" id="ib_number_format_1" name="ib_number_format" value="0,000.00" checked /><label for="ib_number_format_1">1,234.56</label></td></tr><tr><td><input type="radio" id="ib_currency_right" name="ib_currency" value="right" /><label for="ib_currency_right" title="Show currency on right">100$</label></td><td><input type="radio" id="ib_number_format_2" name="ib_number_format" value="0000.00" /><label for="ib_number_format_2">1234.56</label></td></tr><tr><td></td><td><input type="radio" id="ib_number_format_3" name="ib_number_format" value="0.000,00" /><label for="ib_number_format_3">1.234,56</label></td></tr><tr><td></td><td><input type="radio" id="ib_number_format_4" name="ib_number_format" value="0000,00" /><label for="ib_number_format_4">1234,56</label></td></tr></table></ib-span>').hover(function () {
            $(this).show()
        }, function () {
            $(this).hide()
        });
        $(document.body).after(a), $('[data-ibcl-id="currency"]').typeahead({
            source: function (a, b) {
                ib_currencies_combo = [], $.each(pb, function (a, b) {
                    ib_currencies_combo.push("<ib-span data-code='" + b.code + "' data-symbol='" + b.symbol + '\' class="ib_currencies_item"><ib-span>' + b.code + "</ib-span><ib-span>" + b.symbol + "</ib-span><ib-span>" + b.name + "</ib-span></ib-span>")
                }), b(ib_currencies_combo)
            }, updater: function (a) {
                return qb = $(a).data("symbol"), db(), $(a).data("code")
            }, matcher: function (a) {
                return -1 != $(a).text().toLowerCase().indexOf(this.query.trim().toLowerCase()) ? !0 : void 0
            }, sorter: function (a) {
                return a.sort()
            }, highlighter: function (a) {
                var b = $(a).children(":first").text(), c = $(a).children(":nth(1)").text(), d = $(a).children(":last").text(), e = $(a).text("").prop("outerHTML"), f = new RegExp("(" + this.query + ")", "gi"), g = '<strong style="font-weight:bold;">$1</strong>';
                return $(e).html($("<ib-span />").html(b.replace(f, g)).prop("outerHTML") + $("<ib-span />").html(c.replace(f, g)).prop("outerHTML") + $("<ib-span />").html(d.replace(f, g)).prop("outerHTML")).prop("outerHTML")
            }
        }).blur(function () {
            var a = $(this), b = $(this).text().toUpperCase();
            qb = "", a.text(b), $.each(pb, function (c, d) {
                return d.code.toUpperCase() == b ? (a.text(d.code), qb = d.symbol, void db()) : void 0
            })
        }).hover(function () {
            var b = $(this).offset(), c = $(this).width();
            a.show().offset({top: b.top - 5, left: b.left + c + 1})
        }, function () {
            a.hide()
        }), $('[name="ib_currency"][value="' + rb + '"]').attr("checked", "checked"), $('[name="ib_number_format"][value="' + sb + '"]').attr("checked", "checked"), $('[name="ib_currency"]').change(function () {
            rb = $(this).val(), db()
        }), $('[name="ib_number_format"]').change(function () {
            sb = $(this).val(), sb && (tb = sb[sb.length - 3]);
            for (var a = $('[data-iterate="item"]'), b = 0; b < a.length; b++) {
                var c = $(a[b]);
                c.find('[data-ibcl-id="item_quantity"]').text(c.find('[data-ibcl-id="item_quantity"]').text().replace(/[.,]/g, tb)), c.find('[data-ibcl-id="item_price"]').text(c.find('[data-ibcl-id="item_price"]').text().replace(/[.,]/g, tb)), c.find('[data-ibcl-id="item_discount"]').text(c.find('[data-ibcl-id="item_discount"]').text().replace(/[.,]/g, tb)), c.find('[data-ibcl-id="item_tax"]').text(c.find('[data-ibcl-id="item_tax"]').text().replace(/[.,]/g, tb))
            }
            db()
        })
    }, xb = function () {
        var b = {
            hash: "",
            type: "invoice",
            company_logo: "",
            company_name: "",
            company_address: "",
            company_city_zip_state: "",
            company_phone_fax: "",
            company_email_web: "",
            payment_info1: "",
            payment_info2: "",
            payment_info3: "",
            payment_info4: "",
            payment_info5: "",
            issue_date_label: "",
            issue_date: "",
            net_term_label: "",
            net_term: "0",
            due_date_label: "",
            due_date: "",
            currency_label: "",
            po_number_label: "",
            po_number: "",
            bill_to_label: "",
            client_name: "",
            client_address: "",
            client_city_zip_state: "",
            client_phone_fax: "",
            client_email: "",
            client_other: "",
            invoice_title: "",
            invoice_number: "",
            item_row_number_label: "",
            item_description_label: "",
            item_quantity_label: "",
            item_price_label: "",
            item_discount_label: "",
            item_tax_label: "",
            item_line_total_label: "",
            amount_subtotal_label: "",
            amount_subtotal: "0",
            amount_total_label: "",
            amount_total: "0",
            amount_paid_label: "",
            amount_paid: "0",
            amount_due_label: "",
            amount_due: "0",
            terms_label: "",
            terms: "",
            items_columns: [],
            items: [],
            taxes: [],
            date_format: "",
            currency_code: "",
            currency_symbol: "",
            currency_position: "",
            number_format: "",
            document_custom: [],
            client_custom: []
        };
        b.hash = $('meta[name="template-hash"]').attr("content") || b.hash, b.type = $('meta[name="document-type"]').attr("content") || b.type, $('[data-logo="company_logo"]').is(":visible") && (b.company_logo = $('[data-logo="company_logo"]').attr("src") || b.company_logo), $("[data-ibcl-id]").each(function (a, c) {
            var d = $(c);
            b[d.data("ibcl-id")] = A(z(d.html())) || b[d.data("ibcl-id")]
        }), b.net_term || (b.net_term = Math.floor(Math.abs((ab.getTime() - _.getTime()) / 864e5))), $(".ib_show_hide_columns > ib-span > input:checkbox").each(function (a, c) {
            $(c).is(":checked") && b.items_columns.push($(c).val())
        }), delete b.item_row_number, delete b.item_description, delete b.item_quantity, delete b.item_price, delete b.item_discount, delete b.item_tax, delete b.item_line_total, $('[data-iterate="item"]').each(function (a, c) {
            var d = {};
            $(c).find("*").each(function (a, b) {
                var c = $(b);
                c.data("ibcl-id") && -1 != ["item_row_number", "item_description", "item_quantity", "item_price", "item_tax_percentage", "item_tax", "item_discount", "item_line_total"].indexOf(c.data("ibcl-id")) && (!c.data("ibcl-id") && x() && (c = c.find(".ibcl_ie_contenteditable")), d[c.data("ibcl-id")] = A(z(c.html())))
            }), d.item_row_number = $(d.item_row_number).text(), d.item_quantity = d.item_quantity.getNumber(), d.item_price = d.item_price.getNumber(), d.item_tax_percentage = d.item_tax.getNumber(), d.item_tax = Z(d.item_tax.getNumber()), d.item_discount = d.item_discount.getNumber(), d.item_line_total = d.item_line_total.getNumber(), b.items.push(d)
        }), delete b.tax_name, delete b.tax_value, $('[data-iterate="tax"]:visible').each(function (a, c) {
            var d = {};
            $(c).find("*").each(function (a, b) {
                var c = $(b);
                c.data("ibcl-id") && -1 != ["tax_name", "tax_value"].indexOf(c.data("ibcl-id")) && (!c.data("ibcl-id") && x() && (c = c.find(".ibcl_ie_contenteditable")), d[c.data("ibcl-id")] = A(z(c.html())), c.attr("data-ib-value") && (d.tax_percentage = c.attr("data-ib-value").getNumber()))
            }), d.tax_value = d.tax_value.getNumber(), b.taxes.push(d)
        }), b.amount_subtotal = b.amount_subtotal.getNumber(), b.amount_total = b.amount_total.getNumber(), b.amount_paid = b.amount_paid.getNumber(), b.amount_due = b.amount_due.getNumber(), b.date_format = a.date_format, b.currency_code = b.currency, b.currency_symbol = qb, delete b.currency, b.currency_position = $('.ib_number_settings input[name="ib_currency"]:checked').val(), b.number_format = $('.ib_number_settings input[name="ib_number_format"]:checked').val();
        for (var c in b)/document_custom_[a-zA-Z0-9_]+/.test(c) ? (b.document_custom.push({
            name: c.replace(/document_custom_([a-zA-Z0-9_]+)/, "$1"),
            type: "constant",
            value: b[c]
        }), delete b[c]) : /client_custom_[a-zA-Z0-9_]+/.test(c) && (b.client_custom.push({
            name: c.replace(/client_custom_([a-zA-Z0-9_]+)/, "$1"),
            value: b[c]
        }), delete b[c]);
        return b
    }, yb = !1, zb = function () {
        if (!yb) {
            yb = !0, $(this).addClass("ib_disabled_button").attr("disabled", "disabled").find("i.fa").removeClass("fa-cloud-upload").addClass("fa-spinner fa-spin");
            var a = $("<div />").text(JSON.stringify(xb())).html().replace(/"/gi, "&quot;");
            g += f + "&utm_term=" + encodeURIComponent(document.title), $('<form id="ib_save_tamplate_form" style="display:none !important;" action="' + g + '" method="POST" />').append($('<input type="hidden" name="invoice_data" value="' + a + '" />')).appendTo($(document.body)).submit()
        }
    }, Ab = function () {
        var b, c = "var ib_invoice_data = function(){/*[crlf]#=========================================================================================================[crlf][crlf][crlf]### Company data[crlf][crlf][{company_name}][crlf]|company_name|[crlf][crlf][{company_address}][crlf]|company_address|[crlf][crlf][{company_city_zip_state}][crlf]|company_city_zip_state|[crlf][crlf][{company_phone_fax}][crlf]|company_phone_fax|[crlf][crlf][{company_email_web}][crlf]|company_email_web|[crlf][crlf][{payment_info1}][crlf]|payment_info1|[crlf][crlf][{payment_info2}][crlf]|payment_info2|[crlf][crlf][{payment_info3}][crlf]|payment_info3|[crlf][crlf][{payment_info4}][crlf]|payment_info4|[crlf][crlf][{payment_info5}][crlf]|payment_info5|[crlf][crlf][{issue_date_label}][crlf]|issue_date_label|[crlf][crlf][{issue_date}][crlf]|issue_date|[crlf][crlf][{net_term_label}][crlf]|net_term_label|[crlf][crlf][{net_term}][crlf]|net_term|[crlf][crlf][{due_date_label}][crlf]|due_date_label|[crlf][crlf][{due_date}][crlf]|due_date|[crlf][crlf][{currency_label}][crlf]|currency_label|[crlf][crlf][{currency}][crlf]|currency|[crlf][crlf][{po_number_label}][crlf]|po_number_label|[crlf][crlf][{po_number}][crlf]|po_number|[crlf][crlf][{bill_to_label}][crlf]|bill_to_label|[crlf][crlf][{client_name}][crlf]|client_name|[crlf][crlf][{client_address}][crlf]|client_address|[crlf][crlf][{client_city_zip_state}][crlf]|client_city_zip_state|[crlf][crlf][{client_phone_fax}][crlf]|client_phone_fax|[crlf][crlf][{client_email}][crlf]|client_email|[crlf][crlf][{client_other}][crlf]|client_other|[crlf][crlf][{invoice_title}][crlf]|invoice_title|[crlf][crlf][{invoice_number}][crlf]|invoice_number|[crlf][crlf][{item_row_number_label}][crlf]|item_row_number_label|[crlf][crlf][{item_description_label}][crlf]|item_description_label|[crlf][crlf][{item_quantity_label}][crlf]|item_quantity_label|[crlf][crlf][{item_price_label}][crlf]|item_price_label|[crlf][crlf][{item_discount_label}][crlf]|item_discount_label|[crlf][crlf][{item_tax_label}][crlf]|item_tax_label|[crlf][crlf][{item_line_total_label}][crlf]|item_line_total_label|[crlf][crlf][{item_row_number}][crlf]|item_row_number|[crlf][crlf][{item_description}][crlf]|item_description|[crlf][crlf][{item_quantity}][crlf]|item_quantity|[crlf][crlf][{item_price}][crlf]|item_price|[crlf][crlf][{item_discount}][crlf]|item_discount|[crlf][crlf][{item_tax}][crlf]|item_tax|[crlf][crlf][{item_line_total}][crlf]|item_line_total|[crlf][crlf][{amount_subtotal_label}][crlf]|amount_subtotal_label|[crlf][crlf][{amount_subtotal}][crlf]|amount_subtotal|[crlf][crlf][{tax_name}][crlf]|tax_name|[crlf][crlf][{tax_value}][crlf]|tax_value|[crlf][crlf][{amount_total_label}][crlf]|amount_total_label|[crlf][crlf][{amount_total}][crlf]|amount_total|[crlf][crlf][{amount_paid_label}][crlf]|amount_paid_label|[crlf][crlf][{amount_due_label}][crlf]|amount_due_label|[crlf][crlf][{amount_due}][crlf]|amount_due|[crlf][crlf][{terms_label}][crlf]|terms_label|[crlf][crlf][{terms}][crlf]|terms|[crlf][crlf][crlf]### Settings[crlf][crlf]# One of \'dd/mm/yyyy\', \'dd-mm-yyyy\', \'dd.mm.yyyy\', \'mm/dd/yyyy\', \'mm-dd-yyyy\', \'mm.dd.yyyy\', \'yyyy mm dd\', \'yyyy-mm-dd\', \'yyyy.mm.dd\'[crlf][date_format][crlf]|date_format|[crlf][crlf]# One of \'left\' or \'right\'[crlf][currency_position][crlf]|currency_position|[crlf][crlf]# One of \'0,000.00\', \'0000.00\', \'0.000,00\', or \'0000,00\'[crlf][number_format][crlf]|number_format|[crlf][crlf][default_columns][crlf]|default_columns|[crlf][crlf][default_quantity][crlf]|default_quantity|[crlf][crlf][default_price][crlf]|default_price|[crlf][crlf][default_discount][crlf]|default_discount|[crlf][crlf][default_tax][crlf]|default_tax|[crlf][crlf][default_number_rows][crlf]|default_number_rows|[crlf][crlf][auto_calculate_dates][crlf]|auto_calculate_dates|[crlf][crlf][load_items][crlf]|load_items|[crlf][crlf][invoicebus_fineprint][crlf]|invoicebus_fineprint|[crlf][crlf][crlf]### Items (in this order item_description@||@item_quantity@||@item_price@||@item_discount@||@item_tax)[crlf][crlf][items][crlf]|items|[crlf][crlf][crlf]### Custom data (in format field_name@||@field_value)[crlf][crlf]# Document custom data[crlf][document_custom][crlf]|document_custom|[crlf][crlf]# Client custom data[crlf][client_custom][crlf]|client_custom|[crlf][crlf][crlf]### Logo[crlf][crlf]#base64 encoded data URI of PNG image[crlf][{company_logo}][crlf]|company_logo|[crlf][crlf][crlf][crlf][crlf]#=========================================================================================================[crlf]*/}[crlf]", d = xb();
        c = c.replace("|item_row_number|", a["{item_row_number}"].default_text), c = c.replace("|item_description|", a["{item_description}"].default_text), c = c.replace("|item_quantity|", a["{item_quantity}"].default_text), c = c.replace("|item_price|", a["{item_price}"].default_text), c = c.replace("|item_discount|", a["{item_discount}"].default_text), c = c.replace("|item_tax|", a["{item_tax}"].default_text), c = c.replace("|item_line_total|", a["{item_line_total}"].default_text), c = c.replace("|tax_name|", a["{tax_name}"].default_text), c = c.replace("|tax_value|", a["{tax_value}"].default_text), c = c.replace("|amount_total|", a["{amount_total}"].default_text), c = c.replace("|amount_due|", a["{amount_due}"].default_text), c = c.replace("|default_quantity|", a.default_quantity), c = c.replace("|default_price|", a.default_price), c = c.replace("|default_discount|", a.default_discount), c = c.replace("|default_tax|", a.default_tax), c = c.replace("|default_number_rows|", a.default_number_rows), c = c.replace("|auto_calculate_dates|", a.auto_calculate_dates), c = c.replace("|load_items|", a.load_items), c = c.replace("|invoicebus_fineprint|", a.invoicebus_fineprint);
        for (var e in d) {
            var f = "|" + e + "|", g = d[e].toString().replace(/\n/g, "<br />");
            switch (e) {
                case"issue_date":
                case"due_date":
                    c = c.replace(f, "");
                    break;
                case"items_columns":
                    c = c.replace("|default_columns|", d[e].join(","));
                    break;
                case"items":
                    g = "";
                    var h = d[e];
                    for (b = 0; b < h.length; b++)g += (h[b].item_description || "").toString().replace(/\n/g, "<br />") + "@||@" + (h[b].item_quantity || "").toString().replace(/\n/g, "<br />") + "@||@" + (h[b].item_price || "").toString().replace(/\n/g, "<br />") + "@||@" + (h[b].item_discount || "").toString().replace(/\n/g, "<br />") + "@||@" + (h[b].item_tax_percentage || "").toString().replace(/\n/g, "<br />") + "\r\n";
                    c = c.replace(f, g);
                    break;
                case"currency_code":
                    c = c.replace("|currency|", g);
                    break;
                case"document_custom":
                case"client_custom":
                    g = "";
                    var i = d[e];
                    for (b = 0; b < i.length; b++)g += (i[b].name || "").toString().replace(/\n/g, "<br />") + "@||@" + (i[b].value || "").toString().replace(/\n/g, "<br />") + "\r\n";
                    c = c.replace(f, g);
                    break;
                default:
                    c = c.replace(f, g)
            }
        }
        return c = c.replace(/\[crlf\]/g, "\r\n")
    }, Bb = function () {
        var a = "".replace(/\[crlf\]/g, "\r\n");
        a && $(document.body).before($(a))
    }, Cb = function (a, b) {
        for (var c = b || window.location.search.substring(1), d = c.split("&"), e = 0; e < d.length; e++) {
            var f = d[e].split("=");
            if (f[0] == a)return f[1]
        }
        return !1
    };
    p(j);
    var Db = F(), Eb = Cb("data", Db);
    if (Eb) {
        var Fb = document.createElement("script");
        Fb.onerror = function () {
            Fb = document.createElement("script"), Fb.src = "data.js", document.body.appendChild(Fb)
        }, Fb.src = "data.txt", document.body.appendChild(Fb)
    }
    q(function () {
        s()
    })
}();
var ib_TableDnD = function (a) {
    var b = null;
    this.dragObject = null, this.mouseOffset = null, this.oldY = 0, this.init = function () {
        for (var a = $('[data-iterate="item"]'), c = 0; c < a.length; c++)this.makeDraggable(a[c]);
        document.onmousemove = function (a) {
            if (b && b.dragObject) {
                a = a || window.event;
                var c = b.mouseCoords(a), d = c.y;
                if (d != b.oldY) {
                    var e = d > b.oldY;
                    b.oldY = d, $(b.dragObject).addClass("ib_dragrow"), document.body.style.cursor = "move";
                    var f = b.findDropTargetRow(d);
                    f && (e && b.dragObject != f ? b.dragObject.parentNode.insertBefore(b.dragObject, f.nextSibling) : e || b.dragObject == f || b.dragObject.parentNode.insertBefore(b.dragObject, f))
                }
                return !1
            }
        }, document.onmouseup = function () {
            if (b && b.dragObject) {
                var a = b.dragObject;
                $(b.dragObject).removeClass("ib_dragrow"), b.dragObject = null, b.onDrop(a), b = null
            }
        }
    }, this.onDrop = function () {
        document.body.style.cursor = "default", a()
    };
    var c = function () {
        var a = 0, b = 0;
        return "number" == typeof window.pageYOffset ? (b = window.pageYOffset, a = window.pageXOffset) : document.body && (document.body.scrollLeft || document.body.scrollTop) ? (b = document.body.scrollTop, a = document.body.scrollLeft) : document.documentElement && (document.documentElement.scrollLeft || document.documentElement.scrollTop) && (b = document.documentElement.scrollTop, a = document.documentElement.scrollLeft), [a, b]
    };
    this.mouseCoords = function (a) {
        return a.pageX || a.pageY ? {x: a.pageX, y: a.pageY} : {x: a.clientX + c()[0], y: a.clientY + c()[1]}
    }, this.getMouseOffset = function (a, b) {
        e = b || window.event;
        var c = $(a).offset(), d = this.mouseCoords(e);
        return {x: d.x - c.left, y: d.y - c.top}
    };
    var d = function (a) {
        return window.event ? (a = window.event, a.srcElement) : a.target
    };
    this.makeDraggable = function (a) {
        if (a) {
            var c = this;
            $(a).find(".ib_move").on("mousedown", function (e) {
                var f = d(e);
                return "INPUT" == f.tagName || "SELECT" == f.tagName || "TEXTAREA" == f.tagName ? !0 : (b = c, c.dragObject = a, c.mouseOffset = c.getMouseOffset(a, e), !1)
            }), $(a).find(".ib_move").css("cursor", "move")
        }
    }, this.findDropTargetRow = function (a) {
        for (var b = $('[data-iterate="item"]'), c = 0; c < b.length; c++) {
            var d = b[c], e = $(d).offset().top, f = parseInt(d.offsetHeight);
            if (0 === d.offsetHeight && (e = $(d.firstChild).offset().top, f = parseInt(d.firstChild.offsetHeight)), a > e - f && e + f > a)return d
        }
        return null
    }
}, ib_loadBootstrapDatepicker = function () {
    var a = function (a, c) {
        if (this.element = $(a), this.format = b.parseFormat(c.format || this.element.data("date-format") || "mm/dd/yyyy"), this.picker = $(b.template).appendTo("body").on({click: $.proxy(this.click, this)}), this.isInput = this.element.is("input"), this.component = this.element.is(".date") ? this.element.find(".add-on") : !1, this.isInput ? this.element.on({
                focus: $.proxy(this.show, this),
                keyup: $.proxy(this.update, this)
            }) : this.component ? this.component.on("click", $.proxy(this.show, this)) : this.element.on("click", $.proxy(this.show, this)), this.minViewMode = c.minViewMode || this.element.data("date-minviewmode") || 0, "string" == typeof this.minViewMode)switch (this.minViewMode) {
            case"months":
                this.minViewMode = 1;
                break;
            case"years":
                this.minViewMode = 2;
                break;
            default:
                this.minViewMode = 0
        }
        if (this.viewMode = c.viewMode || this.element.data("date-viewmode") || 0, "string" == typeof this.viewMode)switch (this.viewMode) {
            case"months":
                this.viewMode = 1;
                break;
            case"years":
                this.viewMode = 2;
                break;
            default:
                this.viewMode = 0
        }
        this.startViewMode = this.viewMode, this.weekStart = c.weekStart || this.element.data("date-weekstart") || 0, this.weekEnd = 0 === this.weekStart ? 6 : this.weekStart - 1, this.onRender = c.onRender, this.fillDow(), this.fillMonths(), this.update(), this.showMode()
    };
    a.prototype = {
        constructor: a, show: function (a) {
            this.picker.show(), this.height = this.component ? this.component.outerHeight() : this.element.outerHeight(), this.place(), $(window).on("resize", $.proxy(this.place, this)), a && (a.stopPropagation(), a.preventDefault()), !this.isInput;
            var b = this;
            $(document).on("mousedown", function (a) {
                0 === $(a.target).closest(".datepicker").length && b.hide()
            }), this.element.trigger({type: "show", date: this.date}), this.fill()
        }, hide: function () {
            this.picker.hide(), $(window).off("resize", this.place), this.viewMode = this.startViewMode, this.showMode(), this.isInput || $(document).off("mousedown", this.hide), this.element.trigger({
                type: "hide",
                date: this.date
            })
        }, set: function () {
            var a = b.formatDate(this.date, this.format);
            this.isInput ? this.element.prop("value", a) : (this.component && this.element.find("input").prop("value", a), this.element.data("date", a))
        }, setValue: function (a) {
            this.date = "string" == typeof a ? b.parseDate(a, this.format) : new Date(a), this.set(), this.viewDate = new Date(this.date.getFullYear(), this.date.getMonth(), 1, 0, 0, 0, 0), this.fill()
        }, setFormat: function (a) {
            this.format = b.parseFormat(a);
            var c = b.formatDate(this.date, this.format);
            this.isInput ? this.element.prop("value", c) : (this.component && this.element.find("input").prop("value", c), this.element.data("date", c)), this.set(), this.viewDate = new Date(this.date.getFullYear(), this.date.getMonth(), 1, 0, 0, 0, 0), this.fill()
        }, place: function () {
            var a = this.component ? this.component.offset() : this.element.offset();
            this.picker.css({top: a.top + this.height, left: a.left + this.element.width() / 2})
        }, update: function (a) {
            this.date = b.parseDate("string" == typeof a ? a : this.isInput ? this.element.prop("value") : this.element.data("date"), this.format), this.viewDate = new Date(this.date.getFullYear(), this.date.getMonth(), 1, 0, 0, 0, 0), this.fill()
        }, fillDow: function () {
            for (var a = this.weekStart, c = "<tr>"; a < this.weekStart + 7;)c += '<th class="dow">' + b.dates.daysMin[a++ % 7] + "</th>";
            c += "</tr>", this.picker.find(".datepicker-days thead").append(c)
        }, fillMonths: function () {
            for (var a = "", c = 0; 12 > c;)a += '<ib-span class="month">' + b.dates.monthsShort[c++] + "</ib-span>";
            this.picker.find(".datepicker-months td").append(a)
        }, fill: function () {
            var a = new Date(this.viewDate), c = a.getFullYear(), d = a.getMonth(), e = this.date.valueOf();
            this.picker.find(".datepicker-days th:eq(1)").text(b.dates.months[d] + " " + c);
            var f = new Date(c, d - 1, 28, 0, 0, 0, 0), g = b.getDaysInMonth(f.getFullYear(), f.getMonth());
            f.setDate(g), f.setDate(g - (f.getDay() - this.weekStart + 7) % 7);
            var h = new Date(f);
            h.setDate(h.getDate() + 42), h = h.valueOf();
            for (var i, j, k, l = []; f.valueOf() < h;)f.getDay() === this.weekStart && l.push("<tr>"), i = this.onRender(f), j = f.getFullYear(), k = f.getMonth(), d > k && j === c || c > j ? i += " old" : (k > d && j === c || j > c) && (i += " new"), f.valueOf() === e && (i += " active"), l.push('<td class="day ' + i + '">' + f.getDate() + "</td>"), f.getDay() === this.weekEnd && l.push("</tr>"), f.setDate(f.getDate() + 1);
            this.picker.find(".datepicker-days tbody").empty().append(l.join(""));
            var m = this.date.getFullYear(), n = this.picker.find(".datepicker-months").find("th:eq(1)").text(c).end().find("ib-span").removeClass("active");
            m === c && n.eq(this.date.getMonth()).addClass("active"), l = "", c = 10 * parseInt(c / 10, 10);
            var o = this.picker.find(".datepicker-years").find("th:eq(1)").text(c + "-" + (c + 9)).end().find("td");
            c -= 1;
            for (var p = -1; 11 > p; p++)l += '<ib-span class="year' + (-1 === p || 10 === p ? " old" : "") + (m === c ? " active" : "") + '">' + c + "</ib-span>", c += 1;
            o.html(l)
        }, click: function (a) {
            a.stopPropagation(), a.preventDefault();
            var c = $(a.target).closest("ib-span, td, th");
            if (1 === c.length) {
                var d, e, f;
                switch (c[0].nodeName.toLowerCase()) {
                    case"th":
                        switch (c[0].className) {
                            case"switch":
                                this.showMode(1);
                                break;
                            case"prev":
                            case"next":
                                this.viewDate["set" + b.modes[this.viewMode].navFnc].call(this.viewDate, this.viewDate["get" + b.modes[this.viewMode].navFnc].call(this.viewDate) + b.modes[this.viewMode].navStep * ("prev" === c[0].className ? -1 : 1)), this.fill(), this.set()
                        }
                        break;
                    case"ib-span":
                        c.is(".month") ? (e = c.parent().find("ib-span").index(c), this.viewDate.setMonth(e)) : (f = parseInt(c.text(), 10) || 0, this.viewDate.setFullYear(f)), 0 !== this.viewMode && (this.date = new Date(this.viewDate), this.element.trigger({
                            type: "changeDate",
                            date: this.date,
                            viewMode: b.modes[this.viewMode].clsName
                        })), this.showMode(-1), this.fill(), this.set();
                        break;
                    case"td":
                        c.is(".day") && !c.is(".disabled") && (d = parseInt(c.text(), 10) || 1, e = this.viewDate.getMonth(), c.is(".old") ? e -= 1 : c.is(".new") && (e += 1), f = this.viewDate.getFullYear(), this.date = new Date(f, e, d, 0, 0, 0, 0), this.viewDate = new Date(f, e, Math.min(28, d), 0, 0, 0, 0), this.fill(), this.set(), this.element.trigger({
                            type: "changeDate",
                            date: this.date,
                            viewMode: b.modes[this.viewMode].clsName
                        }))
                }
            }
        }, mousedown: function (a) {
            a.stopPropagation(), a.preventDefault()
        }, showMode: function (a) {
            a && (this.viewMode = Math.max(this.minViewMode, Math.min(2, this.viewMode + a))), this.picker.find(">div").hide().filter(".datepicker-" + b.modes[this.viewMode].clsName).show()
        }
    }, $.fn.datepicker = function (b, c) {
        return this.each(function () {
            var d = $(this), e = d.data("datepicker"), f = "object" == typeof b && b;
            e || d.data("datepicker", e = new a(this, $.extend({}, $.fn.datepicker.defaults, f))), "string" == typeof b && e[b](c)
        })
    }, $.fn.datepicker.defaults = {
        onRender: function () {
            return ""
        }
    }, $.fn.datepicker.Constructor = a;
    var b = {
        modes: [{clsName: "days", navFnc: "Month", navStep: 1}, {
            clsName: "months",
            navFnc: "FullYear",
            navStep: 1
        }, {clsName: "years", navFnc: "FullYear", navStep: 10}],
        dates: {
            days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
            daysShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
            daysMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"],
            months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
            monthsShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
        },
        isLeapYear: function (a) {
            return a % 4 === 0 && a % 100 !== 0 || a % 400 === 0
        },
        getDaysInMonth: function (a, c) {
            return [31, b.isLeapYear(a) ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][c]
        },
        parseFormat: function (a) {
            var b = a.match(/[.\/\-\s].*?/), c = a.split(/\W+/);
            if (!b || !c || 0 === c.length)throw new Error("Invalid date format.");
            return {separator: b, parts: c}
        },
        parseDate: function (a, b) {
            var c, d = a.split(b.separator);
            if (a = new Date, a.setHours(0), a.setMinutes(0), a.setSeconds(0), a.setMilliseconds(0), d.length === b.parts.length) {
                for (var e = a.getFullYear(), f = a.getDate(), g = a.getMonth(), h = 0, i = b.parts.length; i > h; h++)switch (c = parseInt(d[h], 10) || 1, b.parts[h]) {
                    case"dd":
                    case"d":
                        f = c, a.setDate(c);
                        break;
                    case"mm":
                    case"m":
                        g = c - 1, a.setMonth(c - 1);
                        break;
                    case"yy":
                        e = 2e3 + c, a.setFullYear(2e3 + c);
                        break;
                    case"yyyy":
                        e = c, a.setFullYear(c)
                }
                a = new Date(e, g, f, 0, 0, 0)
            }
            return a
        },
        formatDate: function (a, b) {
            var c = {
                d: a.getDate(),
                m: a.getMonth() + 1,
                yy: a.getFullYear().toString().substring(2),
                yyyy: a.getFullYear()
            };
            c.dd = (c.d < 10 ? "0" : "") + c.d, c.mm = (c.m < 10 ? "0" : "") + c.m, a = [];
            for (var d = 0, e = b.parts.length; e > d; d++)a.push(c[b.parts[d]]);
            return a.join(b.separator)
        },
        headTemplate: '<thead><tr><th class="prev">&lsaquo;</th><th colspan="5" class="switch"></th><th class="next">&rsaquo;</th></tr></thead>',
        contTemplate: '<tbody><tr><td colspan="7"></td></tr></tbody>'
    };
    b.template = '<div class="datepicker dropdown-menu"><div class="datepicker-days"><table class=" table-condensed">' + b.headTemplate + '<tbody></tbody></table></div><div class="datepicker-months"><table class="table-condensed">' + b.headTemplate + b.contTemplate + '</table></div><div class="datepicker-years"><table class="table-condensed">' + b.headTemplate + b.contTemplate + "</table></div></div>"
}, ib_loadBootstrapTypeahead = function () {
    "use strict";
    var a = function (a, b) {
        this.$element = $(a), this.options = $.extend({}, $.fn.typeahead.defaults, b), this.matcher = this.options.matcher || this.matcher, this.sorter = this.options.sorter || this.sorter, this.select = this.options.select || this.select, this.autoSelect = "boolean" == typeof this.options.autoSelect ? this.options.autoSelect : !0, this.highlighter = this.options.highlighter || this.highlighter, this.updater = this.options.updater || this.updater, this.source = this.options.source, this.delay = "number" == typeof this.options.delay ? this.options.delay : 250, this.$menu = $(this.options.menu), this.shown = !1, this.listen(), this.showHintOnFocus = "boolean" == typeof this.options.showHintOnFocus ? this.options.showHintOnFocus : !1
    };
    a.prototype = {
        constructor: a, select: function () {
            var a = this.$menu.find(".active").data("value");
            return (this.autoSelect || a) && this.$element.text(this.updater(a)).change(), this.hide()
        }, updater: function (a) {
            return a
        }, setSource: function (a) {
            this.source = a
        }, show: function () {
            var a, b = $.extend({}, this.$element.offset(), {height: this.$element[0].offsetHeight});
            return a = "function" == typeof this.options.scrollHeight ? this.options.scrollHeight.call() : this.options.scrollHeight, this.$menu.appendTo(document.body).css({
                top: b.top + b.height + a,
                left: b.left
            }).show(), this.shown = !0, this
        }, hide: function () {
            return this.$menu.hide(), this.shown = !1, this
        }, lookup: function (a) {
            var b;
            if (this.query = "undefined" != typeof a && null !== a ? a : this.$element.text() || "", this.query.length < this.options.minLength)return this.shown ? this.hide() : this;
            var c = $.proxy(function () {
                b = $.isFunction(this.source) ? this.source(this.query, $.proxy(this.process, this)) : this.source, b && this.process(b)
            }, this);
            clearTimeout(this.lookupWorker), this.lookupWorker = setTimeout(c, this.delay)
        }, process: function (a) {
            var b = this;
            return a = $.grep(a, function (a) {
                return b.matcher(a)
            }), a = this.sorter(a), a.length ? "all" == this.options.items ? this.render(a).show() : this.render(a.slice(0, this.options.items)).show() : this.shown ? this.hide() : this
        }, matcher: function (a) {
            return ~a.toLowerCase().indexOf(this.query.toLowerCase())
        }, sorter: function (a) {
            for (var b, c = [], d = [], e = []; b = a.shift();)b.toLowerCase().indexOf(this.query.toLowerCase()) ? ~b.indexOf(this.query) ? d.push(b) : e.push(b) : c.push(b);
            return c.concat(d, e)
        }, highlighter: function (a) {
            var b = this.query.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&");
            return a.replace(new RegExp("(" + b + ")", "ig"), function (a, b) {
                return "<strong>" + b + "</strong>"
            })
        }, render: function (a) {
            var b = this;
            return a = $(a).map(function (a, c) {
                return a = $(b.options.item).data("value", c), a.find("a").html(b.highlighter(c)), a[0]
            }), this.autoSelect && a.first().addClass("active"), this.$menu.html(a), this
        }, next: function () {
            var a = this.$menu.find(".active").removeClass("active"), b = a.next();
            b.length || (b = $(this.$menu.find("li")[0])), b.addClass("active")
        }, prev: function () {
            var a = this.$menu.find(".active").removeClass("active"), b = a.prev();
            b.length || (b = this.$menu.find("li").last()), b.addClass("active")
        }, listen: function () {
            this.$element.on("focus", $.proxy(this.focus, this)).on("blur", $.proxy(this.blur, this)).on("keypress", $.proxy(this.keypress, this)).on("keyup", $.proxy(this.keyup, this)), this.eventSupported("keydown") && this.$element.on("keydown", $.proxy(this.keydown, this)), this.$menu.on("click", $.proxy(this.click, this)).on("mouseenter", "li", $.proxy(this.mouseenter, this)).on("mouseleave", "li", $.proxy(this.mouseleave, this))
        }, destroy: function () {
            this.$element.data("typeahead", null), this.$element.off("focus").off("blur").off("keypress").off("keyup"), this.eventSupported("keydown") && this.$element.off("keydown"), this.$menu.remove()
        }, eventSupported: function (a) {
            var b = a in this.$element;
            return b || (this.$element.setAttribute(a, "return;"), b = "function" == typeof this.$element[a]), b
        }, move: function (a) {
            if (this.shown) {
                switch (a.keyCode) {
                    case 9:
                    case 13:
                    case 27:
                        a.preventDefault();
                        break;
                    case 38:
                        a.preventDefault(), this.prev();
                        break;
                    case 40:
                        a.preventDefault(), this.next()
                }
                a.stopPropagation()
            }
        }, keydown: function (a) {
            this.suppressKeyPressRepeat = ~$.inArray(a.keyCode, [40, 38, 9, 13, 27]), this.shown || 40 != a.keyCode ? this.move(a) : this.lookup("")
        }, keypress: function (a) {
            this.suppressKeyPressRepeat || this.move(a)
        }, keyup: function (a) {
            switch (a.keyCode) {
                case 40:
                case 38:
                case 16:
                case 17:
                case 18:
                    break;
                case 9:
                case 13:
                    if (!this.shown)return;
                    this.select();
                    break;
                case 27:
                    if (!this.shown)return;
                    this.hide();
                    break;
                default:
                    this.lookup()
            }
            a.stopPropagation(), a.preventDefault()
        }, focus: function () {
            this.focused || (this.focused = !0, (0 === this.options.minLength && !this.$element.text() || this.options.showHintOnFocus) && this.lookup())
        }, blur: function () {
            this.focused = !1, !this.mousedover && this.shown && this.hide()
        }, click: function (a) {
            a.stopPropagation(), a.preventDefault(), this.select(), this.$element.focus()
        }, mouseenter: function (a) {
            this.mousedover = !0, this.$menu.find(".active").removeClass("active"), $(a.currentTarget).addClass("active")
        }, mouseleave: function () {
            this.mousedover = !1, !this.focused && this.shown && this.hide()
        }
    };
    var b = $.fn.typeahead;
    $.fn.typeahead = function (b) {
        var c = arguments;
        return this.each(function () {
            var d = $(this), e = d.data("typeahead"), f = "object" == typeof b && b;
            e || d.data("typeahead", e = new a(this, f)), "string" == typeof b && (c.length > 1 ? e[b].apply(e, Array.prototype.slice.call(c, 1)) : e[b]())
        })
    }, $.fn.typeahead.defaults = {
        source: [],
        items: 8,
        menu: '<ul class="typeahead dropdown-menu"></ul>',
        item: '<li><a href="#"></a></li>',
        minLength: 1,
        scrollHeight: 0,
        autoSelect: !0
    }, $.fn.typeahead.Constructor = a, $.fn.typeahead.noConflict = function () {
        return $.fn.typeahead = b, this
    }, $(document).on("focus.typeahead.data-api", '[data-provide="typeahead"]', function () {
        var a = $(this);
        a.data("typeahead") || a.typeahead(a.data())
    })
}, ib_stripIndent = function (a) {
    var b = a.match(/^[ \t]*(?=\S)/gm);
    if (!b)return a;
    var c = Math.min.apply(Math, b.map(function (a) {
        return a.length
    })), d = new RegExp("^[ \\t]{" + c + "}", "gm");
    return c > 0 ? a.replace(d, "") : a
}, reCommentContents = /\/\*!?(?:\@preserve)?[ \t]*(?:\r\n|\n)([\s\S]*?)(?:\r\n|\n)[ \t]*\*\//, ib_multiline = function (a) {
    if ("function" != typeof a)throw new TypeError("Expected a function");
    var b = reCommentContents.exec(a.toString());
    if (!b)throw new TypeError("Multiline comment missing.");
    return b[1]
};
ib_multiline.stripIndent = function (a) {
    return ib_stripIndent(ib_multiline(a))
};
var ib_parseData = function (a) {
    function b(a) {
        return a.trim()
    }

    var c, d, e, f, g, h = [], i = {};
    for (c = a.split("\n"), d = 0; d < c.length; d++)if (f = c[d].trim(), "#" != f) {
        if ("[" == f[0]) {
            var j = f.substring(1, f.length - 1);
            i[j] = c[d + 1].replace(/\r|\n/g, "")
        }
        if ("[default_columns]" == f && (i.default_columns = i.default_columns.split(",").map(b)), "[items]" == f) {
            for (e = d + 1, f = c[e].replace(/\r|\n/g, ""); "" !== f;) {
                var k = f.split("@||@");
                h.push({
                    item_description: k[0],
                    item_quantity: k[1],
                    item_price: k[2],
                    item_discount: k[3],
                    item_tax: k[4]
                }), e++, f = c[e].trim()
            }
            i.items = h
        }
        if ("[document_custom]" == f)for (e = d + 1, f = c[e].replace(/\r|\n/g, ""); "" !== f;)g = f.split("@||@"), i["{document_custom_" + g[0] + "}"] = g[1], e++, f = c[e].trim();
        if ("[client_custom]" == f)for (e = d + 1, f = c[e].replace(/\r|\n/g, ""); "" !== f;)g = f.split("@||@"), i["{client_custom_" + g[0] + "}"] = g[1], e++, f = c[e].trim()
    }
    return delete i.document_custom, delete i.client_custom, i
};