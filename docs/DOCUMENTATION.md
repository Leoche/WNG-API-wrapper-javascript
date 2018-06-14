## Classes

<dl>
<dt><a href="#Wng">Wng</a></dt>
<dd><p>Wng class</p>
</dd>
<dt><a href="#WngRequest">WngRequest</a></dt>
<dd><p>WngRequest class</p>
</dd>
<dt><a href="#WngResponse">WngResponse</a></dt>
<dd><p>WngResponse class</p>
</dd>
</dl>

<a name="Wng"></a>

## Wng
Wng class

**Kind**: global class  
**Author**: Léo DESIGAUX  

* [Wng](#Wng)
    * [new Wng($consumerKey)](#new_Wng_new)
    * [.get($path)](#Wng+get) ⇒ [<code>WngRequest</code>](#WngRequest)
    * [.put($path, $data)](#Wng+put) ⇒ [<code>WngRequest</code>](#WngRequest)
    * [.post($path, $data)](#Wng+post) ⇒ [<code>WngRequest</code>](#WngRequest)
    * [.delete($path, $data)](#Wng+delete) ⇒ [<code>WngRequest</code>](#WngRequest)

<a name="new_Wng_new"></a>

### new Wng($consumerKey)
Wng Constructor, adds 'wng' to window object on success


| Param | Type | Description |
| --- | --- | --- |
| $consumerKey | <code>String</code> | Consumer key needed to call API, get one here https://cas.whyno.group/request_credential |

<a name="Wng+get"></a>

### wng.get($path) ⇒ [<code>WngRequest</code>](#WngRequest)
Construct a GET Request

**Kind**: instance method of [<code>Wng</code>](#Wng)  
**Returns**: [<code>WngRequest</code>](#WngRequest) - A built GET WngRequest  

| Param | Type | Description |
| --- | --- | --- |
| $path | <code>String</code> | API Path |

<a name="Wng+put"></a>

### wng.put($path, $data) ⇒ [<code>WngRequest</code>](#WngRequest)
Construct a PUT Request

**Kind**: instance method of [<code>Wng</code>](#Wng)  
**Returns**: [<code>WngRequest</code>](#WngRequest) - A built PUT WngRequest  

| Param | Type | Description |
| --- | --- | --- |
| $path | <code>String</code> | API Path |
| $data | <code>Object</code> | Data object passed to API |

<a name="Wng+post"></a>

### wng.post($path, $data) ⇒ [<code>WngRequest</code>](#WngRequest)
Construct a POST Request

**Kind**: instance method of [<code>Wng</code>](#Wng)  
**Returns**: [<code>WngRequest</code>](#WngRequest) - A built POST WngRequest  

| Param | Type | Description |
| --- | --- | --- |
| $path | <code>String</code> | API Path |
| $data | <code>Object</code> | Data object passed to API |

<a name="Wng+delete"></a>

### wng.delete($path, $data) ⇒ [<code>WngRequest</code>](#WngRequest)
Construct a DELETE Request

**Kind**: instance method of [<code>Wng</code>](#Wng)  
**Returns**: [<code>WngRequest</code>](#WngRequest) - A built DELETE WngRequest  

| Param | Type | Description |
| --- | --- | --- |
| $path | <code>String</code> | API Path |
| $data | <code>Object</code> | Data object passed to API |

<a name="WngRequest"></a>

## WngRequest
WngRequest class

**Kind**: global class  
**Author**: Léo DESIGAUX  

* [WngRequest](#WngRequest)
    * [new WngRequest($endpoint, $consumerKey)](#new_WngRequest_new)
    * [.send()](#WngRequest+send) ⇒ [<code>WngResponse</code>](#WngResponse)
    * [.debug()](#WngRequest+debug) ⇒ <code>String</code>

<a name="new_WngRequest_new"></a>

### new WngRequest($endpoint, $consumerKey)
WngRequest Constructor


| Param | Type | Description |
| --- | --- | --- |
| $endpoint | <code>String</code> | Endpoint of API |
| $consumerKey | <code>String</code> | Consumer key used to request API |

<a name="WngRequest+send"></a>

### wngRequest.send() ⇒ [<code>WngResponse</code>](#WngResponse)
Send the request

**Kind**: instance method of [<code>WngRequest</code>](#WngRequest)  
**Returns**: [<code>WngResponse</code>](#WngResponse) - A WngResponse object filled with response  
<a name="WngRequest+debug"></a>

### wngRequest.debug() ⇒ <code>String</code>
Debuging a request

**Kind**: instance method of [<code>WngRequest</code>](#WngRequest)  
**Returns**: <code>String</code> - A pretty print of request  
<a name="WngResponse"></a>

## WngResponse
WngResponse class

**Kind**: global class  
**Author**: Léo DESIGAUX  

* [WngResponse](#WngResponse)
    * [new WngResponse(res)](#new_WngResponse_new)
    * [.state()](#WngResponse+state) ⇒ <code>Boolean</code>
    * [.body()](#WngResponse+body) ⇒ <code>Object</code>
    * [.status()](#WngResponse+status) ⇒ <code>String</code>
    * [.debug()](#WngResponse+debug) ⇒ <code>String</code>

<a name="new_WngResponse_new"></a>

### new WngResponse(res)
WngResponse constructor


| Param | Type | Description |
| --- | --- | --- |
| res | <code>Object</code> | Json response |

<a name="WngResponse+state"></a>

### wngResponse.state() ⇒ <code>Boolean</code>
Get the state of response

**Kind**: instance method of [<code>WngResponse</code>](#WngResponse)  
**Returns**: <code>Boolean</code> - State of response  
<a name="WngResponse+body"></a>

### wngResponse.body() ⇒ <code>Object</code>
Get the body of response

**Kind**: instance method of [<code>WngResponse</code>](#WngResponse)  
**Returns**: <code>Object</code> - Object containing response data  
<a name="WngResponse+status"></a>

### wngResponse.status() ⇒ <code>String</code>
Get the status of endpoint

**Kind**: instance method of [<code>WngResponse</code>](#WngResponse)  
**Returns**: <code>String</code> - Status of endpoint  
<a name="WngResponse+debug"></a>

### wngResponse.debug() ⇒ <code>String</code>
Debuging a response

**Kind**: instance method of [<code>WngResponse</code>](#WngResponse)  
**Returns**: <code>String</code> - A pretty print of response  
