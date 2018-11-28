Cascading Style Sheets 层叠样式表

分辨率分为物理分辨率和屏幕分辨率
优点:（
    可以更方便的控制页面的布局，更多类型的样式，
     更易用。比在html标签里使用属性直接增加样式更易用
     层叠，继承。样式可以覆盖，有优先级，可以继承。

* 元素的层级关系
 * 嵌套/层叠/树形/递归/
   -子元素
   -父元素
   -兄弟元素
   -祖先元素
   -后代元素
* 替换元素和非替换元素
  替换元素：用来替换元素内容的部分并非由文档内容直接表示。如img和input。没有后代/标签/子节点
  非替换元素：大部分HTML元素都为非替换元素，会显示文档内容。
* 块级元素和行内（内联）元素
  块级元素：块级元素会影响文档中其他内容的显示，类似于在元素框的开始和结束处添加分隔符。会占满父元素的宽度，旁边不能有其他元素
  行内元素：生成元素行内框时不影响文档其他内容的显示。
  在CSS中，对于显示角色如何嵌套不存在任何限制。
   * display
        可以改变元素的显示角色
如何让css在html中生效
 * style标签/link标签
    *link标签用来引入外部样式表（），<link  rel="stylesheet" type="text/css" href="sheet1" media="all" >;
      link标签必须放在head元素中。
      其中media可以指定样式表生效的时间点，比如media:"print"表示在打印时生效。
     *外部样式表（不能包含任何文档标记）
       *stylesheet，一个文档可以同时连结多个外部样式表，但会先显示rel为stylesheet的；如都为stysheet，则会结合使用。
     *alternate（候选样式表）
      *当rel属性为alternate时，可以供用户选择样式表，不过这时link需要有title属性。
        <link rel="stylesheet" type="text/css" href="sheet1" media="all" title="Default" >;
        <link rel="alternate" type="text/css" href="sheet2" media="all" title="Big text" >;
        可以从Default样式切换为Big text样式。
    * style
      始终以 <style type="text/css">开头，嵌套样式表，可以通过@import联结多个外部样式表。
    * import指令
      @import url（）
      联结外部样式表，必须出现在其他CSS规则前，外部样式表需要联结其他样式表时可以使用。
* CSS注释（不能嵌套使用）/*  */

*选择器
  * 元素选择器
    * 大部分html元素
      h1,p,h2 {color: pink;}
  * 通配选择器（*）  
  * 类选择器和ID选择器
    * p.warning.urgent {color: red;} ; p[urgent] {color: blue;}
      a#default {font-size: 18px;}
      一般认为ID具有唯一性，且优先级更高。 
      通常ID选择器用的较少
  * 简单属性选择器
    * a[href][title]{font-weight: bold;}
    *属性值选择器
      *  p[class="urgent warning"]{font-weight: bold;}是完全串匹配。
  * 后代元素
    * h1 em {......} em是h1的后代元素。
  * 选择子元素
    * div > p {.....} p是div的直接子元素。 
  * 相邻兄弟元素
    * h1 + p{....} 有共同的父元素，要注意的是选中的是p元素。
    * h1 ~ p{....} h1后的所有p元素，同级。
  * 第一个子元素 （静态伪类）(位置伪类)
    *  p:first-child {....} 选中的是某元素的第一个子元素p。
    *  p:last-child{....}
    *  p:nth-child(n){....}
    *  p:nth-last-child(n){...}
    *  p:nth-first-child(n){...}
       odd=2n+1,even=2n;
  * 伪类和伪元素
    *静态伪类和动态伪类
      *静态： 链接伪类 :link , :visited 常用于锚 （a）,其功能类似于body属性 link/vlink。
      其中:visited只能改颜色属性值，为防止隐私泄露.
      *动态： :focus , :hover , :active 类似于alink；
        * focus获取光标焦点
        * 链接的伪类书写顺序： link-visited-hover-active
      可以结合使用，a:link:hover{color: silver;}
  * 伪元素
    * :first-letter , :first-line , :before , :after;
  * 其他
    *字串选择器 
      [foo^="bar"] 以bar开头的元素，[foo$="bar"] 以bar结尾的元素，[foo*="bar"]含有bar的元素。
    *根据部分属性值选择
      p[class~="warning]和p.warning的效果一样，不过~可以用于任何属性。
    * [lang|="en"]{color: red;}选择lang属性且值为en或en-开头的元素。
    * lang（）根据语言选择.
    * a[href$=".pdf" i]::after{content:"(pdf)"} 在下载链接后加说明（格式），其中i表示对大小写不敏感。

    *选择器优先级
      * 优先级的定义，四个数
      * 0，0，0，0
      * id优先级 加0,1,0, 0
      * class attr pseduo(各个类属性值，属性选择或伪类) 加0，0， 1， 0
      * tag （各个元素和伪元素）0， 0， 0， 1
      * 通配选择器* 0，0，0，0
      *结合符（+，>,~)对特殊性没有任何贡献，
      *内联样式 1 ，0， 0， 0
      * 重要声明 !important(总是放在声明的最后，即分号的前面)
        * ！important的声明并没有特殊的特殊值，但要与非重要声明分开考虑，如与非重要声明冲突，胜出的总是重要声明。
        * 优先级 !important用户样式>!important作者样式>作者样式>用户样式>用户代理默认样式
      * 继承的属性是没有优先级的，比*的优先级还小
      * 声明越后出现，权重越大。
      *不来自CSS的样式
        * font的优先级(优先级为0)，出现在作者样式表最前面，只要有作者或用户样式，这种表现提示会被覆盖。

* 

   
   