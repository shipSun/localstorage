function search(config={}){
	this.data=[];
	this.key='search';
	this.id = 'list';
	this.urlName='#url';
	this.keywordName='#keyword';
	this.tmp = '<li><a href="#url">#keyword</a></li>';
	return this.init(config);
}

search.prototype.init=function(config={}){
	if(config.key != undefined){
		this.key = config.key;
	}
	if(config.id != undefined){
        this.id = config.id;
    }
	if(config.urlName != undefined){
        this.urlName = config.urlName;
    }
	if(config.keywordName != undefined){
        this.keywordName = config.keywordName;
    }
	if(config.tmp != undefined){
        this.tmp = config.tmp;
    }
	return this;
};
search.prototype.clean=function(){
	localStorage.removeItem(this.key);
};
search.prototype.set = function(key, data){
    this.data[key] = data;	
};
search.prototype.push=function(key){
	var object = new Object();
	if(!(object = this.find(key))){
		object = new Object();
		object.id = this.data.length;
	    object.key = key;
		object.count = 1;
		this.data.push(object);
	}else{
		object.count = object.count+1;
		this.set(object.id, object);
	}
	this.update();
	return this;
};
search.prototype.find = function(key){
   for(i in this.list()){
	   if(this.data[i].key==key){
		   return this.data[i];
	   }
   }	
   return false;
};
search.prototype.update=function(data=null){
	if(data!=null){
		this.data = data;
	}
	localStorage.setItem(this.key,JSON.stringify(this.data));
}
search.prototype.list=function(){
	this.data = localStorage.getItem(this.key);
    if(this.data==null){
    	this.data = this.fillData();
    }else{
    	this.data = JSON.parse(this.data);
    }
	return this.data;
};
search.prototype.fillData=function(){
	return [];
}
search.prototype.createDiv=function(url){
	var html = tmp = '';
	if(this.target){
		target=this.target;
	}
	for(i in this.list()){
		if((i == "remove")){
			break;
		}
		tmp = this.tmp.replace(this.urlName, url+this.data[i].key);
		html+= tmp.replace(this.keywordName, this.data[i].key);
	}
	$('#'+this.id).html(html);
}
jQuery.search = function(){
	 try{
		 return (new search()).init(config);
	 }catch(e){
		 
	 }
	 return new search();
}