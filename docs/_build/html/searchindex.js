Search.setIndex({docnames:["api/collation","api/date","api/ner","api/number","api/romanization","api/sentiment","api/soundex","api/spell","api/tag","api/tokenizer","api/ulmfit","api/word_vector","index","notes/getting_started","notes/installation"],envversion:55,filenames:["api/collation.rst","api/date.rst","api/ner.rst","api/number.rst","api/romanization.rst","api/sentiment.rst","api/soundex.rst","api/spell.rst","api/tag.rst","api/tokenizer.rst","api/ulmfit.rst","api/word_vector.rst","index.rst","notes/getting_started.rst","notes/installation.rst"],objects:{"pythainlp.collation":{collation:[0,0,1,""]},"pythainlp.date":{now:[1,0,1,""]},"pythainlp.ner":{thainer:[2,1,1,""]},"pythainlp.ner.thainer":{get_ner:[2,2,1,""]},"pythainlp.number":{num_to_text:[3,0,1,""],num_to_thai_num:[3,0,1,""],numtowords:[3,0,1,""],text_to_num:[3,0,1,""],thai_num_to_num:[3,0,1,""],thai_num_to_text:[3,0,1,""]},"pythainlp.romanization":{romanization:[4,0,1,""]},"pythainlp.romanization.thai2rom":{thai2rom:[4,1,1,""]},"pythainlp.romanization.thai2rom.thai2rom":{romanization:[4,2,1,""]},"pythainlp.sentiment":{sentiment:[5,0,1,""]},"pythainlp.soundex":{LK82:[6,0,1,""],Udom83:[6,0,1,""]},"pythainlp.spell":{spell:[7,0,1,""]},"pythainlp.tag":{pos_tag:[8,0,1,""]},"pythainlp.tokenize":{create_custom_dict_trie:[9,0,1,""],dict_word_tokenize:[9,0,1,""],isthai:[9,0,1,""],sent_tokenize:[9,0,1,""],subword_tokenize:[9,0,1,""],word_tokenize:[9,0,1,""]},"pythainlp.ulmfit.utils":{ThaiTokenizer:[10,1,1,""],about:[10,0,1,""],document_vector:[10,0,1,""],get_all:[10,0,1,""],get_texts:[10,0,1,""],merge_wgts:[10,0,1,""],numericalizer:[10,0,1,""]},"pythainlp.ulmfit.utils.ThaiTokenizer":{proc_all:[10,3,1,""],proc_all_mp:[10,3,1,""],proc_text:[10,2,1,""],replace_rep:[10,3,1,""],sub_br:[10,2,1,""],tokenize:[10,2,1,""]},"pythainlp.word_vector.thai2vec":{about:[11,0,1,""],doesnt_match:[11,0,1,""],get_model:[11,0,1,""],most_similar_cosmul:[11,0,1,""],sentence_vectorizer:[11,0,1,""],similarity:[11,0,1,""]}},objnames:{"0":["py","function","Python function"],"1":["py","class","Python class"],"2":["py","method","Python method"],"3":["py","staticmethod","Python static method"]},objtypes:{"0":"py:function","1":"py:class","2":"py:method","3":"py:staticmethod"},terms:{"\u0e01":[2,9,13],"\u0e01\u0e04":[9,13],"\u0e01\u0e20\u0e32\u0e29\u0e32\u0e44\u0e17\u0e22\u0e20\u0e32\u0e29\u0e32\u0e1a":[9,13],"\u0e01\u0e25\u0e21":13,"\u0e01\u0e32\u0e23\u0e43\u0e0a":11,"\u0e04":[9,10,13],"\u0e04\u0e19":[9,13],"\u0e04\u0e19\u0e44\u0e17\u0e22":[9,13],"\u0e04\u0e23":[9,13],"\u0e07":5,"\u0e07\u0e32\u0e19":11,"\u0e08":5,"\u0e13":[9,13],"\u0e13\u0e19\u0e30\u0e04\u0e23":[9,13],"\u0e14":[0,9,13],"\u0e15":1,"\u0e15\u0e32":13,"\u0e15\u0e32\u0e01":13,"\u0e17":9,"\u0e17\u0e14\u0e2a\u0e2d\u0e1a":2,"\u0e17\u0e14\u0e2a\u0e2d\u0e1a\u0e23\u0e30\u0e1a\u0e1a\u0e40\u0e27\u0e25\u0e32":2,"\u0e19":[2,9,13],"\u0e19\u0e04\u0e19\u0e44\u0e17\u0e22\u0e23":[9,13],"\u0e19\u0e17":2,"\u0e19\u0e19":5,"\u0e19\u0e30":[9,13],"\u0e1a":[9,13],"\u0e1a\u0e42\u0e2d\u0e40\u0e04\u0e1a":[9,13],"\u0e1c\u0e21":[9,13],"\u0e1c\u0e21\u0e23":[9,13],"\u0e1e\u0e27\u0e01":[9,13],"\u0e1e\u0e27\u0e01\u0e40\u0e23\u0e32":[9,13],"\u0e1e\u0e27\u0e01\u0e40\u0e23\u0e32\u0e40\u0e1b":[9,13],"\u0e20\u0e32\u0e29\u0e32":[9,13],"\u0e20\u0e32\u0e29\u0e32\u0e44\u0e17\u0e22":[9,13],"\u0e22":2,"\u0e22\u0e21\u0e32\u0e01":5,"\u0e22\u0e22\u0e22\u0e22\u0e22\u0e22":10,"\u0e23":[9,13],"\u0e23\u0e30\u0e1a\u0e1a":2,"\u0e25\u0e21":13,"\u0e25\u0e32\u0e04\u0e21":1,"\u0e27":[0,2,5],"\u0e2a\u0e23":9,"\u0e2b\u0e21":0,"\u0e2d":9,"\u0e2d\u0e14":10,"\u0e2d\u0e32\u0e01\u0e32\u0e28\u0e14":5,"\u0e2d\u0e32\u0e23\u0e21\u0e13":5,"\u0e32\u0e07\u0e08\u0e32\u0e01":9,"\u0e32\u0e19":[9,13],"\u0e32\u0e19\u0e40\u0e01":[9,13],"\u0e40\u0e01":[9,13],"\u0e40\u0e04":[9,13],"\u0e40\u0e1b":[0,9,13],"\u0e40\u0e23\u0e32":[9,13],"\u0e40\u0e27\u0e25\u0e32":2,"\u0e40\u0e2a":5,"\u0e41\u0e21\u0e27":9,"\u0e41\u0e21\u0e27\u0e14":9,"\u0e42\u0e2d":[9,13],"\u0e42\u0e2d\u0e40\u0e04":[9,13],"\u0e44\u0e01":0,"\u0e44\u0e17\u0e22":[9,13],"\u0e51":3,"\u0e52":3,"\u0e53":3,"boolean":2,"class":[2,4,10],"default":10,"function":[0,3,8,9,11],"import":[0,2,5,9,10,13],"int":10,"new":[9,13],"public":11,"return":[0,1,2,3,4,5,6,7,8,9,10,11],"static":10,"tkrep6\u0e22":10,"true":[2,9],"try":14,EOS:13,For:[9,13,14],POS:8,The:[0,1,2,3,4,5,6,7,8,9,10,11,13],With:13,_pad_:10,_unk_:10,about:[10,11],abov:10,academ:8,accord:4,actual:9,add:[10,13],algorithm:[7,9],all:[9,10],along:9,alphabet:[0,4],alreadi:7,amount_numb:3,analysi:5,annot:8,apach:12,archiv:14,arguabl:13,arrai:10,artagg:8,articl:8,asian:13,automat:9,avaiabl:10,base:9,basi:13,becaus:13,begin:10,being:9,best:13,between:[4,9,11],biggest:13,boil:13,bool:9,both:13,can:13,captur:13,challeng:13,charact:[3,9,10],check:[7,9],check_al:9,chines:13,choos:[4,9],chunk:9,classif:13,classifi:13,closest:7,cluster:9,cmtr:2,collat:12,collect:10,column:10,com:[9,14],comma:13,common:9,connector:13,contain:[0,3,8,9,11],context:13,convert:1,corpu:8,correctli:7,cosin:11,counter:10,cpu:10,creat:[9,13],create_custom_dict_tri:9,current:[1,10],custom:9,custom_dict_sourc:9,custom_dict_tri:9,data:[0,4,9,11],data_dict:9,datafram:10,dataset:10,date:[2,12],decid:13,deep:[4,9],deepcut:9,degre:13,depend:8,desir:9,dev:14,develop:14,dict:[9,10,13],dict_word_token:9,dictionari:9,differ:[8,9,13],dim:11,document:10,document_vector:10,doe:[9,13],doesnt_match:11,doubl:10,down:13,download:11,each:10,easi:13,element:10,em_sz:10,embed:10,end:[9,13],engin:[4,5,7,8,9,10,13],english:4,entir:10,entiti:2,etc:13,even:13,exampl:[0,2,5,9,10,13],exist:7,express:13,extract:10,extrem:13,face:13,fals:[2,9,11],field:13,file:9,find:7,first:[9,10,11],first_word:10,follow:[10,13],format:9,found:9,french:13,freq:10,frequenc:10,from:[0,1,2,5,9,10,13],gensim:11,get:[2,10,12],get_al:10,get_model:11,get_ner:2,get_text:10,github:[9,14],given:7,habit:13,hard:13,has:[9,13],have:13,help:[1,9],histor:13,how:4,html:9,http:[9,14],hunspel:7,ibm:9,icu:[9,13],includ:[10,13],index:[9,12],indic:13,inform:9,input:[9,11],instal:[11,12],institut:4,integ:10,internaiton:4,issu:13,isthai:9,iter:10,ito:10,itos_cl:10,itos_pr:10,japanes:13,jsbr:2,known:13,label:[8,10],lack:13,languag:[12,13],latest:9,learn:4,less:[4,13],letter:13,lexto:9,librari:[12,13],licens:12,like:13,line:9,linux:7,list:[0,2,8,9,10,11,13],list_text:8,listdata:11,listword:9,lk82:6,longest:9,lot:13,maintain:12,make:[11,13],marisa:9,mark:[9,13],match:9,max_vocab:10,maximum:[9,10],merg:10,merge_wgt:10,meth:10,min_freq:10,minimum:10,model:[10,11],modul:12,month:1,more:[4,9,10],most:13,most_similar_cosmul:11,multi:13,multipl:[9,10],name:2,nativ:13,natur:[12,13],ncmn:2,ncnm:2,neg:[5,11],ner:12,network:9,neural:9,newlin:9,newmm:[9,10,13],nlp:[12,13],none:10,norvig:7,note:12,now:1,num_to_text:3,num_to_thai_num:3,number:[10,12],numeric:10,numpi:[10,11],numtoword:3,often:13,old:5,one:4,option:9,orchid:8,other:13,out:[1,3,4,13],output:[1,9],overcom:13,packag:[12,13],pad:10,pad_tok:10,page:12,panda:10,parallel:8,param:[9,10],paramet:[0,2,3,4,5,6,7,8,9,10,11],part:8,path:9,perceptron:8,period:13,peter:7,phonet:4,phrase:9,pip:14,pois:13,pomm:13,pos:5,pos_tag:8,posit:[10,11],postag:2,potato:13,pre:11,pretrain:10,problem:13,proc_al:10,proc_all_mp:10,proc_text:10,process:[3,10,12,13],procss:10,prong:13,proport:9,provid:9,pud:8,punc:2,put:[4,8],pyicu:4,pylexto:[9,13],pythainlp:[13,14],python:[12,13],pytorch:10,quick:13,rather:9,rdr:8,read:4,readthedoc:9,recent:13,recogn:9,recognit:2,recommend:10,refer:[3,12],regard:8,remov:10,repetit:10,replac:10,replace_rep:10,requir:11,research:13,roman:[5,12],root:13,royal:4,royin:4,rule:[6,9,13],run:10,save:10,search:12,second:[9,10,11],second_word:10,see:9,seem:13,segment:[9,13],select:10,sens:13,sent_token:9,sentenc:[9,10,13],sentence_vector:11,sentiment:12,set:13,should:[4,7,13],similar:[11,13],simpli:4,size:10,smallest:9,softwar:12,sort:0,soundex:12,sourc:[0,1,2,3,4,5,6,7,8,9,10,11],space:[9,10,13],special:10,speech:8,spell:[1,3,4,12],split:9,stabl:14,standard:4,start:12,stoi:10,str:[3,4,5,6,7,8,9,10,11],string:[2,8,9,10],structur:9,sub_br:10,subword:13,subword_token:9,system:13,tag:[10,12],tagger:8,take:8,task:13,tcc:9,team:12,techniqu:13,term:13,terr:13,text:[0,1,2,3,4,5,7,8,9,10,13],text_to_num:3,thai2rom:4,thai2vec:11,thai:[0,1,2,3,4,5,6,8,9,12,13],thai_num_to_num:3,thai_num_to_text:3,thainer:2,thaitoken:10,than:10,them:13,thi:[9,13],time:2,tkrep:10,todo:13,tok:10,tok_engin:10,token:[8,10,12,13],train:[11,13],translat:13,treebank:8,trie:9,tupl:[9,10],turn:4,two:[11,13],udom83:6,ulmfit:[5,12],understand:13,unigram:8,uniqu:9,unit:9,univers:[3,8],unk_tok:10,unk_token:10,unknown:10,use:[10,11,13],use_mean:11,used:[8,9],uses:[7,9,13],using:10,util:10,vact:2,valu:9,vector:[10,11,13],veer66:9,version:14,vocab:10,vocabulari:10,vocaburari:9,weight:10,wgt:10,when:[9,13],where:[9,10,13],which:[7,8,9],white:9,whitespac:9,word1:11,word2:11,word:[3,6,7,8,9,10,11,13],word_token:[9,13],word_vector:12,wordcutpi:[9,13],would:13,write:13,xbo:10,year:1,yet:9,you:[9,10,13],zip:14},titles:["pythainlp.collation","pythainlp.date","pythainlp.ner","pythainlp.number","pythainlp.romanization","pythainlp.sentiment","pythainlp.soundex","pythainlp.spell","pythainlp.tag","pythainlp.tokenize","pythainlp.ulmfit","pythainlp.word_vector","PyThaiNLP documentation","Getting Started","Installation"],titleterms:{collat:0,date:1,depend:11,document:12,get:13,indic:12,instal:14,modul:[2,10,11],ner:2,number:3,pythainlp:[0,1,2,3,4,5,6,7,8,9,10,11,12],roman:4,sentiment:5,soundex:6,spell:7,start:13,tabl:12,tag:8,token:9,ulmfit:10,word_vector:11}})