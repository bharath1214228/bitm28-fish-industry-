"use strict";jQuery(document).ready(function($){var tbId=1;var visiableRows=5;var numMore=5;$('table').each(function(){var self=$(this);self.addClass("table-"+tbId);self.attr('id',"table-"+tbId);var tdCounter=0;self.find('td').each(function(){tdCounter++});var $table=$('.table-'+tbId).find('tbody');var visiableRow=$table.find('tr:visible').length;if(visiableRow>5){$table.find('tr:gt('+(numMore-1)+')').hide().end();$('.table-'+tbId).after('<div class="tblexp table-expand"><button class="tblmore expandtable">View more</button></div>')}
tbId++});var numShown1=5;var numMore1=5;$(document).on('click','.tblmore',function(){var getCurTblId=$(this).parents('.table-expand').prev('table').attr('id');var getTableIdForMore=$('#'+getCurTblId);var numRows1=getTableIdForMore.find('tr').length;var visiableRows=getTableIdForMore.find('tr:visible').length;numShown1=visiableRows+5;if(numShown1>=numRows1){$(this).parent().addClass('lessadded');$(this).text('View less');$(this).removeClass('tblmore');$(this).addClass('lessbtn')}
getTableIdForMore.find('tr:lt('+numShown1+')').show()});$(document).on('click','.lessbtn',function(){var getCurTblId_less=$(this).parents('.table-expand').prev('table').attr('id');var getTableIdForLess=$('#'+getCurTblId_less);getTableIdForLess.find('tr:gt('+(5-1)+')').hide().end();$(this).parent().removeClass('lessadded');$(this).text('View more');$(this).removeClass('lessbtn');$(this).addClass('tblmore');numShown1=5;$('html, body').animate({scrollTop:getTableIdForLess.offset().top-250},500)})})