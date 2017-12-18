$(function(){
  var baseUrl = '../evaluate-platform/';
  var headstr = '<header><ul class="nav clearfix"><a href="../index.html" class="bbs_logo"><img src="images/bbs_logo.png"/></a><li><a href="../evaluate-platform/ep_index.html">首页</a></li><li><div>社会经济背景</div><div><div><dl><dt>经济背景</dt><dd><a href="../evaluate-platform/ep_gdp.html">人均GDP</a></dd><dd><a href="../evaluate-platform/ep_finance.html">人均财政支出</a></dd>' +
      '</dl><dl><dt>社会背景</dt><dd><a href="../evaluate-platform/ep_popSum.html">人口总量</a></dd><dd><a href="../evaluate-platform/ep_popDensity.html">人口密度</a></dd><dd><a href="../evaluate-platform/ep_popDistribute.html">城乡结构</a></dd></dl><dl><dt>教育人口背景</dt><dd><a href="#">在校生数</a></dd></dl></div></div>' +
      '</li><li><div>教育机会</div><div><div><dl><dt class="link"><a href="../evaluate-platform/ep_enrollRate.html">升学率</a></dt></dl></div></div></li><li><div>教育投入</div><div><div><dl><dt>经费</dt><dd><a href="../evaluate-platform/../evaluate-platform/ep_eduExpense.html">国家财政性教育经费</a></dd><dd><a href="../evaluate-platform/ep_eduExpenseRate.html">国家财政性教育经费GDP比</a></dd><dd>' +
      '<a href="../evaluate-platform/ep_planExpense.html">预算内教育经费</a></dd><dd><a href="#">预算内教育经费占GDP比</a></dd><dd><a href="#">教育支出结构</a></dd></dl><dl><dt>教师</dt><dd><a href="#">教师数</a></dd>' +
      '<dd><a href="#">专任教师学历</a></dd><dd><a href="#">专任教师职称</a></dd></dl><dl><dt>设施</dt><dd><a href="../evaluate-platform/ep_schoolNum.html">学校数</a></dd><dd><a href="#">校舍</a></dd><dd>' +
      '<a href="#">班级数</a></dd><dd><a href="#">教室</a></dd></dl><dl><dt>设备</dt><dd><a href="#">固定资产</a></dd></dl></div></div></li><li><div>教育过程</div><div><div><dl><dt><a href="../evaluate-platform/ep_schoolscale.html">校均规模</a></dt><dt>' +
      '<a href="../evaluate-platform/ep_schoolarea.html">校均占地面积</a></dt><dt><a href="../evaluate-platform/ep_schoolquote.html">班额</a></dt><dt><a href="#">班级面积</a></dt></dl><dl><dt><a href="../evaluate-platform/ep_stuToTea.html">生师比</a></dt><dt><a href="../evaluate-platform/ep_finCost.html">生均国家财政性教育经费</a></dt><dt><a href="#">生均高学历专任教师</a></dt>' +
      '<dt><a href="#">生均预算内教育经费</a></dt></dl><dl><dt>行政力量</dt><dd><a href="#">行政办公用房面积</a></dd><dd><a href="#">行政办公用房占校舍比</a></dd>' +
      '<dd><a href="#">专任教师占比</a></dd></dl><dl><dt><a href="#">教师支出</a></dt><dt><a href="#">班师比</a></dt></dl></div></div></li><li><div>教育结果</div><div><div><dl><dt><a href="../evaluate-platform/ep_eduYears.html">劳动人口平均受教育年限</a></dt></dl><dl><dt>' +
      '<a href="../evaluate-platform/ep_humanSum.html">人力资本总量</a></dt></dl></div></div></li>' +
      ' <li class="bbs_top_r"><div class="bbs_top_per"><a href="../bbs/bbs_personal.html"><span>郑老师,欢迎您！</span><img src="images/avatar.png"></a></div></li></ul></header>';
  Vue.component("v_header",{
    template: headstr,
    data:function(){
      return{
        indexUrl:"../evaluate-platform/ep_index.html"
      }
    }
  });
  $(document).on("mouseover","ul.nav li:not(:first)",function(){
    $("ul.nav li:not(:first) div:not(:first-child)").hide();
    $(this).addClass("selected").find("div:not(:first)").show();
  });
  $(document).on("mouseout","ul.nav li:not(:first)",function(){
    $(this).removeClass("selected");
    $("ul.nav li:not(:first) div:not(:first-child)").hide();
  });
  var footstr = '<footer class="bbs_footer"><div class="bbs_footer_m"><div class="bbs_footer_l"><span class="bbs_footer_t">合作伙伴</span><ul><li><a href="#">科大讯飞</a></li><li><a href="#">北京师范大学</a></li><li><a href="#">基础教育大数据国家工程实验室</a></li><li><a href="#">洛阳市政府</a></li><li><a href="#">MIT</a></li><li><a href="#">Dublin City University</a></li><li><a href="#">浙江金华市政府</a></li><li><a href="#">University of Piraeus</a></li><li><a href="#">OUC (Barcelona)</a></li><li><a href="#">贵州清镇市</a></li><li><a href="#">Athabasca University</a></li><li><a href="#">UNESCO on e-learning & OER</a></li><li><a href="#">成都双流区</a></li><li><a href="#">Harvard University</a></li><li><a href="#">University of London</a></li></ul></div><div class="bbs_footer_r"><a class="bbs_f_about" href="#">关于我们</a><span class="bbs_f_contact">联系方式</span><ul><li><span>邮政编码：100875</span></li><li><span>地址：学院南路12号京师科技大厦A座3楼</span></li><li><span>邮箱：icome@bnu.edu.cn</span></li><li><span>Copyright © 基础教育大数据应用研究院</span></li><li><a class="a1" href="#"></a><a class="a2" href="#"></a><a class="a3" href="#"></a></li></ul></div></div></footer>';

  Vue.component('v_footer',{
    template: footstr
  })
});
